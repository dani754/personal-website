/** @jsx jsx */
import {
  jsx,
  Flex,
  Box,
  Grid,
  } from "theme-ui";
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const HomePage = ({data}) => {
  return (
    <Layout page="home" >
      <Grid gap={2} columns={[2, '6fr 1fr']}>
        <Box  sx={{ flex: '1 1 auto' }} >
          <MDXRenderer sx= {{ variant: 'text.caps' }} >
            {data.mdx.body}
          </MDXRenderer>
        </Box>
        <Box >
          <StaticImage src="../images/profilePic.jpg" alt="profilePic" placeholder="blurred" sx={{ borderRadius: '50%' }} />
        </Box>    
      </Grid>
      <Flex>projects sample</Flex>
      <Flex>from the blog</Flex>
    </Layout>
  );
}

export const intro = graphql`
query {
  mdx(slug: {eq: "homepage"}) {
    body
  }
}
`

export default HomePage;

