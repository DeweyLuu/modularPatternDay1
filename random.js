var hello = require('./greet').hello;
var goodbye = require('./greet').goodbye;

var answer = hello('joker');
var answer2 = goodbye('batman');

console.log(answer);
console.log(answer2);
