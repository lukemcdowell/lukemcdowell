/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Luke McDowell`,
    description: `Personal Website`,
    author: `@lukemcdowell`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon.png`,
      },
    },
  ],
};
