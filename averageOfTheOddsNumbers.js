const numbers = [1,2,3,4,5,6,7,8,9,10];

oddAvarage=(numbers)=>{
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum+number;
    }
   const count = odds.length;
   const avg =sum / count ;
   return avg;
}
const avg = oddAvarage(numbers);
console.log(avg);
