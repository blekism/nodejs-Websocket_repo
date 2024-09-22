const WebSocket = require('ws');

const clients = [];
const numClients = 5;

for (let i = 0; i < numClients; i++) {
    const client = new WebSocket('ws://localhost:8080');
    clients.push(client);

    client.on('open', () => {
        console.log(`Client ${i} connected`);
        client.send(`Hello from client ${i}`);
    });

    client.on('message', (message) => {
        console.log(`Client ${i} received: ${message}`);
    });

    client.on('close', () => {
        console.log(`Client ${i} disconnected`);
    });

    client.on('error', (error) => {
        console.error(`Client ${i} error:`, error);
    });
}