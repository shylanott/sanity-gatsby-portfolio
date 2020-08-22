import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import {responsiveTitle1} from '../components/typography.module.css'
import '../components/about.module.css'
import Img from 'gatsby-image'  
import Headshot from '../images/Shyla-headshot.jpg'

const About = props => {
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
            <section id="about" className="section">
                <h1 className={responsiveTitle1}>Hi, I'm Shyla.</h1> 
                <div className="section-content">
                    <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
                        <Img
                        title="Profile image"
                        alt="Large image of Maribel"
                        sizes={profileImg.sizes}
                        className="img-responsive center-block"
                        />
                        <img src={Headshot}></img>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <p>I'm a digital media manager passionate about web design, development and analytics. 
                        I'm based in San Diego where I work for a nonprofit investigative newsroom. My goal is 
                        to make complex information digestible, engaging and accessible – often through digital
                        experiences. I help my newsroom do that by integrating product thinking into our work and 
                        by strategically aligning business, audience and technology goals while highlighting our journalism.</p>
                        
                        <p>Earlier in my career, I was the assitant producer for All Sides with Ann Fisher – a live, public affairs talk show at the NPR 
                        member station in Columbus, Ohio.</p>
                        
                        <p>Before that, I earned my master's from Northwestern University's Medill School of Journalism with
                        a focus on interactive publishing.</p> 
                        
                        <p>I like to keep my skills sharp by regularly pursuing open source side projects <a href="https://github.com/shylanott/twitter-sentiment-analyzer">like this one</a>.</p>
                        
                        <p>Outside of journalism I enjoy pick-up basketball, floral design, watching Masterpiece on PBS 
                        and exploring southern California with my awesome husband.</p>

                        <p>I hail from the cornfields of central Illinois where I spent most weekends on my grandpa's farm. 
                        Another random fact about me: I played the baritone and tuba as a kid.</p>
                        
                        <p>Want to know more? Let's chat!</p>
                        <ul>
                        <li><a href="mailto:shyla.nott@gmail.com"><strong>Email</strong></a></li>
                        <li><a href="https://github.com/shylanott"><strong>GitHub</strong></a></li>
                        <li><a href="https://twitter.com/shylanott"><strong>Twitter</strong></a></li>
                        <li><a href="https://www.linkedin.com/in/shylanott/"><strong>LinkedIn</strong></a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>

          {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}

        </div>
      </Container>
    </Layout>
  )
}

export default About