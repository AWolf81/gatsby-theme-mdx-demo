const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const result = await graphql(`
    query {
      allFile {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    // Oh no
    const files = fs.readdirSync(options.contentPath)
    if (!files.length) {
      // directory appears to be empty
      reporter.panic(
        `Error! No MDX file found. Directory '${
          options.contentPath
        }' is empty. You need to add your fist .mdx file.`,
        result.errors
      )
    }
    reporter.panic('Error! Loading mdx files', result.errors)
  }

  result.data.allFile.nodes.forEach(node => {
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve('./src/templates/default.js'),
      context: {
        slug: node.fields.slug
      }
    })
  })
}

/*
  Runs before Gatsby does things.
  It's similar to a preInstall hook in npm scripts.
*/
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState() // gatsby internal state to get the current execution folder
  const contentPath = options.contentPath || 'docs'
  const dir = path.join(program.directory, contentPath)

  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir)
  }
}

exports.onCreateNode = ({ node, actions }, options) => {
  // We could also use 'Mdx' here but there is no relativePath in the data, that's why we're looking for a File here
  if (node.internal.type !== 'File') {
    return
  }

  // Get post path
  const toPostPath = fileNode => {
    // Using parse from Node path to get the directory of the file
    const { dir } = path.parse(fileNode.relativePath)
    const basePath = options.basePath || ''
    const rootName = dir !== '' ? '' : '/'
    const nodeName = fileNode.name === 'index' ? rootName : fileNode.name
    const url = [basePath, dir, nodeName].filter(name => name && name !== '')
    return url.join('/')
  }

  const slug = toPostPath(node)
  actions.createNodeField({
    node,
    name: 'slug',
    value: slug
  })
}
