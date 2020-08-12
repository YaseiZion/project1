function makeUser(name, age) {
	return {
		name,
		age,
		fall : "abc",
	}
}
let user = makeUser("John", 30);
console.log(user.name);
console.log("name" in user);
for (let key in user) {
	console.log(key + " : " +user[key]) 
}
let markes = user;
markes.fall = "f";
console.log(user.fall);
let clone = {}
for (let zera in user) {
	clone[zera] = user[zera] + ".clone";
	console.log(clone[zera])
}
let fips = {};
Object.assign(fips, user, clone.name);
for (let zebra in fips) {
	console.log(zebra + " : " + fips[zebra]);
}