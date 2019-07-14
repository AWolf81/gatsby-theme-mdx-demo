# Gatsby MDX theme

This Theme adds the MDX plugin & loads MDX files with file sytem plugin.

# Installation & Usage

`yarn add @awolf81/gatsby-theme-mdx`

or

`npm install @awolf81/gatsby-theme-mdx`

Use the Theme by adding it to your `gatsby-config.js` file like this:

```js
module.exports = {
  plugins: [
    {
      resolve: '@awolf81/gatsby-theme-mdx',
      options: {
        /* basePath: '/myCoolStuff' */
        /* contentPath: 'your-content-location' */
      },
    },
  ],
}
```

Run `gatsby develop` and add your first MDX file to the created `docs` folder. `contentPath` defaults to `docs`.

# Options

`basePath` the url where your MDX files are served
`contentPath` the directory that will be created by the Theme. That's the location of your MDX files on disk.
