;(function(){

	String.prototype.alphanumeric = function(){
		return this.replace(/[^a-z0-9]/gi,'');
	};

	String.prototype.capitalize = function() {
    	return this.charAt(0).toUpperCase() + this.slice(1);
	};

	String.prototype.insertAt = function(idx, rem, text){
		return (this.slice(0,idx) + text + this.slice(idx + Math.abs(rem)));
	};

	String.prototype.toFloat = function(){
		return parseFloat(this);
	};

	String.prototype.startsWith = function(str){
    	return this.indexOf(str) == 0;
  	};
  	
})();