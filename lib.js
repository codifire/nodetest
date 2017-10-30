function libfunc1(callback) {
	console.log("libfunc1");
	callback();
}

function libfunc2(callback) {
	console.log("libfunc2");
	callback();
}

function libfunc3(callback) {
	console.log("libfunc3");
	callback();
}

function libfunc4(callback) {
	console.log("libfunc4");
	callback();
}

module.exports = {
	libfunc1: libfunc1,
	libfunc2: libfunc2,
	libfunc3: libfunc3,
	libfunc4: libfunc4,
}
