/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          width: 960,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <address
            style={{
              marginTop: "auto",
            }}
          >
            Bonanza Creek Ranch 2012
            <br />
            15 Bonanza Creek Lane | Santa Fe, New Mexico 87508
            <br />
            505.471.4248 | 505.615.6159
            <br />
            imobcr@gmail.com
          </address>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
