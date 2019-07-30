module.exports = {
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-mdx',
    //   options: {
    //     defaultLayouts: {
    //       default: require.resolve('./src/components/Layout'),
    //     },
    //   },
    // },
    /* basePath: '/myCoolStuff' */
    /* contentPath: 'your-content-location' */
    {
      resolve: '@awolf81/gatsby-theme-mdx',
      options: {
        mdxOptions: {
          defaultLayouts: {
            default: require.resolve('./src/components/Layout.js'),
          },
        },
      },
    },
    'gatsby-plugin-theme-ui', // optional - just used for styling
  ],
}
