module.exports = {
  siteMetadata: {
    title: "Groceristar",
    description: "Organize your shopping experience"
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
  	'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`,
      },
    },
    {
  		resolve: 'gatsby-source-filesystem',
  		options: {
  			path: '${__dirname}/src/pages',
  			name: 'pages'
  		}
  	},
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
