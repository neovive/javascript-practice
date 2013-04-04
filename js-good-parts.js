// Function.prototype.method = function (name, func) {
// 	this.prototype[name] = func;
// 	return this;
// };
//

if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}



// flight object
var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	},
	seat: 'Aisle'
};

var name;
var prop;
for (name in flight) {
	if (typeof flight[name] === 'object') {
		console.log(name + ' Object: ==>');
		for (prop in flight[name]) {
			console.log(prop + ': ' + flight[name][prop] );
		}
	}
	else {
		console.log(name + ': ' + flight[name]);
	}
}

// console.log(flight.hasOwnProperty('toString'));
// console.log(flight.toString());
var another_flight = Object.create(flight);		// creates another_flight with flight as prototype
another_flight.airline = 'American';
console.log(another_flight.airline);
delete another_flight.airline;
console.log(another_flight.airline);	// picks up flight.airline from airline prototype (parent object)


var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
console.log('Value: ' + myObject.value);

myObject.increment(2);
console.log('Value: ' + myObject.value);

myObject.increment('a');
console.log('Value: ' + myObject.value);


var sum = function() {
	var i, nums='', sum=0;
	for (i=0; i<arguments.length; i+=1) {
		nums += arguments[i];
		nums += i<arguments.length-1 ? '+' : '';
		sum += arguments[i];
	}
	return nums + '=' + sum;
};

console.log(sum(2,4,6,8,10,12));



var add = function (a,b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add requires numbers'
		};
	}
	return a + b;
};

var sum = function(num1, num2) {
	var sum=0;
	try {
		sum = add(num1, num2);
	} catch (e) {
		console.log(e.name + ': ' + e.message);
	}
	return sum;
};

sum('seven');
console.log(sum(7,7));