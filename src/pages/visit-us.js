import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Container from "../components/container";
import Map from "../components/map";
import List from "../components/list";
import ContentGrid from "../components/content-grid";
import Splash from "../components/splash";
import SEO from "../components/seo";

export const query = graphql`
  {
    splashes: allFile(filter: {relativePath: {regex: "images/splashes/visit.*.jpg/"}}) {
      nodes {
        childImageSharp {
          fluid (maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
  }
`;

export default function VisitUsPage({data:{ splashes }}) {
  return (
    <>
      <SEO title="Visit Us" />
      <Layout>
        <Splash images={splashes?.nodes}></Splash>
        <Container>
          <h1>Visit Us</h1>
          <ContentGrid>
            <div>
              <p>
                Directions: Take Interstate 25 south from Santa Fe or north from
                Albuquerque to Exit 271 (LaCienega). Turn east, proceed to the
                Frontage Road and turn right. Follow the Frontage Road for ¾
                miles to Bonanza Creek Road and follow it for one mile to the
                Bonanza Creek Ranch Entrance. Watch for the white gate – it will
                be on your right.
              </p>

              <h3 className="tagline">We're More Than Just Filming!</h3>

              <strong>Living Classroom</strong>
              <List>
                <li>Photographers</li>
                <li>Painters</li>
                <li>History Buffs</li>
              </List>
            </div>
            <Map />
          </ContentGrid>
        </Container>
      </Layout>
    </>
  );
}
