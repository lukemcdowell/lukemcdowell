import * as React from 'react';

const primaryColour = '#60992D';
const textColour = '#494949';

const pageStyles = {
  color: textColour,
  paddingTop: '8rem',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: '"Ubuntu Mono", "Roboto", "Courier New", monospace',
};

const aboutSectionStyles = {
  padding: '2rem',
  width: '600px',
};

const headingStyles = {
  fontSize: '3rem',
  marginTop: 0,
};

const paragraphStyles = {
  fontSize: '1.5rem',
};

const linkStyle = {
  color: primaryColour,
  fontWeight: 'bold',
  fontSize: '1.5rem',
  verticalAlign: '5%',
};

const listContainerStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: '1rem',
  padding: 0,
  margin: 0,
};

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
    <main style={pageStyles}>
      <section id="about" style={aboutSectionStyles}>
        <h1 style={headingStyles}>Luke McDowell</h1>
        <p style={paragraphStyles}>
          Software Engineer currently based in Glasgow.
        </p>
        <ul style={listContainerStyle}>
          {links.map((link) => (
            <li key={link.href}>
              <a style={linkStyle} href={link.href} target={link.target}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Luke McDowell</title>;
