import * as React from 'react';
import {
    useStaticQuery,
    graphql,
    } from 'gatsby';
import { 
    Container,
    NavLink,
    Flex,
    } from 'theme-ui';


const Layout = (props) => {

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
        <Container>
            <title>{data.site.siteMetadata.title}</title>
            <Flex>
                {
                    sections.map( section => {
                        let ref = '/' + section;
                        if (section === "home"){
                            ref = '/';
                        }
                        return (
                            <NavLink href={ref} >{section}</NavLink >
                        )
                    })
                }
            </Flex>
            <main>
                {children}
            </main>
        </Container >
    );
}

export default Layout;