const express = require('express')
const path = require('path')

const app = express()


app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
  })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))