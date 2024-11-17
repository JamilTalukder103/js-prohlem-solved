// let a = 5;
// let b = 7;
// const temp = a;
// console.log('a', temp)
// a = b;
// b = temp
// console.log(a, b)

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}