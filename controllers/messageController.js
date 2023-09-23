const mygroup = require('../models/mygroup');

exports.getMessage = (req, res) => {
  const { id } = req.params;

  if (id) {
    const student = mygroup.find(item => item.id === id);
    if (student) {
      res.send(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
    } else {
      res.send('Not valid');
    }
  } else {
    const students = mygroup.map(student => `<li>${student.name}</li>`).join('');
    res.send(`<html><body><ul>${students}</ul></body></html>`);
  }
};
