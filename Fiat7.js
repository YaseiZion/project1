let user = {
	name : "John",
	money : 1000,

	[Symbol.toPrimitive](hint) {
		console.log(`hint: ${hint}`);
		return hint == "string" ? `{name: "${this.name}"}` : this.money;

	}
}
console.log(user);
console.log(+user);
console.log(user + 500);

let user2 = {
	name : "John",
	money : 1000,

	toString() {
		return `{name: "${this.name}"}`;
	},

	valueOf() {
		return this.money;
	}
}

console.log(user2);
console.log(+user2 + " "  + user2);
console.log(user2 + 500);

let user3 = {
	name : "John",

	toString() {
		return this.name;
	}
}
console.log(user3);
console.log(user3 + 500);

let obj = {
	toString() {
		return "2";
	}
}
console.log(obj * 2);
console.log(obj + 2);