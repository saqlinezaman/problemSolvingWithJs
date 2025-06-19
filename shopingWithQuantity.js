const product = [
    {name: 'Shampoo', price:300, qunatity: 3},
    {name: 'Facewash', price:500, qunatity: 5},
    {name: 'Moisturiser', price:700, qunatity: 2}
]
function getTotal(products){
    let total = 0 ;
    for(const product of products ){
        const withQuantity = product.price * product.qunatity ;
        total = total+ withQuantity;
    }
    return total;
}
const total = getTotal(product);
console.log(total);