const http = require('http');

const onRequest = function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World')
  console.log('Server running on port: 8000');
  response.end();
}

http.createServer(onRequest).listen(8000);