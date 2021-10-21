/** @jsx jsx */
import {
  jsx,
  Flex,
  Box,
  Grid,
  Card,
  Button,
  Link
  } from "theme-ui";
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ProjectTotoCard from '../components/projectCards/toto';

const HomePage = ({data}) => {
  return (
    <Layout page="home" >
      <Card>
      <Grid gap={2} columns={[2, '7fr 1fr']}>
        <Box >
          <MDXRenderer sx= {{ variant: 'text.caps' }} >
            {data.mdx.body}
          </MDXRenderer>
        </Box>
        <Box >
          <StaticImage src="../images/profilePic.jpg" alt="profilePic" placeholder="blurred" sx={{ borderRadius: '50%' }} />
        </Box>  
      </Grid>
      </Card>
      <ProjectTotoCard />
      <Card>from the blog</Card>
      <Card>about me</Card>
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

