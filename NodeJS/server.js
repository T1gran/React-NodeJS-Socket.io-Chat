const express =  require('express');

const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
    }
});

port = 8888;
hostname='localhost';

const dialogs = new Map();

app.get('/users', function(req, res) {
    dialogs.set('0', 'hello');
    res.json(dialogs)
});

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
});

server.listen(port, (err) => {
    if (err) {
        throw Error(err);
    }
    else console.log(`Server running at http://${hostname}:${port}/`);
});