function ucFirst(str) {
    let l = str[0];
    l = l.toUpperCase();
    str = l + str.slice(1);
    return str;
}
console.log(ucFirst(`vasya`));