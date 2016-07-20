var express = require('express');
var app = express();
var data= require('./mock_wave_data');
var bodyParser = require('body-parser');
app.use(bodyParser.text({type: '*/*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/DS-wave', function (req, res) {
  const w=data.WAVdata;
  w.push(w.shift());//move the data
  res.json(data);
});

app.get('/DS-MEAsure', function (req, res) {
  res.json({MEASvalue:8.32});
});

app.post('/DS-TIMscal', function (req, res) {
  console.log(req.body);
  res.json({MEASvalue:8.32});
});

app.listen(3000, function () {
  console.log('oscilloscope mock server listening on port 3000!');
});