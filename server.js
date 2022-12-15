const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 7071

app.use(cors())

app.get('/tariffs', function (req, res) {
  const tariffs = require('./mocks/mocks.json');
  res.send(tariffs);
})

app.listen(port, () => {
  console.log(`Serving on port ${port}`)
})
