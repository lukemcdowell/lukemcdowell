import {
  faGithub,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import toast from 'react-hot-toast';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/index.css';

const IndexPage = () => {
  const copyEmailToClipboard = () => {
    const email = 'luke.db.mcdowell@gmail.com';
    navigator.clipboard.writeText(email).then(
      () => {
        toast('Email copied to clipboard', {
          duration: 10000,
          position: 'bottom-center',
        });
      },
      (err) => {
        console.log(err);
        toast.error("Couldn't copy email to clipboard", {
          duration: 10000,
          position: 'bottom-center',
        });
      }
    );
  };

  return (
    <Layout breadcrumbPath={['home']}>
      <section className="container">
        <h1 className="heading">Luke McDowell</h1>
        <div id="about">
          <p className="subheading">Software Engineer based in Glasgow.</p>
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
                  <a href="/cv.pdf" rel="noreferrer">
                    <h2>CV</h2>
                  </a>
                </li>
              </ul>
            </div>
            <div id="icons">
              <a
                href="https://github.com/lukemcdowell"
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a
                href="https://www.linkedin.com/in/ldbm/"
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a
                href="https://open.spotify.com/user/lukemcdo"
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                title="Spotify"
              >
                <FontAwesomeIcon icon={faSpotify} size="3x" />
              </a>
              <button
                onClick={copyEmailToClipboard}
                className="icon-button"
                title="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
