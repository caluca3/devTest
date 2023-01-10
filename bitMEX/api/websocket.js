const WebSocket = require('ws');

const ws = new WebSocket('wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD');

ws.on('open', function open() {
  console.log('WebSocket connection opened');
});

ws.on('message', function incoming(data) {
  console.log('WebSocket message received:', data);
  // You can do something with the received data here
});

ws.on('close', function close() {
  console.log('WebSocket connection closed');
});
