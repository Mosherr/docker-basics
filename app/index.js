const express = require('express')
const app = express()
const port = 8080
const data = require('./data.json');

process.on('SIGINT', function(){
  process.exit();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/users/', function(req, res){
  res.json(data);
});
