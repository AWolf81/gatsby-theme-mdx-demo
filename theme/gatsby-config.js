const merge = require('lodash.merge')

module.exports = options => {
  console.log('theme options', merge({}, options.mdxOptions))
  return {
    plugins: [
      {
        resolve: 'gatsby-plugin-mdx',
        options: merge({}, options.mdxOptions)
        // options: {
        //   defaultLayout: {
        //     default:
        //       'E:\\github\\gatsby-theme-mdx\\demo-advanced\\src\\components\\Layout.js',
        //   },
        // },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: options.contentPath || 'docs'
        }
      }
    ]
  }
}
