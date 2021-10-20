import * as React from 'react';
import Layout from '../../components/layout';
import ProjectWebsiteCard from '../../components/projectCards/website';
import ProjectTotoCard from '../../components/projectCards/toto';
import ProjectFreelanceCard from '../../components/projectCards/freelance';

const ProjectsPage = () => {
  return (
    <Layout page="projects" >
      <ProjectWebsiteCard />
      <ProjectTotoCard />
      <ProjectFreelanceCard />
    </Layout>
  );
}

export default ProjectsPage;
