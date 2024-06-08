import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Projects = () => {
  return (
    <Layout breadcrumbPath={['home', 'projects']}>
      <section className="container">
        <div id="links">
          <ul>
            <li>
              <a href="/">
                <h2>Anna Kelly Yoga</h2>
              </a>
            </li>
            <li>
              <a href="/">
                <h2>Top Spotify</h2>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default Projects;
