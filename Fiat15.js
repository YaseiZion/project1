function truncate(str) {
    if(str.length > 20) {
        str = str.slice(0,20) + "...";
    }
    return str;
}
let avr = "dfsdfsfdfsdfsdfsdfd3203332fdsfsfsd555fsfsdfsfdss";
console.log(truncate(avr));
function extraCurrenceValue(str) {
    let zam = str.length;
    let zar = ``;
    for(let x = 0; x <= zam; x++) {
        if(Number(str[x]) >= 0){
            for(let i = x; x <= zam && Number(str[i]) >= 0; i++){
                zar = zar + str[i];        
            }
            break   
        }; 
    }
    return zar;
}
console.log(extraCurrenceValue(avr));