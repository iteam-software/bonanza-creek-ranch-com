import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { graphql } from "gatsby";
import Img from "gatsby-image"

import Layout from "../components/layout";
import Splash from "../components/splash";
import SEO from "../components/seo";
import Container from "../components/container";
import Grid from "../components/grid";
import List from "../components/list";
import Card from "../components/card";
import ContentGrid from "../components/content-grid";
import Portfolio from "../components/portfolio";

export const query = graphql`
  {
    splashes: allFile(filter: {relativePath: {regex: "images/splashes/img.*.jpg/"}}) {
      nodes {
        childImageSharp {
          fluid (maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
    portfolio: allFile(filter: { relativePath: { regex: "/.*/portfolio/.*/" } }) {
      nodes {
        childImageSharp {
          ... on ImageSharp {
            original {
              src
            }
          }
        }
        id
      }
    }
    drone: file(relativePath: {regex: "images/drone-1x.png/"}) {
      childImageSharp {
        fluid (maxWidth: 4000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cowboysAndAliens: file(relativePath: {regex: "images/cowboys-and-aliens-1x.png/"}) {
      childImageSharp {
        fluid (maxWidth: 4000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data:{ splashes,portfolio,drone,cowboysAndAliens } }) => {
  return(
  <SimpleReactLightbox>
    <SEO title="Bonanza Creek Movie Ranch" />
    <Layout>
      <Splash images={splashes.nodes} />
      <Container>
        <h1>Welcome!</h1>
        <ContentGrid>
          <div>
            <p>
              Bonanza Creek Ranch is an all-inclusive film location nestled in
              the foothills of northern New Mexico. The ranch is spread out over
              several thousands of acres and features over 2 ponds, one movie
              town and 2 home sets. More than 130 movies, as well as various
              videos, commercials and catalog shoots have been filmed here! The
              ranch is also available for private parties, corporate retreats,
              and classroom visits.
            </p>
            <h2 className="tagline" style={{ margin: "1em 0" }}>
              Where the Old West Comes Alive
            </h2>
            <strong>Recent Film Credits</strong>
            <List columns={2}>
              <li>Hostiles</li>
              <li>Manhatten</li>
              <li>Cowboys & Aliens</li>
              <li>Wild Hogs</li>
              <li>Manhattan</li>
              <li>Only the Brave</li>
              <li>The Ballad of Buster Scruggs</li>
              <li>Appaloosa</li>
              <li>3:10 to Yuma</li>
              <li>Longmire</li>
            </List>
          </div>
          <Grid columns="1fr">
            <Card>
              <Portfolio
                images={portfolio.nodes.map(
                  node => node?.childImageSharp?.original
                )}
              >
                <Img
                  fluid={drone?.childImageSharp?.fluid}
                  alt="View drone photos by Monsoon DroneWorx"
                ></Img>
              </Portfolio>
            </Card>
            <Card>
              <Img
                fluid={cowboysAndAliens?.childImageSharp?.fluid}
                alt="Cowboys and Aliens"
              ></Img>
            </Card>
          </Grid>
        </ContentGrid>
      </Container>
    </Layout>
  </SimpleReactLightbox>
  )
};

export default IndexPage;
