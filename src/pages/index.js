import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/index.css';

const links = [
  {
    text: 'CV',
    href: '/cv.pdf',
    target: '_blank',
  },
  {
    text: 'GitHub',
    href: 'https://github.com/lukemcdowell',
    target: '_blank',
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ldbm/',
    target: '_blank',
  },
];

const IndexPage = () => {
  return (
    <Layout breadcrumbPath={['home']}>
      <section id="about">
        <h1 className="heading">Luke McDowell</h1>
        <p className="subheading">
          Software Engineer currently based in Glasgow.
        </p>
        {/* <ul className="link-list">
          {links.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href} target={link.target}>
                {link.text}
              </a>
            </li>
          ))}
        </ul> */}
        <div id="content">
          {/* TODO: link out to projects (AK Yoga, top spotify) */}
          <div>
            <h2>Projects</h2>
            <ul>
              <li>AK Yoga</li>
            </ul>
            <h2>Gallery</h2>
          </div>
          {/* TODO: make these icons links, add tooltips, make hover colour the logo colour */}
          <div id="icons">
            <FontAwesomeIcon icon={faGithub} size="3x" />
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
            <FontAwesomeIcon icon={faFileLines} size="3x" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
