var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index.html')
});

app.get('/resume', function(req, res) {
    res.render('assets/Eric_Moskowitz_Resume_08_2019.pdf')
});

app.listen(80);
console.log('listening on 80')