const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 5001;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })

wss.on('connection', ws => {
  ws.on('message', (message) => WSOnMessage(message, ws));
  sendRandomNumberEachSecond();
})

const WSOnMessage = (message, ws) => {
  wss.clients.forEach(client => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  })
};

const sendRandomNumberEachSecond = () => {
  setInterval(() => {
    wss.clients.forEach((client) => client.send(Math.random()));
  }, 1000);
};

// experimantal endpoint witch chat page
const test = express();

test.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
test.listen(port+1, () => {
  console.log(`Test page on ${port+1}!`)
})

server.listen(port, function() {
  console.log(`WSServer is listening on ${port}!`)
})