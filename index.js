//----set the class Number and file you want to RUN
var classNumber = "00";
var nameFile = "07-sound1-app";
//------------------------------------------------------

//------------------------------------------------------
//original code
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
	var conformPath = __dirname + '/class'+ classNumber + '/js/' + nameFile + '.html';
	// console.log (conformPath);
  res.sendFile(path.join(conformPath));
});

app.listen(3001, () => {
  console.log('server started');
});