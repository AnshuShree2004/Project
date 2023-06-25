const express = require('express');
const app = express();



app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send({ random: randomNumber });
});



app.listen(3005, () => {
    console.log('Server is running on port 3005');
  });
  