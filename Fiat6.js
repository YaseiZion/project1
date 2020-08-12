let user = {
	name : "John",
	age : 30,
	seyNO() {
		console.log("No")
	}
}
user.seyHi = function() {
	console.log("Hi! " + this.name)
}
user.seyHi();
user.seyNO();
let admin = {
	name : "Admin"
}
function sip() {
	return (this.name + " PUSO");
}
user.fip = sip;
admin.fip = sip;
console.log(user.fip());
console.log(admin.fip());
console.log(admin["fip"]())
let fir = {
	name : "Paff",
	simHi() {
		console.log(this.name + " Hi")
	},
	simBye() {
		console.log(this.name + " Bye")
	}
}
fir.name == "Paff" ? fir.simHi() : fir.simBye();
let calculator = {
	vip1 : 0,
	vip2 : 0,
	read(){
		this.vip1 = 2;
		this.vip2 = 7;
	},
	plus() {
		console.log(this.vip1 + this.vip2)
	},
	mul() {
		console.log(this.vip1 * this.vip2)
	}
}
calculator.read();
calculator.plus();
calculator.mul();

let ladder = {
	step : 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep : function() {
		console.log(this.step);
		return this;
	}
}
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder.up().up().down().showStep();
ladder
	.up()
	.up()
	.down()
	.showStep();
let zam = () => console.log("vid");
zam();