//function hello() {
//	return 'hello';
//}

//exports.hello = hello;

//module.exports = function hello() {
//	console.log('hello');
//}

//console.log(process.argv[2]);

var gello = process.argv[2];

//process module

exports.hello = function(gello) {
//	if (name == undefined) {
		return 'hello ' + gello;
//	} else {
//		return 'hello ' + name;
//	}
}

console.log(exports.hello(gello));

exports.goodbye = function(gello) {
	return 'goodbye ' + gello;
}

