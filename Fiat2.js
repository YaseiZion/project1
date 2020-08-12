let key = "3";
let user = {
	[key] : "John",
	"+60": 30,
	"1" : 20
}

console.log(user[key]);
for (let b in user) console.log(b + " : " + user[b])