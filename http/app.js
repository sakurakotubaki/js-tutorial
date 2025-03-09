import { log } from 'console';
import * as http from 'http';

log('Hello, World!');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
})

server.listen(8080);