const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port: 3000
});

wss.on('connection', (ws) => {
    // console.log(ws);
    ws.on('message', (message) => {
        // 广播
        wss.clients.forEach(client => {
            client.send(message.toString());
        })
    })
})