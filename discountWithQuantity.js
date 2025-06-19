// buy less then or equal 100 product = 100 taka  no discount
// buy more than 100 product but less then or equal 200 product = 10 % discount i mean 90 taka 
// buy more than 200 product  = 30 % discount i mean 70 taka 

function discountPrice (qunatity){
    if(qunatity <= 100 ){
        const total = qunatity * 100;
        return total;
    }
    else if(qunatity <= 200){
        const total = qunatity * 90;
        return total;
    }
    else{
       const total = qunatity * 70;
        return total; 
    }
}
const total = discountPrice(100);
console.log(total);