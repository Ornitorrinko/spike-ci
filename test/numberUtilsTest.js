var expect = require("chai").expect;

describe("NumberUtils", function(){
	
	require("../app/numberUtils");

	it("#format", function(){
		var value = 35000
			, decimal = value.format(2, 3, ".", ",");

		expect(decimal).to.be.equal("35.000,00");
	});

	it("#toCents", function(){
		var value = 50
			, cents = value.toCents();

		expect(cents).to.be.equal(5000);
	});

	it("#toDecimal", function(){
		var value = 500
			, decimal = value.toDecimal();

		expect(decimal).to.be.equal(5);
	});

	it("#toDecimal value < 0", function(){
		var value = -3
			, decimal = value.toDecimal();

		expect(decimal).to.be.equal(-3);
	});

	it("#percentage", function(){
		var value = 350
			, perc = value.percentage(10);

		expect(perc).to.be.equal(35);
	});

	it("#discountPercentage", function(){
		var value = 550
			, discount = value.discountPercentage(15);

		expect(discount).to.be.equal(467.5);
	});

	it("#toCurrency", function(){
		var money = 550;

		expect(money.toCurrency()).to.be.equal("R$ 550,00");
	});
});