module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "c0d3-submissions-interface",
  },
  pathPrefix: "/c0d3-submissions-interface",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
