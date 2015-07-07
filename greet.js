var gello = process.argv[2];
/*
//this also works...
exports.hello = function(name) {
	if (name == undefined) {
		return 'hello ' + gello;
	} else {
		return 'hello ' + name;
	}
}
*/

exports.hello = function(gello) {
	return 'hello ' + gello;
}

console.log(exports.hello(gello));

exports.goodbye = function(name) {
	return 'goodbye ' + name;
}
