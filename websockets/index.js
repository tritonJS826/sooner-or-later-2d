const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 5001;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })

wss.on('connection', ws => {
  ws.on('message', data => {
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    })
  })
})

//эндпоинт с экспериментальной страничкой с чатом
const test = express();

test.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
test.listen(port+1, () => {
  console.log(`Test page listening on ${port+1}!`)
})

server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})