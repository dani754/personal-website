import * as React from 'react';
import {Link} from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css';

const Layout = (props) => {

    const pageHeading = props.pageHeading
    const children = props.children

    return (
        <div className={container} >
            <title>Danielle Vaitsman | דניאל ויצמן</title>
            <nav>
                <ul className={navLinks} >
                    <li className={navLinkItem} >
                        <Link to="/"  className={navLinkText} >Home</Link></li>
                    <li className={navLinkItem} >
                        <Link to="/about" className={navLinkText} >About</Link></li>
                    <li className={navLinkItem} >
                        <Link to="/projects" className={navLinkText} >Projects</Link></li>
                    <li className={navLinkItem} >
                        <Link to="/blog" className={navLinkText} >Blog</Link></li>
                    <li className={navLinkItem} >
                        <Link to="/contact" className={navLinkText} >Contact</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading} >{pageHeading}</h1>
                {children}
            </main>
        </div>
    );
}

export default Layout;