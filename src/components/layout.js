import * as React from 'react';
import '../styles/layout.css';
import Breadcrumb from './breadcrumb';

const Layout = ({ breadcrumbPath, children }) => {
  return (
    <>
      <Breadcrumb breadcrumbPath={breadcrumbPath} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
