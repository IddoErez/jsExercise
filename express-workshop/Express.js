const express = require('express')
const app = express()
const path = require('path');
const bodyparser = require('body-parser')
const crypto = require('crypto')
const fs = require('fs')


//------------------------------Exercise 1 -------------------------------
// app.get('/home', function(req, res) {
//   res.end('Hello World!')
// })
// app.listen(process.argv[2])
//------------------------------Exercise 2-------------------------------
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
// app.listen(process.argv[2])
//------------------------------Exercise 3-------------------------------
// app.set('views', process.argv[3])
// app.set('view engine', 'pug') 
// app.get('/home', function (req, res) {
//     res.render('index', {date: new Date().toDateString()})
//   })
// app.listen(process.argv[2])
//------------------------------Exercise 4-------------------------------
// app.use(bodyparser.urlencoded({extended: false}))
// app.post('/form', function(req, res){
//     res.send(req.body.str.split('').reverse().join(''))
// })
// app.listen(process.argv[2])
//------------------------------Exercise 5-------------------------------
// app.use(require('stylus').middleware(process.argv[3], 'public'))
// app.use(express.static(process.argv[3]))

// app.listen(process.argv[2])
//------------------------------Exercise 6-------------------------------

// app.put('/message/:id', function(req, res){ 
// //    console.log(req.params.id)
//     let sha1 =  crypto
//     .createHash('sha1')
//     .update(new Date().toDateString() + req.params.id)
//     .digest('hex')
//     res.send(sha1)
//   });
//   app.listen(process.argv[2]) 
//------------------------------Exercise 7-------------------------------
//  app.get('/search', function(req, res){
//     console.log(req.query)
//  res.send(JSON.stringify(req.query))
//      }) 
// app.listen(process.argv[2])
//------------------------------Exercise 8-------------------------------
app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], (err, data) => {
        if (err) { console.err(err) }
        data = JSON.parse(data)
        // console.log(data)
        res.json(data)
    })
})

app.listen(process.argv[2])

