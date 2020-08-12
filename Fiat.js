let v = (a,b) => (a < b) ? a + b : a ** b;
console.log(v(12,11));

let cg = bg = ar = 0;
if (cg == 0) bg = 1;
while (cg < 60) {
	ar = cg;
	console.log(cg);
	cg = bg + cg;
	bg = ar;
}