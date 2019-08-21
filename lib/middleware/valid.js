'use strict';

module.exports = ( req, res, next ) => {
  let num = Math.floor(Math.random() * Math.floor(2));
  if (num === 0) req.valid = true;
  if (num === 1) req.valid = false;
  next();
};
