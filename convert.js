// 12 inch = 1 feet 

inchToHeight=(inch)=>{
    const feet = inch/12;
    return feet;
}
const myHeight = inchToHeight(75);
console.log(myHeight);
