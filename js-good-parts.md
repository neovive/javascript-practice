# JavaScript The Good Parts - Notes

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

/* quotes are optional around propery names if the name would be a legal variable name */

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
Object are passed around by reference.  They are never copied



