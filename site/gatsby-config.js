module.exports = {
  siteMetadata: {
    title: 'Crux Design System',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
};
