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

