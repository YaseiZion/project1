let id = Symbol("id");
let user = {
	name : "Vasya",
	age : 30,
	[id] : 123
}
for (let key in user) console.log(key);

console.log("===>>>" + user[id]);

let freeman = Object.assign({}, user);
console.log(freeman[id] + "FREEMAN")

let vig1 = Symbol.for("ip");
let vig2 = Symbol.for("ip");
let vig3 = Symbol.for("lpg");
console.log(vig1 === vig2);
console.log(Symbol.keyFor(vig1) + " | " + Symbol.keyFor(vig3))