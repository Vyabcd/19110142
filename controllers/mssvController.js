const mygroup = require('../models/mygroup');

exports.getMSSV = (req, res) => {
  const { id } = req.params;
  const student = mygroup.find(item => item.id === id);

  if (student) {
    res.json(student);
  } else {
    res.json({ error: 'Not valid' });
  }
};

exports.postMSSV = (req, res) => {
  const { id, name } = req.body;
  const student = mygroup.find(item => item.id === id);

  if (student) {
    res.json({ error: 'Not valid' });
  } else {
    mygroup.push({ id, name });
    res.json({ message: 'Added successfully' });
  }
};
