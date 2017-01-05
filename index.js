var http = require('http')
var createHandler = require('gitlab-webhook-handler')
var handler = createHandler({ path: '/webhook' })

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
})


handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('merge_request', function (event) {
  console.log('ok')
})