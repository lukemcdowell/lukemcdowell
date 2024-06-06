import * as React from 'react';
import '../styles/layout.css';
import Breadcrumb from './breadcrumb';

const Layout = ({ breadcrumbPath, children }) => {
  return (
    <>
      <main>
        <Breadcrumb breadcrumbPath={breadcrumbPath} />
        {children}
      </main>
    </>
  );
};

export default Layout;
