import React from 'react';

function Breadcrumb({ breadcrumbPath }) {
  console.log(breadcrumbPath);
  return (
    <div id="breadcrumbs">
      {breadcrumbPath.map((page, index) => {
        const link = page === 'home' ? '' : page;
        return index === breadcrumbPath.length - 1 ? (
          <a className="breadcrumb-link" href={`/${link}`}>
            {page}
          </a>
        ) : (
          <>
            <a key={index} className="breadcrumb-link" href={`/${link}`}>
              {page}
            </a>
            <div>{'>'}</div>
          </>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
