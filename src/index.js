const Felid = require('felid')

const app = new Felid()

app.get('/', (req, res) => {
  res.send('hello')
})

module.exports = app.lookup()
