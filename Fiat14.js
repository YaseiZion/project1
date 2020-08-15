function checkSpam(str) {
    if (!str) return str;
    str = str.toLowerCase();
    let a = `viagra`;
    let b = `xxx`;
    if (str.includes(a) == true || str.includes(b) == true) return true;
    return false; 
}
console.log(checkSpam(`buy Vagra nowxxx`));