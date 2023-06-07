const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
    const {name} = req.params 
    // console.log(name);
    if(name == "dog"){
        res.json({'sound':'멍멍'})
    }else if(name == "cat"){
        res.json({'sound':'냐옹'})
    }else if(name == "pig"){
        res.json({"sound":"꿀꿀"})
    }else{
        res.json({"sound":"알수없음"})
    }

    // const q = req.params
    // console.log(q.id)

    // const q = req.query
    // console.log(q)
    // res.json({'userid':q.name})
  })
  
  app.get('/cat', function (req, res) {
    res.send('고양이')
  })


app.listen(3000)