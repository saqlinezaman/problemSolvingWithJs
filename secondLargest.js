function secondLargest(arr){
    let largest = arr[0];
    let secondlargest = null;
    for(let i = 1; i<arr.length; i++){
        let current = arr[i];
        if(current>largest){
            secondlargest = largest;
            largest = current;
        }
        else if(secondlargest === null || current < secondlargest){
            secondlargest = largest;
        }
    }
    return secondlargest;
} 
console.log(secondLargest([4,2,5,8,10]));