import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Gallery = () => {
  return (
    <Layout breadcrumbPath={['home', 'gallery']}>
      <section id="gallery"></section>
    </Layout>
  );
};

export const Head = () => <Seo title="Gallery" />;

export default Gallery;
