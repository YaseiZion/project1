let str = "stringify";
console.log(str.slice(0,5));
console.log(str.slice(3));
console.log(str.substring(2,6));
console.log(str.substr(2,4));
console.log(`z`.codePointAt(0));
console.log(String.fromCodePoint(90));
let vr = ``;
for(let i = 65; i <= 220; i++) {
    vr += String.fromCodePoint(i);
}
console.log(vr);
console.log( 'Österreich'.localeCompare('Zealand') );
