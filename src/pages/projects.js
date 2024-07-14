import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/projects.css';

const Projects = () => {
  return (
    <Layout breadcrumbPath={['Home', 'Projects']}>
      <section id="projects" className="container">
        <h1 className="heading">Projects</h1>
        <div id="project-links">
          <ul>
            {/* <li>
              <a>
                <h2
                  href="https://github.com/lukemcdowell"
                  target="_blank"
                  rel="noreferrer"
                >
                  Musaic
                </h2>
              </a>
            </li> */}
            <li>
              <a
                href="https://ak-yoga.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Anna Kelly Yoga</h2>
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
