const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

io.on('connection', () => {
    console.log('New Websocket Connection');
});

app.use(express.static(publicDirectoryPath));

app.listen(3000, () => {
    console.log(`Server is up on port ${port}`);
});