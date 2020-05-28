import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Layout from "../components/layout";
import Container from "../components/container";
import ContentGrid from "../components/content-grid";
import Splash from "../components/splash";
import Map from "../components/map";
import SEO from "../components/seo";

import contactSign from "../images/contact-hwy-sign.jpg";

export default function ContactUsPage() {
  const formEl = useRef();

  return (
    <>
      <SEO title="Contact Us" />
      <Layout>
        <Splash imgUrl={contactSign}></Splash>
        <Container>
          <h1>Contact Us</h1>
          <ContentGrid>
            <Formik
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                formEl.current.submit();
                setSubmitting(false);
              }}
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                  .email()
                  .required("Email addess is required"),
                message: Yup.string(),
              })}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Form
                  action="https://app.99inbound.com/api/e/_SG0JaRe"
                  method="post"
                  onSubmit={handleSubmit}
                  ref={formEl}
                >
                  <input
                    type="checkbox"
                    name="thunderous_grey_tartan_bowl"
                    style={{ display: "none" }}
                    value="1"
                    tabIndex="-1"
                    autoComplete="no"
                  />

                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      isInvalid={touched.name && errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      isInvalid={touched.email && errors.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      placeholder="Enter your message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.message && errors.messsage}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
            <Map style={{ width: 300, height: 300 }} />
          </ContentGrid>
        </Container>
      </Layout>
    </>
  );
}
