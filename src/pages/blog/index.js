import * as React from 'react';
import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby';


const BlogPage = ({ data }) => {
  return (
    <Layout pageHeading="blog page" >
        {
          data.allMdx.nodes.map( post => {
            return (
              <article key={post.id} >
                <h3>
                  <Link to={`/blog/${post.slug}`} >{post.frontmatter.title}</Link>
                </h3>
                <p>{post.frontmatter.datePublished}</p>
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
        slug
      }
    }
  }
`
export default BlogPage;
