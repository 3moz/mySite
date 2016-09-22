var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('index.html')
});

app.get('/cg', function(req,res){
    res.redirect('cg.html')
});

app.listen(3000);
console.log('listening on 3000')
