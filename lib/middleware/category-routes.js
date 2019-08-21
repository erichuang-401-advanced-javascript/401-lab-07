'use strict';

let db = [];

const get = (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
};

const post = (req, res, next) => {
  if(!req.valid){
    throw new Error();
    return;
  }
  let record = req.body;
  record.id = Math.random();
  db.push(record);
  res.json(record);
};

module.exports = { get, post };
