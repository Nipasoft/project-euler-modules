(function () {
	var globalScope = this,
		exports = {};
	
	exports.isEven = function (number) {
		var isNumberEven = false;
		if (!(number%2)) {
			isNumberEven = true;	
		}
		return isNumberEven;
	}
	
	globalScope.isEvenModule = exports;
})();

(function () {
var globalScope = this,
	exports = {};
	
	/*Picked forloop cause its faster than a recursive method maybe?
	 *TODO: Implement both and test? 
	 *Fn = fn-1 + fn-2*/				
	exports.fibonacciSum = function(sumUpToNumber) {
		var fn, fn1, fn2, fnTemp, sum;
		fn2 = 0;
		fn1 = 1;
		fn = 1
		sum = 0;
		while(fn < sumUpToNumber) {
			if(isEvenModule.isEven(fn)) sum = sum + fn
			fn = fn1 + fn2;
			fnTemp = fn;
			fn2= fn1;
			fn1 = fnTemp;
		}
		return sum		
	};
		
	globalScope.fibonacciModule = exports;
})();

console.log(fibonacciModule.fibonacciSum(4000000))
console.log(isEvenModule.isEven(11))