const express = require("express");
const app = express();

app.get('/', (req,res) => {
	res.sendFile('/Users/dieg/code/Mangrove/index.html');
});

app.listen(3000);

