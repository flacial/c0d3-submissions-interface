module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "c0d3-submissions-interface",
  },
  pathPrefix: "/c0d3-submissions-interface",
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `c0d3-submissions-interface`,
        short_name: `c0d3-submissions`,
        icon: "src/images/favicon-32x32.png",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/favicons/favicon-32x32.png",
      },
    },
  ],
};
