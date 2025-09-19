//import
const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const connection = require('./src/config/database')

//config
const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'
//database test
connection.query('SELECT * FROM Users', function(err, results, fields) {
    if (err) {
        console.error('Error executing query: ', err);
        return;
    }
    console.log('Query results: ', results);
    console.log('Query fields: ', fields);
  })

//setting the view engine
app.set('views','./src/views/')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'src/public')))

//routes
app.get('/', (req, res) => {
  res.send('Hello World! va day la thu muc goc qwa file sever.js')
})
app.get('/abc', (req, res)=>{
    res.send("adadw")
})
app.get('/ejs', (req, res)=>{
    res.render('sample.ejs')
})

//server listening
app.listen(port, host,() => {
  console.log(`Example app listening on port ${port}, host ${host}`)
})
