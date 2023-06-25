const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send({ msg: 'I am homepage' });
});


app.get('/about', (req, res) => {
  res.send({ msg: 'I am about page' });
});


app.get('/contact', (req, res) => {
  res.send({ email: 'support@pwskills.com' });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
