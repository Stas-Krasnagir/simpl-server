const express = require('express')
const data = require('./data.js')

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).send(JSON.stringify(data.data));
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
})
