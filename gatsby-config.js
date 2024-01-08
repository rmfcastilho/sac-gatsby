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
        trackingIds: [
          "G-HLC3S9GTJX"
        ],

        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },

        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};
