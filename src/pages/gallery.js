import { getDownloadURL, listAll, ref } from 'firebase/storage';
import * as React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { imageStore } from '../../firebase-config';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/gallery.css';

const Gallery = () => {
  const [imageUrls, setImageUrls] = React.useState([]);

  const splitIntoThree = (array) => {
    const firstArray = array.slice(0, Math.ceil(array.length / 3));
    const secondArray = array.slice(
      Math.ceil(array.length / 3),
      Math.ceil((2 * array.length) / 3)
    );
    const thirdArray = array.slice(Math.ceil((2 * array.length) / 3));

    return [firstArray, secondArray, thirdArray];
  };

  const fetchImages = async () => {
    const storageRef = ref(imageStore, 'images/');

    const response = await listAll(storageRef);
    const urlPromises = response.items.map((imageRef) =>
      getDownloadURL(imageRef)
    );

    return Promise.all(urlPromises);
  };

  const getImageUrls = async () => {
    const urls = await fetchImages();
    setImageUrls(urls);
  };

  React.useEffect(() => {
    getImageUrls();
  });

  return (
    <Layout breadcrumbPath={['home', 'gallery']}>
      <section className="container">
        <h1 className="heading">Gallery</h1>
      </section>

      {imageUrls.length !== 0 && (
        <PhotoProvider>
          <div className="gallery-container">
            {splitIntoThree(imageUrls).map((array, index) => (
              <div key={index} className="gallery-column">
                {array.map((url, index) => (
                  <PhotoView key={index} src={url}>
                    <img
                      key={index}
                      src={url}
                      alt={index}
                      className="gallery-image"
                    />
                  </PhotoView>
                ))}
              </div>
            ))}
          </div>
        </PhotoProvider>
      )}
    </Layout>
  );
};

export const Head = () => <Seo title="Gallery" />;

export default Gallery;
