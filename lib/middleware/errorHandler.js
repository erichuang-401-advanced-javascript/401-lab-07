'use strict';

const error404 = ( req, res, next) => {
  res.status(404);
  return res.send('error 404');
};

const error500 = ( err, req, res, next ) => {
  if(!req.valid){
    res.status(500).send('error 500');
  } else {
    next(err);
  }
};

module.exports = { error404, error500 };

