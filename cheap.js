const prices = [10000,20450,12000,23000,75000,9999,4564];
function getMin(numbers){
     let min = numbers[0];
    for (const num of numbers){
        if (num < min){
            min = num ;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log(cheap);