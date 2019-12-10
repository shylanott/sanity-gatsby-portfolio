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
        <p>I'm a digital marketer with a passion for data science and analytics with a side of web design and development. I worked in journalism as a radio and web producer for five years gaining experience in a range of skills from design and development to project and client management. I keep my skills sharp by regularly contributing to open source and side projects.
Outside of work I enjoy playing pick-up basketball, floral design and exploring southern California with my husband.
Want to know more?</p> 
        <p>Send me an email and let's chat!</p>
        <a href="mailto:shyla.nott@gmail.com"><strong>shyla.nott@gmail.com</strong></a>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  )
}

export default AboutPage