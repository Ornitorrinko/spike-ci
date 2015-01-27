var expect = require("chai").expect;

describe("StringUtils", function(){
	
	require("../app/stringUtils");

	it("#alphanumeric", function(){
		var token = "B6512D10-4C77-4E58-8611-438F1818DC9B"
			, alpha = "B6512D104C774E588611438F1818DC9B";

		expect(token.alphanumeric()).to.be.equal(alpha);
	});

	it("#capitalize", function(){
		var lowerCase = "ornitobuster"
			, capitalCase = "Ornitobuster";

		expect(lowerCase.capitalize()).to.be.equal(capitalCase);
	});

	it("#insertAt", function(){
		var someText = "somebullshit"
			, updated = "somefuckbullshit";

		expect(someText.insertAt(4, 0, "fuck")).to.be.equal(updated);
	});

	it("#toFloat", function(){
		var number = "13";

		expect(number.toFloat()).to.be.equal(13.0);
	});

	it("#startsWith", function(){
		var ornito = "ornitorrinko";

		expect(ornito.startsWith("ornito")).to.be.true;
	});
});