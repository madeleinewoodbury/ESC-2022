import React, { Fragment } from 'react';

const NotFound = match => {
  return (
    match.location.pathname !== '/' && (
      <Fragment>
        <div className="notfound background">
          <div className="banner"></div>
          <div className="content">
            <div className="overlay">
              <div className="container">
                <h1 className="x-large text-secondary">
                  <i className="fas fa-exclamation-triangle" /> Page Not Found
                </h1>
                <p className="lead">Sorry, this page does not exist</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default NotFound;
