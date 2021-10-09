require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const app = express();
const PORT = 3000;
console.log(process.env.DB_URL);

app.use(router);

app.listen(PORT, () => {
  console.log(`listen on port: ${PORT}`);
});
