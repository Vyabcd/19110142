const mygroup = require('../models/mygroup');

exports.getIndex = (req, res) => {
  res.json(mygroup);
};
