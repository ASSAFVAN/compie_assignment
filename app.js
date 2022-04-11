const express = require('express');
const path = require("path");
const http = require('http');
const socketio = require('socket.io');
const nodeCron = require("node-cron");


const {updatePlayersChange} = require("./job");
const playerRouter = require("./src/routes/players.routes");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));


app.use("/", playerRouter);

const PORT = process.env.PORT || 5000;

io.on('connection', (server) => {
  console.log('New WebSocket connection')
});

server.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`);
  
});