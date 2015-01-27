Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')'
        , num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

Number.prototype.toCents = function(){
	return this * 100;
};

Number.prototype.toDecimal = function(){
	if(this > 0){
		return this / 100;
	}else{
		return this * 1;
	}
};

Number.prototype.percentage = function(val){
	return this * (val/100);
};

Number.prototype.discountPercentage = function(val){
	return this - this.percentage(val);
};

Number.prototype.toCurrency = function(){
	return "R$ " + this.format(2, 3, '.', ',');
};