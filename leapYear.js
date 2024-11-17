function leapYear(year) {
    if (year % 4 === 0) {
        return 'this year is leap year'
    }
    return 'this year is not leap year'
}
const result = leapYear(2000)
console.log(result)