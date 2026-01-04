const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('#### Error handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(8080, () =>
  console.log('🔥 Server started at http://localhost:8080'),
);
