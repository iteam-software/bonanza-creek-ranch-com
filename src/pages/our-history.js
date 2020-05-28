import React from "react";

import Layout from "../components/layout";
import Splash from "../components/splash";
import Container from "../components/container";
import ContentGrid from "../components/content-grid";
import List from "../components/list";
import SpecialFeatures from "../components/special-features";
import SEO from "../components/seo";

import history1 from "../images/splashes/history1.jpg";
import history2 from "../images/splashes/history2.jpg";
import history3 from "../images/splashes/history3.jpg";
import history4 from "../images/splashes/history4.jpg";
import history5 from "../images/splashes/history5.jpg";

export default function OurHistoryPage() {
  return (
    <>
      <SEO title="Our History" />
      <Layout>
        <Splash images={[history1, history2, history3, history4, history5]} />
        <Container>
          <h1>Our History</h1>
          <ContentGrid>
            <div>
              <p>
                Bonanza Creek Ranch was originally called the Jarrett Ranch when
                Hollywood first showed an interest. The year was l955 and the
                film was The Man From Laramie, starring Jimmy Stewart. The story
                goes that a former chauffeur for Mary Pickford, Louie Clifford,
                had started a cab company in Albuquerque while maintaining his
                Hollywood connections. It was Louie who brought Hollywood
                producers to the ranch. They quickly saw a stunning landscape
                that had, no doubt, equally enthralled the miners and settlers
                over the course of centuries – sloping green pastures (once the
                site of the gold mining town Bonanza) fed by a continually
                running artesian spring, ponds flanked by enormous grizzled
                cottonwoods and a century-old apple orchard hugging the base of
                Cerro de la Cruz.
              </p>
              <p>
                Cowboy was filmed here in l958 with Glenn Ford and Jack Lemmon.
                For this Hughes actually brought 1,200 Corriente steers up from
                Mexico to use for the cattle drives.
              </p>
              <p>
                In l989 from an Italian producer offered to build a stylized
                Western town set on the ranch. (There had been a set built once
                before, in l980 for The Legend of the Lone Ranger, which was
                later torn down.) Daisy Town, as the new set was called, was
                built for the European television series Lucky Luke starring
                Terence Hill. The town was constructed around a two-story
                Victorian house that had been built for the movie Silverado in
                l984. This house, which was also used in Lonesome Dove, was
                altered to become a mercantile.
              </p>
              <p>
                Lucky Luke filmed for several years, and in l994 Terence Hill
                returned with an Italian-German co-production, The n/Fight
                Before Christmas. A large ranch house set was constructed
                alongside a pond, and both it and the Western town set have been
                popular film sites ever since.
              </p>
              <p>
                Glenn Hughes, owner of Bonanza Creek Ranch, comes from a long
                line of New Mexico ranchers. His father and grandfather owned
                the Forked Lightning Ranch near Pecos years before it was
                eventually sold to Greer Garson and her husband Buddy Fogelson
                in the l940s. Garson would show off the bullet holes in the
                mantel to visitors - which resulted from the gunfight Hughes'
                father was involved in when New Mexico was still a territory.
                Personal history may be behind Hughes' resolve to keep the
                Bonanza Creek Ranch intact. "It's our intention to keep this
                thing in one piece, just the way it is," he said. "It's hard to
                hold it together, but I'm bound and determined to do it." If
                history is an indication, the movie industry is well positioned
                to benefit in the years ahead.
              </p>
            </div>
            <SpecialFeatures>
              <List style={{ fontSize: "1.1em" }}>
                <li>
                  <a
                    target="_blank"
                    href="/docs/nmfreepress-article.pdf"
                    referrerPolicy="origin"
                  >
                    Making movies
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="docs/Movie-Credits.pdf"
                    referrerPolicy="origin"
                  >
                    Movie List
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="docs/Movie-Credits-Actors.pdf"
                    referrerPolicy="origin"
                  >
                    Actor List
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="docs/Blazing-Saddles-2-6-94.pdf"
                    referrerPolicy="origin"
                  >
                    "Blazing Saddles" Article
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="docs/New-Mexico-Magazine-6-94.pdf"
                    referrerPolicy="origin"
                  >
                    New Mexico Magazine
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="docs/New-Mexico-on-Film.pdf"
                    referrerPolicy="origin"
                  >
                    New Mexico On Film
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="docs/Santa-Fe-New-Mexican.pdf"
                    referrerPolicy="origin"
                  >
                    Santa Fe New Mexican
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="docs/Empire-Mag-8-97.pdf"
                    referrerPolicy="origin"
                  >
                    Empire Magazine
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="docs/LA-Times-Story.pdf"
                    referrerPolicy="origin"
                  >
                    L.A. Times Article
                  </a>
                </li>
              </List>
            </SpecialFeatures>
          </ContentGrid>
        </Container>
      </Layout>
    </>
  );
}
