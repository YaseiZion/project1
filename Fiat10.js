function sum(a,b){
    return a + b;
}
console.log(`1 + 2 = ${sum(1,2)}.`);
let guestList = `Guests:
    *Joth
    *Pete
    *Mary
    `;
console.log(guestList);
let guestList2 = "Guests: \n\t*Joth\n\t*Pete\n\t*Mary";
console.log(guestList2);
console.log("\u{20331}");
console.log(`abr`.length);
let str = `Warriors`;
console.log(str[0]);
console.log(str[str.length - 1]);
for (let char of str) {
    console.log(char);
}
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
