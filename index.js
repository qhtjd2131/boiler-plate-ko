//백엔드 시작점
//mongodb+srv://bosung:<password>@boilerplate.maz7m.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express')
const app = express()
const port = 5000

const config = require('./config/key')

const { User } = require('./models/User')
const bodyParser = require('body-parser')

//application/x-www-form-urlencoded 파일을 바디파서로 분석
app.use(bodyParser.urlencoded({extended: true}))
//application/json 파일을 바디파서로 분석
app.use(bodyParser.json())


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify : false
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 할룽하이룽~')
})

app.post('/register', (req, res) => {

  //회원 가입 할때 필요한 정보들을 client 에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body)

  user.save((err, userInfo) => {
    //에러발생시
    if(err) return res.json({ success : false, err})
    //status 200 은 정상동작완료를 뜻함
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})