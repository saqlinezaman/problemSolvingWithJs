const phones = [
    {name: 'Samsung', price: 100000, camera: '12mp', color: 'Black'},
    {name: 'I Phone', price: 150000, camera: '12mp', color: 'Blue'},
    {name: 'Pixel', price: 50000, camera: '12mp', color: 'Olive'},
];
function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
       if(phone.price < min.price){
            min = phone ;
       }
    }
    return min ;
}
const cheap = getCheapestPhone(phones);
console.log(cheap);