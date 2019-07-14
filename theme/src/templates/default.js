import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/Page'

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      childMdx {
        body
      }
    }
  }
`

const Default = ({ data }) => {
  // The page object is an abstraction to have a flat object that we're using in our component. Makes later changes easier.
  const page = {
    body: data.file.childMdx.body
  }

  return <Page {...page} />
}

export default Default
