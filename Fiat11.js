let str = `Ослик Иа-Иа посмотрел на виадук`;
let target = `Иа`;
let pos = 0;
while(true) {
    let found = str.indexOf(target,pos);
    if (found == -1) break;
    console.log(`Find here: ${found}`);
    pos = found +  1;
}
let pol = -1;
while((pol = str.indexOf(target,pol + 1)) != -1) {
    console.log(`Find here: ${pol}`);
}
if(~str.indexOf(`Иа`)) {
    console.log(`It\`s working!`);
}
console.log(str.includes(`Иа`,2));
console.log(str.startsWith(`Ip`));
console.log(str.endsWith(`адук`));