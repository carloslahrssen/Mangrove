const express = require("express");
const app = express();

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/room.html');
});

app.listen(3000);

