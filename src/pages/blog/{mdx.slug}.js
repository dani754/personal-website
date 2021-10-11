import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPost = ({data}) => {
  return (
    <Layout pageHeading={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.datePublished}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const post = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        datePublished(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost;