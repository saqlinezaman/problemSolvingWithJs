function add (num1, num2){
    return num1 + num2;
}
function minus (num1, num2){
    return num1 - num2;
}
function into (num1, num2){
    return num1 * num2;
}
function devide (num1, num2){
    return num1 / num2;
}
function calculator(a,b,operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operation === 'minus'){
        const result = minus(a,b);
        return result;
    }
    else if(operation === 'into'){
        const result = into(a,b);
        return result;
    }
    else if(operation === 'devide'){
        const result = devide(a,b);
        return result;
    }
    else{
        return 'first learn math than come here';
    }
}
const result = calculator(199,99,'minus');
console.log(result);