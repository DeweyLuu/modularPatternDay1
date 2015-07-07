var gello = process.argv[2];

exports.hello = function(name) {
	if (name == undefined) {
		return 'hello ' + gello;
	} else {
		return 'hello ' + name;
	}
}

console.log(exports.hello());

//exports.hello = function(name) {
//	return 'hello ' + gello;
//}

exports.goodbye = function(name) {
	return 'goodbye ' + name;
}
