var express = require("express");
var app = express();

var path = 'web';

// Let's calculate some Fibonaccis.  A test of putting functions in the
// server, and of Express.js's ability to extract routing params from the
// request. Not robust: very large values can theoretically tie up
// lots of resources!

var fibarray = new Array();
fibarray[0] = 1;
fibarray[1] = 1;

function fib(index) {
	// Already had to calculate this value? Just retrieve it rather than 
	// recalculating.	
	if (fibarray[index] > -1) {
		return fibarray[index];
	}

	for (i = 2; i <= index; i++) {
		fibarray[i] = fibarray[i - 1] + fibarray[i - 2];
	}
	return fibarray[index];
}


app.use(express.logger());

app.get('/fib/:id', function(req, res) {
	var time1 = process.hrtime();
	var number = fib(req.params.id);
	var time2 = process.hrtime();
	var diff = time2[1] - time1[1];
	res.send("Fibonacci: " + number + "<br/>Nanoseconds: " + diff);
});

app.use(express.static(path));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

