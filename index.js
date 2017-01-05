var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/webhook', function(request, response) {
  console.log("ok")
});
// var http = require('http')
// var createHandler = require('gitlab-webhook-handler')
// var handler = createHandler({ path: '/webhook' })
//
// http.createServer(function (req, res) {
//   handler(req, res, function (err) {
//     res.statusCode = 404
//     res.end('no such location')
//   })
// }).listen(7777)
//
//
// handler.on('error', function (err) {
//   console.error('Error:', err.message)
// })
//
// handler.on('merge_request', function (event) {
//   console.log('ok')
// })