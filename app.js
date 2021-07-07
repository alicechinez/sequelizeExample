const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

if (process.env.NODE_ENV === 'production') {
  console.log('prd')
  require('dotenv').config({ path: path.resolve(__dirname, '../prd.env') })
} else {
  console.log('dev')
  require('dotenv').config({ path: path.resolve(__dirname, '../dev.env') })
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

require('./routes')(app)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
