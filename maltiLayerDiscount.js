function multiLayerDiscount(quantity) {
    const first100price = 100;
    const secound100price = 90;
    const above200price = 70;
    if (quantity <= 100) {
        const total = quantity * first100price;
        return total
    }
    else if (quantity <= 200) {
        const first100total = 100 * first100price;
        const remaningQuantity = quantity - 100;
        const remaningtotal = remaningQuantity * secound100price;
        const total = remaningtotal + first100total;
        return total;
    }
    else {
        const first100total = 100 * first100price;
        const secound100total = 100 * secound100price;
        const remaningQuantity = quantity - 200;
        const remaningTotalQuantity = remaningQuantity * above200price;
        const total = first100total + secound100total + remaningTotalQuantity;
        return total;
    }
}
const totalDiscount = multiLayerDiscount(202)
console.log(totalDiscount)