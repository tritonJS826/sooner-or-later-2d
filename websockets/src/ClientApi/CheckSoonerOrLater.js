// run this code on client side for check wsServer

const myWs = new WebSocket('ws://localhost:9000');

myWs.onopen = () => {
  console.log('подключился');
};
// обработчик сообщений от сервера
myWs.onmessage = (message) => {
  console.log('Message: %s', message.data);
};
// функция для отправки echo-сообщений на сервер
const wsSendEcho = (value) => {
  myWs.send(JSON.stringify({ action: 'ECHO', data: value.toString() }));
}

wsSendEcho();
