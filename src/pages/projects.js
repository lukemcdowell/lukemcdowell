import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Projects = () => {
  return (
    <Layout breadcrumbPath={['home', 'projects']}>
      <section id="projects"></section>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default Projects;
