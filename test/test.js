//test.js file
'use strict'

var request = require("supertest"),
	app = require("../app").getApp;

describe('GET /', function(){
	it('expects HTTP response 200',function(done){
		request(app)
			.get(app)
			.expect(200,done);
	});
});