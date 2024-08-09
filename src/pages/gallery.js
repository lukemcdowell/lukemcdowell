import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/gallery.css';

const Gallery = () => {
  return (
    <Layout breadcrumbPath={['home', 'gallery']}>
      <section className="container">
        <h1 className="heading">Gallery</h1>
        <div className="gallery-container">test</div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Gallery" />;

export default Gallery;
