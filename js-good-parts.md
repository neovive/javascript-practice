# JavaScript The Good Parts - Except and Notes

## Grammar

### Falsy Values
* false
* null
* undefined
* empty string ''
* number 0
* NaN
All other values are truthy including true, 'false', and all objects

### Statements
A compilation unit contains a set of executable statements.  In browsers, each `<script>` tag delivers a compilation unit that is immediately executed inline.

A block is a set of statements wrapped in curly braces.  Blocks in JS do not create a new scope, so variables should be defined at the top of the function.

* if (expression) { block } else { block }

* switch (expression) { case clause: statements; default: statements }

* while (expression) { block }

* for (var i = 0; i < 10; i++ ) { block }

* for in - enumerates property names (keys) of an object.  Property name is assigned to variable on each iteration.

```javascript
for (myvar in obj) {
	if (obj.hasOwnProperty(myvar)) {
		...
	}
}
```

* do { block } while (expression);

* try executes a block and catches exceptions thrown by the block
try {block} catch (variable)

* throw expression; - raises an exception.  expression is usually an object literal

* return expression; - early return from a function.

* break label; - early exit from a loop or switch


### Expressions

The simplest expressions are literal values (strings, numbers), variables, built-in values (true, false, null, undefined, NaN, Infinity), invocation expression preceded by new, expressions wrapped in parentheses, ternary operators.

### Operators
* Ternary: Takes three operands (operand) ? truthy value : falsy value

* typeof: determines if a variable is number, string, boolean, undefined, function or object

* !: negation operator

* +: concatenation

* &&: produces value of first operand if falsy, otherwise second operand

* ||: produces the value of the first operand if truhty, othereise second operand


### Literals
Object literals are a convenient notation for specifying new objects.  The names of properties can be names or strings.

### Functions
Function literal defines a function value.  It can have an option name that can be used to call itself recursively.


## Objects
* The simple types of JS are numbers, strings, booleans, null and undefined.  **All other values are objects**.
* Numbers, string and booleans are object-like in that they have methods, but they are immutable.
* Objects in JS are mutable keyed collections.
* Arrays are objects, Functions are objects, Regular expressions are objects, Objects are objects
* Objects are containers of properties, where a property has a name and value.
* Objects are class-free.
* Objects can contain other objects -- useful for representing tree structures
* JS includes prototype linkage that allows objects to inherit properties of other objects.

### Object Literals
Provide a very convenient notation for creating new objects.

```javascript
var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};

/* quotes are optional around propert names if the name would be a legal variable name */

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
	}
};
```

### Retrieval
Values can be retrieved using Array-style syntax or dot notation (if property name is a legal javascript name).

```javascript
stooge["first-name"];	// "Jerome"
flight.departure.IATA.	// "SYD"

stooge["middle-name"];	// undefined
var middle = flight.status || "unknown";	// middle = "unknown"
```

### Update
```javascript
stooge["first-name"] = "Jerome";	// object is updated
stooge.nickname = "Curly";	// object is augmented with new property
stooge["middle-name] = "Curly" // object is augmented with new property
```

### Reference
Objects are passed around by reference.  They are never copied
```javascript
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;  

// nick is 'Curly' because x and stooge are references to same object
```

### Prototype
* Every object is linked to a prototype object.
* All objects are linked to Object.prototype.
* When you make a new object, you can select the object that should be its prototype.

```javascript
// Cleaner solution to object creation
// this augments the main Object with a *create* method

if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);
```
* The prototype link is used only in retrieval.  If an object lacks a property name, JS searches up the prototype chain until it reaches Object.prototype.  If the desired property does not exist anywhere in the prototype chain the result is undefined. This is called delegation.

* Prototype relationship is dynamic.  If you add a new property to a prototype, it is instantly visible to all objects based on that prototype:

stooge.profession = 'actor';
another_stooge.profession	// 'actor'


### Reflection
JS supports the abilty to inspect objects to determine what properties is has.  The `typeof` operator is used.

```javascript
typeof flight.number   	// 'number'
typeof flight.status	// 'string'
typeof flight.arrival	// 'object'

// any property on prototype chain cna produce a vlaue
typeof flight.toString	// 'function'

flight.hasOwnProperty('toString')	// false
```

### Enumeration
The `for in` statement loops over all of the property names in an object -- including functions and properties in the prototype.

```javascript
// filter out prototype properties
var name;
for (name in another_stooge) {
	if (typepf another_stooge[name] !== 'function') {
		console.log(name + ': ' + another_stooge[name]);
	}
}
```

### Delete
Remove a property from an object
```javascript
delete another_stooge.nickname;
```


## Functions
* Functions are the fundamental modular unit in JS.
* Functions in JS are objects.
* Functions are linked to Function.prototype which is linked to Object.prototype.
* Functions have two hidden properties (context and code)
* Every function object is created with a prototype property.
* The prototype property value is an object with a `constructor` property.
* Functions can be stored in variables, objects and arrays (since they are objects).
* Functions can be invoked.

### Function Literal
* Function objects are created with function literals.
* Variables hold the function objects.
* A function literal can appear anywhere an expression can appear even inside other functions.
* Inner functions have access to parameters and variables of the function it is nested within.
* The function object created by a function literal contains a link to the outer object -- this is called a **closure**

```javascript
var add = function (a,b) {
	return a + b;	
};
```

### Function Invocation
* Invoking a function suspends the current function and passes control and parameters to the new function.
* Every function receives two additional parameters automatically (`this` and `arguments`)
* The invocation operator is a pair of parenthesis that follow any expression that produces a function value.

### Method Invocation Pattern
* When a function is stored as a property of an object it is called a *method*.
* When a method is invoked, `this` is bound to that object.
* If an invocation contains a refinement (dot or []) expression it is invoked as a method.

```javascript
var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);
```

A method can use `this` to access the object to modify or retrieve values.  The binding of `this` happens at invocation time. Late binding makes functions highly reusable.


### Function Invocation Pattern
When a function is not a property of an object, it is invoked as a function.  `this` is bound to the global object (bad).
```javascript
var sum = add(3,4);
```

**Fix**
If a method defines and assigns a variable to `this`, the inner function will have access to `this` through that variable.  The convention is to use `that` for the variable name.

```javascript
myObject.double = function() {
	var that = this;	// workaround

	var helper = function() {
		that.value = add(that.value, that.value);
	};

	helper();
};

// Invoke double as a method
myObject.double();
console.log(myObject.value);
```

### Constructor Invocation Pattern
* JS is a prototypal inheritance language - objects inherit directly from other objects.
* JS offers an object-making syntax similar to classical languages using the `new` prefix.
* Functions invoked with `new` create new objects with hidden link to the prototype member of the function and `this` bound to the new object.


### Arguments
* All functions receive a bonus array-like parameter `arguments` when they are invoked.
* Provides access to all arguments supplied (even extraneous) with invocation.
* You can use `arguments` to write functions with unspecified number of parameters

```javascript
var sum = function() {
	var i, sum=0;
	for (i=0; i<arguments.length; i+=1) {
		sum += arguments[i];
	}
	return sum;	
};

console.log(sum(2,4,6,8,10,12));
```

### Return
Return causes the function to return early.  If a return value is not specified, then undefined is returned.

### Exceptions
When errors occur that interfere with normal flow and exeption can be thrown.

```javascript
var add = function (a,b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add requires numbers'
		};
	}
	return a + b;
};
```

* `throw` should be given an exception object with `name` and `message` properties.
* Exception objects are delivered to the `catch` clause of a `try` statement
```javascript
var try_it = function() {
	try {
		add("seven");
	} catch (e) {
		console.log(e.name + ': ' + e.message);
	}
};

try_it();
```

### Augmenting Types
* JS allows basic types to be augmented.  This includes objects, functions, arrays, strings, numbers, regex, and booleans.

```javascript
// make a method available to all functions
Function.prototype.method = function(name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
		return this;
	}
};

// makes adding new methods to a prototype cleaner
Number.method('integer', function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this);		// Math.ceil(this)
});

console.log( (-10/3).integer() );


// add a trim method to all strings
String.method('trim', function() {
	return this.replace(/^\s+|\s+$/g, '');
});
console.log('   trim me   '.trim());
```

### Recursion
Recursive functions call themselves.  Recursion allows dividing a problem into a set of smaller subproblems.


### Scope
* JS does not have block scope.
* JS has function scope -- params and vars defined in a function are not visible outside the function.
* In JS it is best to declare vars used in a function at the top of the function body.

### Closure
* Inner functions get access to the params and vars of the functions they are defined within.

```javascript
// use a closure to protect the value from changes

var myObject = function() {
	var value = 0;

	// return an object with an increment function -- closure
	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function() {
			return value;
		}
	};
}();
```

* myObject is assigned the result of invoking a function -- not an actual function.
* the function returns an object containing two methods that have special access to the value variable.

```javascript
// define a quo function with a private `status` property
// returns an object with a get_status method
var quo = function(status) {
	return {
		get_status: function() {
			return status;
		}
	};
}

var myQuo = quo("amazed");	// myQuo has a reference to object with get_status method

// myQuo.get_status() method has access to quo's status property even though quo
// already returned
console.log(myQuo.get_status());
```












