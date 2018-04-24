module.exports = {
  siteMetadata: {
    title: 'Art of PKL',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/gallery/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
