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

app.use(express.json());

const chats = 
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

app.post('/chats', (req, res) => {
    if (req.body.ethAddress == chats.ethAddress) 
    {
        res.json(chats);
    }
})

io.on('connection', (socket) => {
    socket.on('JOIN', (data) => {
        console.log(data)
    })
    console.log('user connected', socket.id);
});

server.listen(port, (err) => {
    if (err) {
        throw Error(err);
    }
    else console.log(`Server running at http://${hostname}:${port}/`);
});