function tallest(numbers) {
    let tallest = numbers[0]
    for (let number of numbers) {
        if (tallest < number) {
            tallest = number
        }
    }
    return tallest
}
const numbers = [45, 55, 99, 77, 1000]
const tallestNumber = tallest(numbers)
console.log(tallestNumber)