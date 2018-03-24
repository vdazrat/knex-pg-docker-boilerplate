const express = require('express');
const app = express();
const port = 4000;

app.listen(port);
console.log('Started server in mode: ',process.env.NODE_ENV,'. Listening on port', port);