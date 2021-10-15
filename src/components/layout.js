/** @jsx jsx */
import * as React from 'react';
import {
    useStaticQuery,
    graphql,
    } from 'gatsby';
import { 
    jsx,
    Container,
    NavLink,
    Flex,
    } from 'theme-ui';


const Layout = (props) => {

    const currentPage= props.page;
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
                        if (currentPage === section){
                            return (
                                <NavLink href={ref} sx={{ variant: 'links.current' }} >{section}</NavLink >
                            )
                        }
                        else {
                            return (
                                <NavLink href={ref} sx={{ ':hover': {color: 'secondary', textUnderlineOffset: '1em'} }} >{section}</NavLink >
                            )
                        }
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