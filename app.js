const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/room',(req,res)=>{
	res.sendFile(__dirname+'/room.html');
});


