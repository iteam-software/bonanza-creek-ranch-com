import React from "react";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";

export default function ContactSubmitted() {
  return (
    <>
      <SEO title="Contact Submitted" />
      <Layout>
        <Container style={{ paddingTop: 80 }}>
          <h1>Thank You!</h1>
          <p>Your submission has been recorded.</p>
        </Container>
      </Layout>
    </>
  );
}
