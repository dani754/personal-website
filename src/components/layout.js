import * as React from 'react';
import {
    Link,
    useStaticQuery,
    graphql,
    } from 'gatsby';
import { Container , NavLink, Flex } from 'theme-ui';


const Layout = (props) => {

    const pageHeading = props.pageHeading
    const children = props.children
    const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
            title
            }
        }
        }
    `)

    return (
        <Container>
            <title>{data.site.siteMetadata.title}</title>
            <Flex as="nav">
                <NavLink as="a" href="/" >
                    Home</NavLink >
                <NavLink href="/about" p={2} >
                    About</NavLink >
                <NavLink href="/projects" p={2} >
                    Projects</NavLink >
                <NavLink href="/blog" p={2} >
                    Blog</NavLink >
                <NavLink href="/contact" p={2} >
                    Contact</NavLink >
            </Flex>
            <main>
                <h1>{pageHeading}</h1>
                {children}
            </main>
        </Container >
    );
}

export default Layout;