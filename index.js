const express = require('express');
const router = require('./app/router');

const app = express();
const PORT = 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`listen on port: ${PORT}`);
});
