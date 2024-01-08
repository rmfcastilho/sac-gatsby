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
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SAC UBBeauty`,
        short_name: `SAC UBBeauty`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/icons/favicon.png'
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingId: "G-HLC3S9GTJX",
        head: true,
        anonymize: true,
      },
    },
  ],
};
