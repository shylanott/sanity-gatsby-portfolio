import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import {responsiveTitle1} from '../components/typography.module.css'


const AboutPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='About' />
      <Container>
        <h1 className={responsiveTitle1}>Hi, I'm Shyla</h1>
        <p>I'm a frontend web developer with a passion for data science and analytics, web design and development, and content management. I work at inewsource, a nonproft investigative newsroom, as the web and social media manager. Before that, I was a radio producer for a live, public affairs talk show at the NPR member station in Columbus, Ohio.</p> 
        <p>I keep my skills sharp by regularly pursuing open source side projects <a href="https://github.com/shylanott/twitter-sentiment-analyzer">like this one</a>.</p>
        <p>Outside of work I enjoy pick-up basketball, floral design, watching Masterpiece on PBS and exploring southern California with my awesome husband.</p>
        <p>Want to know more? Send me an email and let's chat!</p>
        <a href="mailto:shyla.nott@gmail.com"><strong>shyla.nott@gmail.com</strong></a>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  )
}

export default AboutPage

