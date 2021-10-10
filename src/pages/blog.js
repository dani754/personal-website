import * as React from 'react';
import Layout from '../componenets/layout';
import { graphql } from 'gatsby';


const BlogPage = ({ data }) => {
  return (
    <Layout pageHeading="blog page" >
      <ul>
        {
          data.allFile.nodes.map( post => {
            return (
              <li key={post.name} >
                {post.name}
              </li>
            );
          })
        }
      </ul>
    </Layout>
  );
}

export const posts = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default BlogPage;
