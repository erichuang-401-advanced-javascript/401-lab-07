'use strict';

module.exports = message => {
  return ( req, res, next ) => {
    console.log( `${req.path} :: ${req.method} :: ${req.requestTime} :: ${message}` );
    next();
  };
};
