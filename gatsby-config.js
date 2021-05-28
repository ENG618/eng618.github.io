module.exports = {
  siteMetadata: {
    title: 'garciaericn',
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    FAST_REFRESH: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-5Q413VJK5H',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
