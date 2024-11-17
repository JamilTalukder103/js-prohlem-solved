const products = [
    {
        price: 50
    },
    {
        price: 10
    },
    {
        price: 50
    },
    {
        price: 180
    },
]
function calculateTotalCost(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price
    }
    return total;
}
const total = calculateTotalCost(products)
console.log(total)
