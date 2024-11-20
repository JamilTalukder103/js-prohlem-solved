function calculateSavings(income) {
    if (typeof income !== 'number') {
        return 'invalid input!'
    }
    const houseRent = 5000;
    const meelCost = 3000;
    const personalExpense = 2000;
    const totalExpense = houseRent + meelCost + personalExpense;
    if (totalExpense > income) {
        return 'Earn mone..!'
    }
    const totalSavings = income - totalExpense;

    return totalSavings;
}
const savings = calculateSavings(20000)
console.log(savings)