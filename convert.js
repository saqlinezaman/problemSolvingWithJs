// 12 inch = 1 feet 

inchToHeight=(inch)=>{
    const feet = inch/12;
    return feet;
}
const myHeight = inchToHeight(75);
console.log(myHeight);

milsToKm=(mile)=>{
    const km = mile*1.60934;
    return km;
}
const dhakaToChittogong = milsToKm(180);
console.log(dhakaToChittogong);