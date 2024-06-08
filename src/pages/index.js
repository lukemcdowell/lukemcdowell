import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/index.css';

const IndexPage = () => {
  return (
    <Layout breadcrumbPath={['home']}>
      <section id="about" className="container">
        <h1 className="heading">Luke McDowell</h1>
        <p className="subheading">
          Software Engineer currently based in Glasgow.
        </p>
        <div id="homepage-content">
          <div id="links">
            <ul>
              <li>
                <a href="/projects">
                  <h2>projects</h2>
                </a>
              </li>
              <li>
                <a href="/gallery">
                  <h2>gallery</h2>
                </a>
              </li>
              <li>
                <a href="/cv.pdf" target="_blank" rel="noreferrer">
                  <h2>cv</h2>
                </a>
              </li>
            </ul>
          </div>
          <div id="icons">
            <a
              href="https://github.com/lukemcdowell"
              target="_blank"
              rel="noreferrer"
              className="icon-button"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a
              href="https://www.linkedin.com/in/ldbm/"
              target="_blank"
              rel="noreferrer"
              className="icon-button"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
