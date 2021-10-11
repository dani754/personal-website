import * as React from 'react';
import Layout from '../componenets/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';


const BlogPage = ({ data }) => {
  return (
    <Layout pageHeading="blog page" >
        {
          data.allMdx.nodes.map( post => {
            return (
              <article key={post.id} >
                <h3>{post.frontmatter.title}</h3>
                <p>{post.frontmatter.datePublished}</p>
                <MDXRenderer>
                  {post.body}
                </MDXRenderer>
              </article>
            );
          })
        }
    </Layout>
  );
}

export const posts = graphql`
  query {
    allMdx(sort: {fields: frontmatter___postNumber, order: DESC}) {
      nodes {
        frontmatter {
          datePublished(formatString: "MMMM DD, YYYY")
          postNumber
          title
        }
        id
        body
      }
    }
  }
`
export default BlogPage;
