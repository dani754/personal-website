/** @jsx jsx */
import {jsx, Card, Button} from 'theme-ui';
import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = ({data}) => {
    return (
        <Layout page="about" >
            <Card>          
                <MDXRenderer sx= {{ variant: 'text.caps' }} >
                    {data.mdx.body}
                </MDXRenderer><br />
                <img src='../images/linkedin.jpg'  sx= {{ variant: 'images.logo' }} />
            </Card>
        </Layout>
    );
}

export const about = graphql`
query {
  mdx(slug: {eq: "aboutpage"}) {
    body
  }
}
`

export default AboutPage;