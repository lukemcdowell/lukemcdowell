import * as React from 'react';
import { Toaster } from 'react-hot-toast';
import '../styles/layout.css';
import Breadcrumb from './breadcrumb';

const Layout = ({ breadcrumbPath, children }) => {
  return (
    <>
      <Breadcrumb breadcrumbPath={breadcrumbPath} />
      <main>{children}</main>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: '#5998c5',
            color: '#fff',
          },
        }}
      />
    </>
  );
};

export default Layout;
