import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/gallery.css';
import images from '../utils/images';

const Gallery = () => {
  React.useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: PhotoSwipe,
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <Layout breadcrumbPath={['home', 'gallery']}>
      <section id="gallery-container">
        <div id="gallery">
          {images.map((image, index) => (
            <a
              href={image.src}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={index}
            >
              <img src={image.src} alt={image.title} />
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Gallery" />;

export default Gallery;
