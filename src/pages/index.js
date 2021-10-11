import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const HomePage = () => {
  return (
    <Layout pageHeading="home page" >
      <p>children</p>
    </Layout>
  );
}

export default HomePage;

 /// <StaticImage src="../images/profilePic.jpg" alt="profilePic" placeholder="blurred" />
