import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

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
    <Layout breadcrumbPath={['home', 'test', 'mast']}>
      <section id="about">
        <h1 className="heading">Luke McDowell</h1>
        <p>Software Engineer currently based in Glasgow.</p>
        <ul className="link-list">
          {links.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href} target={link.target}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
