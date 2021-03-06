import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {responsiveTitle1} from '../components/typography.module.css'
import About from "../components/about";


import styles from '../components/project.module.css'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    projects: allSanityProject(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <div className={styles.mainContent}>
          <h1 hidden>Welcome to {site.title}</h1>
          <h1 className={responsiveTitle1}>Hi, I'm Shyla.</h1>
          <div>
            <p>I'm a digital manager, web designer and developer passionate about making complex information 
              digestible, accessible and engaging.</p> 
              
            <p>I work for a nonprofit investigative newsroom in San Diego where I oversee the organization's core products, 
              including the website, newsletters and social media accounts. Before that, I was the assistant producer for a live, daily public affairs talk show at WOSU Public Radio in Columbus, Ohio. 
              I earned my master's from Northwestern University's Medill School of Journalism with a focus on interactive publishing.</p>

            <p>If you'd like to say hello, <a href="mailto:shyla.nott@gmail.com">send me an email</a> or reach out on <a href="https://www.linkedin.com/in/shylanott/">LinkedIn</a>.</p>
          </div>
        </div>
        {projectNodes && (
          <ProjectPreviewGrid
            title='Latest projects'
            nodes={projectNodes}
            browseMoreHref='/projects/'
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
