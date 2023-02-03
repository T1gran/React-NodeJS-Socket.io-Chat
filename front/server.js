const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json());

port = 8888;
hostname='localhost';

const profile = 
    {
        "ethAddress": "0xc22faf9f506e63e6f4f0088d15e9197b27c77ac7",
        "url": "john",
        "personal": {
          "bio": "Crypto enthusiast",
          "displayName": "John Melia",
          "url": "john"
        },
        "photo": {
          "avatar": "QmdDXWPM728iAzMbg5J92DMX9gpTZEUjgvASwuMSZJbDa8",
          "avatarS3Link": "https://curio.fra1.digitaloceanspaces.com/apps/rollapp/users/avatars/aa80b042-bdf4-4ec8-a00a-a94229d79cad/66ed3fb2-3462-40fa-a40b-2c89202c3790.png",
          "cover": "QmRA5YaPWx2ZmbFjJ5ioEu92UfXAp8fai1TjaykDsVXnUz",
          "coverS3Link": "https://curio.fra1.digitaloceanspaces.com/apps/rollapp/users/covers/aa80b042-bdf4-4ec8-a00a-a94229d79cad/66ed3fb2-3462-40fa-a40b-2c89202c3790.png"
        }
    };

let messages = ['Message 1', 'Message 2', 'Message 3'];
let chats = ['chat 1', 'chat2', 'chat 3'];

io.on('connection', (socket) => {
    socket.on('JOIN', () => {
        console.log('user connected', socket.id);
    })
    socket.on('createConversationRequest', (data) => {
        console.log('New request', data);
    })
});

httpServer.listen(port, (err) => {
    if (err) {
        throw Error(err);
    }
    else console.log(`Server running at http://${hostname}:${port}/`);
});