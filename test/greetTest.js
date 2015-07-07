var greet = require('../greet.js');
var expect = require('chai').expect;

describe('greet.js', function() {
	it('will say hello', function() {
		expect(greet.hello('henry')).to.equal('hello henry');
	});

	it('will say goodbye henry when passed henry', function() {
		expect(greet.goodbye('henry')).to.equal('goodbye henry');
	});
});
