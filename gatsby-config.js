/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `SAC Gatsby`,
    siteUrl: `https://sac.ubbeauty.com.br`
  },
  plugins: [
    "gatsby-plugin-root-import",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};
