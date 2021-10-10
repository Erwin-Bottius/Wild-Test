require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const router = require('./app/router');

const app = express();
const port = process.env.PORT || 3000;
// cors était nécéssaire pendant le développement
// app.use(cors({ origin: '*' }));
// en mise en prod, nous utilisons le dossier static dist dans lequel se retrouve notre app front
app.use(express.static('dist'));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`listen on port: ${port}`);
});
