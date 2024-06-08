import React from 'react';

function Breadcrumb({ breadcrumbPath }) {
  return (
    <section className="container">
      <div id="breadcrumbs">
        {breadcrumbPath.map((page, index) => {
          const link = page === 'home' ? '' : page;
          return index === breadcrumbPath.length - 1 ? (
            <a key={index} href={`/${link}`}>
              {page}
            </a>
          ) : (
            <div key={index} className="breadcrumb-link">
              <a href={`/${link}`}>{page}</a>
              <div>{'>'}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Breadcrumb;
