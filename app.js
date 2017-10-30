console.log("beginning the test")

function step1(callback) {
	console.log("step 1");
	callback();
}

function operation() {
	step1(function() {
		console.log("done!");
	});
}

operation();
