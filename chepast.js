const phones = [
    {
        model: 1200,
        price: 9000,
        color: 'red',
        weight: '200gm'
    },
    {
        model: 1200,
        price: 19000,
        color: 'red',
        weight: '200gm'
    },
    {
        model: 1200,
        price: 9000,
        color: 'red',
        weight: '200gm'
    },
    {
        model: 1200,
        price: 9000,
        color: 'red',
        weight: '200gm'
    },
    {
        model: 11200,
        price: 49000,
        color: 'red',
        weight: '200gm'
    }
];
function cheapest(phones) {
    let cheapest = phones[0]
    for (const phone of phones) {
        if (phone.price > cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const cheapestPhone = cheapest(phones)
console.log(cheapestPhone)

