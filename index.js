//백엔드 시작점
//mongodb+srv://bosung:<password>@boilerplate.maz7m.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bosung:secret258@boilerplate.maz7m.mongodb.net/BoilerPlate?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify : false
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 할룽하이sadfasdf룽~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})