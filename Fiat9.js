console.log(parseInt("100px"));
console.log(+String(parseFloat('123.21323')));
console.log(parseInt("n2342", 36));
console.log(Math.random());
console.log(Math.max(3,10,15));
console.log(Math.pow(2, 10));
console.log(2 ** 10);
console.log(Math.pow(9, 1/2));
console.log(9 ** (1/2));
console.log(1454e-5);
console.log(Math.floor(3.78));
console.log(Math.ceil(3.654));
console.log(Math.round(3.654));
console.log(Math.trunc(3.654));

let arm;
function readNumber() {
    arm = "123";
    if(!isFinite(arm)) {
        console.log(arm);
    } else {
        console.log(isFinite(arm));
    }
}
readNumber();
console.log(Math.random(1,5));