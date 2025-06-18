const height  = [10,20,45,33,55,23,69];
function getMax(numbers){
    let max=numbers[0];
    for(const num of numbers){
        if(num>max){
            max = num;
        }
    }
    return max;
}
const max = getMax(height);
console.log('The max number in the array is =',max);
