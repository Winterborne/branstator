var express = require("express");
var app = express();

var path = 'web';

// Let's calculate some Fibonaccis.  A test of putting functions in the
// server, and of Express.js's ability to extract routing params from the
// request.

var fibarray = new Array();
fibarray[0] = 1;
fibarray[1] = 1;

function fib(index) {
	if ((index == 0) || (index == 1)) {
		return 1;
	}

	for (i = 2; i <= index; i++) {
		fibarray[i] = fibarray[i - 1] + fibarray[i - 2];
	}
	return fibarray[index];
}


app.use(express.logger());

app.get('/fib/:id', function(req, res) {
	res.send("Fibonacci: " + fib(req.params.id));
});

app.use(express.static(path));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

