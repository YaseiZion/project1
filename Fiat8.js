function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user = new User("Yasya");
console.log(user.name);
console.log(user.isAdmin);

let user2 = new User("Petya");
console.log(user2.name);
console.log(user.name);

let user3 = new function() {
	this.name = "Vit";
	this.isAdmin = true;
}

console.log(user3.name);

function User4() {
	console.log(new.target);
}
User4();
new User4();

function User5(name) {
	if (!new.target) {
		return new User5(name);
	}

	this.name = name;
}

let vasya = User5("Yasiliy");
console.log(vasya.name);

function BigUser() {
	this.name = "Yoric";
	return {name: "Godjiro"} ; //return "Godjiro";
}
console.log(new BigUser().name);

function User6(name) {
	this.name = name;

	this.sayHi = function() {
		console.log("My name is " + this.name);
	};
}

let vigo = new User6("Limp");

vigo.sayHi();

function Calculator() {
	this.read = function() {
		this.a = 10;
		this.b = 23;
	};
	this.sum = function() {
		return this.a + this.b;
	}
	this.mul = function() {
		return this.a * this.b;
	}
}
let calculator = new Calculator();
calculator.read();
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul())


function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		console.log("Value +10");
		this.value = this.value + 10;
	}
}


let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
console.log(accumulator.value);