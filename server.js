const path = require('path');
const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(`${__dirname}/build`));

// app.get('*', (request, response) => {
//   response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
