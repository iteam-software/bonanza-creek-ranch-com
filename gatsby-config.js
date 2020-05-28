require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Bonanza Creek Movie Ranch`,
    description: `As one of the premiere locations in the western United States, Bonanza Creek Ranch offers a vast array of filming opportunities.`,
    author: `mlynam@iteamnm.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeSecurityHeaders: true,
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
