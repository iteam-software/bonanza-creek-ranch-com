import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Splash from "../components/splash";
import Container from "../components/container";
import Flex from "../components/flex";
import ContentGrid from "../components/content-grid";
import Card from "../components/card";
import SEO from "../components/seo";

export const query = graphql`
  {
    splashes: allFile(filter: {relativePath: {regex: "images/splashes/about.*.jpg/"}}) {
      nodes {
        childImageSharp {
          fluid (maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
    bcrSign: file(relativePath: {regex: "images/BCR-metal-sign-1x.png/"}) {
      childImageSharp {
        fluid (maxWidth: 4000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
      id
    }
  }
`;

const AboutUsPage = ({data:{ splashes, bcrSign }}) => {
  return (
    <>
      <SEO title="About Us" />
      <Layout>
        <Splash images={splashes.nodes} />
        <Container>
          <h1>About Us</h1>
          <ContentGrid>
            <div style={{ flex: "1 0.6 auto" }}>
              <p>
                As one of the premiere locations in the western United States,
                Bonanza Creek Ranch offers a vast array of filming
                opportunities. With an unobstructed 360° vista, five sets –
                including a 24-building town – and a location only minutes south
                of Santa Fe, New Mexico, it’s easy to understand why it is a top
                choice for not only big and small screen movies but also music
                videos, commercials and catalog shoots.
              </p>
              <p>
                Recent movie credits include <i>Cowboys and Aliens</i>,{" "}
                <i>Appaloosa</i>, <i>Wild Hogs</i>,{" "}
                <i>3:10 to Yuma and Kid Nation</i>. There’s also{" "}
                <i>Astronaut Farmer</i>,<i>Into The West</i>,{" "}
                <i>All The Pretty Horses</i> and <i>The Lazarus Man</i>.
                Traveling even farther back into the old west are blockbusters
                like <i>Silverado</i>, <i>Lonesome Dove</i>,{" "}
                <i>Lighting Jack</i> and <i>The Cowboys</i>. A movie called{" "}
                <i>The Man From Laramie</i> started it all in 1955.
              </p>
              <p>
                Find out more about our offerings and the sets by clicking on
                the links above. Take a nostalgic trip down memory lane by
                visiting Our History. Find out how you can have a
                once-in-a-lifetime opportunity to visit us. Special arrangements
                can be made for private parties, corporate retreats, photo
                classes, bus tours… the list goes on.
              </p>
              <h2 className="tagline" style={{ textAlign: "left" }}>
                Bonanza Creek Ranch – it’s your best location choice.
              </h2>
            </div>
            <Flex direction="column" style={{ alignItems: "center" }}>
              <Card>
                <img 
                  src={bcrSign?.childImageSharp?.fluid?.src} 
                  alt="Bonanza Creek Ranch"
                ></img>
              </Card>
              <p className="muted">
                The Hughes Family has owned the Bonanza Creek Ranch since the
                1980’s. Their first dealings in the filming business were with
                Columbia Pictures and a project called Silverado. Along with
                cattle ranching, Bonanza Creek Ranch has been a prime location
                for weddings, and commercials such as, Dr. Pepper and Ford Motor
                Company.
              </p>
            </Flex>
          </ContentGrid>
        </Container>
      </Layout>
    </>
  );
}

export default AboutUsPage