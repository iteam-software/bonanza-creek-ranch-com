require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Bonanza Creek Movie Ranch`,
    description: `As one of the premiere locations in the western United States, Bonanza Creek Ranch offers a vast array of filming opportunities.`,
    author: `mlynam@iteamnm.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sets`,
        path: `${__dirname}/sets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_CLIENT_ID,
        accessToken: process.env.CONTENTFUL_CLIENT_SECRET,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bonanza-creek-movie-ranch`,
        short_name: `bcmr`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeSecurityHeaders: true,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};
