import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import {responsiveTitle1} from '../components/typography.module.css'

import styles from '../components/project.module.css'
import avatarStyles from '../components/role-list.module.css'

import Headshot from '../images/Shyla-headshot.jpg'
import Img from 'gatsby-image'

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
        <div className={styles.mainContent}>
          <div>
            <h1 className={responsiveTitle1}>Hi, I'm Shyla</h1> 
              {/* <img src={headshot} className={avatarStyles.avatar}></img> */}
              {/* <img src={Headshot} alt='Shyla Nott profile picture' /> */}
              {/* <Img 
                  fluid={data.HeadshotGatsbyImage.fluid}
                  alt="This is a headshot"
              /> */}          
              <p>I'm a web developer with a passion for data analysis and visualizations. 
                I'm based in San Diego where I work for a nonproft investigative newsroom as the web and social media manager. 
                Before that, I was a radio producer for a live, public affairs talk show at the NPR 
                member station in Columbus, Ohio. I earned my master's from Northwestern University's Medill School of Journalism.</p> 
              <p>I keep my skills sharp by regularly pursuing open source side projects <a href="https://github.com/shylanott/twitter-sentiment-analyzer">like this one</a>.</p>
              <p>Outside of work I enjoy pick-up basketball, floral design, watching Masterpiece on PBS 
                and exploring southern California with my awesome husband.</p>
              <p>Want to know more? Let's chat!</p>
              <ul>
                <li><a href="mailto:shyla.nott@gmail.com"><strong>Email</strong></a></li>
                <li><a href="https://github.com/shylanott"><strong>GitHub</strong></a></li>
                <li><a href="https://twitter.com/shylanott"><strong>Twitter</strong></a></li>
                <li><a href="https://www.linkedin.com/in/shylanott/"><strong>LinkedIn</strong></a></li>
              </ul>
          </div>
          {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
query {
  HeadshotGatsbyImage: sanityImageAsset {
    fluid(maxWidth: 2000) {
      ...GatsbySanityImageFluid
    }
  }
}
`

