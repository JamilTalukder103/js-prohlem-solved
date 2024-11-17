const products = [
    {
        price: 50,
        quantity: 2
    },
    {
        price: 10,
        quantity: 2
    },
    {
        price: 50,
        quantity: 2
    },
    {
        price: 180,
        quantity: 2
    },
]
function calculateTotalCost(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost
    }
    return total;
}
const total = calculateTotalCost(products)
console.log(total)
