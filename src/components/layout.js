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
    const sections = ["home", "about", "projects", "blog", "contact"];

    return (
        <Container as="body" >
            <title>{data.site.siteMetadata.title}</title>
            <Flex as="nav">
                {
                    sections.map( section => {
                        let ref = '/' + section;
                        if (section === "home"){
                            ref = '/';
                        }
                        return (
                            <NavLink as="a" href={ref} >{section}</NavLink >
                        )
                    })
                }
            </Flex>
            <main>
                <h1 >{pageHeading}</h1>
                {children}
            </main>
        </Container >
    );
}

export default Layout;