let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
for (let key in user){
	console.log(key + " : " + user[key])
};
delete user.surname;
function isEmpty(haser) {
	for (let sem in haser) {
		return false;
	}
	return true;
}
console.log(isEmpty(user))
let salaries = {
	John : 100,
	Ann : 160,
	Pete : 130
}
console.log(isEmpty(salaries))
if (isEmpty(salaries) == false) {
	let pips = 0;
	for (let mig in salaries) {
		pips = salaries[mig] + pips;
	}
	console.log(pips)
}
function multiplyNumeric(obj) {
	for (let viva in obj) {
		if (typeof(obj[viva]) == "number") {
			obj[viva] = obj[viva] * 2;
			console.log("vrrrrrrrrrrrrrrr" + obj[viva])
		}
	}
}
let menu = {
	width : 200,
	height : 300,
	title : "My menu"
}
multiplyNumeric(menu);