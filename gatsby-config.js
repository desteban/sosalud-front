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
    {
      resolve: "gatsby-plugin-favicons",
      options: {
        logo: "./src/images/favicon.ico",
        appName: "Sosalud",
        background: "#094067",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
