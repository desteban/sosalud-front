module.exports = {
  siteMetadata: {
    title: `sosalud`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `@desteban`,
    description: `Validador de RIPS`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
};
