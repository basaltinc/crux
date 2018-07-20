module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/docs`,
      name: 'markdown-pages',
    },
  },
    `gatsby-transformer-remark`,
  ],
}
