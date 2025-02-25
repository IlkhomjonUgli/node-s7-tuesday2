const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World! (This code supposed to be deployed)</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
