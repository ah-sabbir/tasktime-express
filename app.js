const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
  res.end();
})


const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})