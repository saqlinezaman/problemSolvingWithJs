const product = [
    {name: 'Shampoo', price:300},
    {name: 'Facewash', price:500},
    {name: 'Moisturiser', price:700}
]
function getTotal(products){
    let total = 0 ;
    for(const product of products ){
        total = total+product.price;
    }
    return total;
}
const total = getTotal(product);
console.log(total);