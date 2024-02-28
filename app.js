const http = require('http');
http.createServer(function (request, response) {
    response.end('test data loaded')
}).listen(process.env.PORT || 8080, function () {
    console.log('server started')
})