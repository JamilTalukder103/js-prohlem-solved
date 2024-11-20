const array = [true, 234, false, true, true, { name: 'jamil' }, false]
function countBoolean(array) {
    if (!Array.isArray(array)) {
        return 'please provide valid array'
    }
    let count = 0;
    for (const item of array) {
        if (typeof item === 'boolean') {
            count++;
        }
    }
    return count
}
const totalBoolean = countBoolean(array);
console.log(totalBoolean)