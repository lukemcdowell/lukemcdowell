import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/projects.css';

const Projects = () => {
  return (
    <Layout breadcrumbPath={['Home', 'Projects']}>
      <section className="container">
        <h1 className="heading">Projects</h1>
        <div className="projects-container">
          <div className="project-card">
            <div className="project-image">
              <StaticImage
                src="../images/musaic.png"
                alt="screenshot of the musiac website"
                placeholder="blurred"
                width={450}
                height={360}
              />
            </div>
            <div className="project-details">
              <h2 className="project-title">Musaic</h2>
              <p className="project-description">
                Web app to create a mosaic of your favourite albums.
              </p>
              <div className="project-links">
                <a
                  href="https://musaic-grid.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Website
                </a>
                <a
                  href="https://github.com/lukemcdowell/musaic"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <StaticImage
                src="../images/ak_yoga.png"
                alt="screenshot of the musiac website"
                placeholder="blurred"
                width={450}
                height={360}
              />
            </div>
            <div className="project-details">
              <h2 className="project-title">AK Yoga</h2>
              <p className="project-description">
                Website to promote yoga classes and workshops.
              </p>
              <div className="project-links">
                <a
                  href="https://ak-yoga.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default Projects;
