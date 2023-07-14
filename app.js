const express = require('express');
const path = require('path');

const app = express();
const port = 3030;


app.use(express.static(path.join(__dirname, '/public')));


const publicPath = path.join(__dirname, '/public');

const dotenv = require('dotenv').config();


app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, '/views/index.html'));
});


app.listen(process.env.PORT, () => {
  console.log(`Servidor web Express escuchando en el puerto ${port}`);
});
