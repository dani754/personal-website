module.exports = {
    siteMetadata: {
      title: "Danielle Vaitsman | דניאל ויצמן",
      siteUrl: `https://daniellevaitsman.gatsbyjs.io`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `blog`,
          path: `${__dirname}/blog/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `text`,
          path: `${__dirname}/text/`,
        },
      },
      "gatsby-plugin-mdx",
      "gatsby-plugin-theme-ui",
    ],
  };