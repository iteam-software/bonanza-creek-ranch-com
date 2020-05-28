import React from "react";
import { graphql } from "gatsby";

import sets1 from "../images/splashes/sets1.jpg";
import sets2 from "../images/splashes/sets2.jpg";
import sets3 from "../images/splashes/sets3.jpg";
import sets4 from "../images/splashes/sets4.jpg";
import sets5 from "../images/splashes/sets5.jpg";

import Layout from "../components/layout";
import ContentGrid from "../components/content-grid";
import SpecialFeatures from "../components/special-features";
import List from "../components/list";
import Splash from "../components/splash";
import Container from "../components/container";
import Set from "../components/set";
import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../components/seo";

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/.*/sets/.*/" } }) {
      nodes {
        frontmatter {
          title
          thumbnail
          gallery
        }
        rawMarkdownBody
      }
    }
  }
`;

export default function OurSetsPage({ data }) {
  const sets = data.allMarkdownRemark.nodes.map(node => (
    <SimpleReactLightbox key={node.frontmatter.title}>
      <Set
        title={node.frontmatter.title}
        thumbnail={node.frontmatter.thumbnail}
        body={node.rawMarkdownBody}
        gallery={node.frontmatter.gallery}
      />
    </SimpleReactLightbox>
  ));

  return (
    <>
      <SEO title="Our Sets" />
      <Layout>
        <Splash images={[sets1, sets2, sets3, sets4, sets5]} />
        <Container>
          <h1>Our Sets</h1>
          <ContentGrid>
            <div>{sets}</div>
            <SpecialFeatures>
              <strong>5 Distinct Sets</strong>
              <List>
                <li>360 Panorama Vistas</li>
                <li>Ponds, Mesas, & Plains</li>
                <li>Free Roaming Cattle</li>
              </List>
              <br />
              <strong>Support Services</strong>
              <List>
                <li>Film Office</li>
                <li>Veteran Crews</li>
                <li>Sound Stage</li>
              </List>
            </SpecialFeatures>
          </ContentGrid>
        </Container>
      </Layout>
    </>
  );
}
