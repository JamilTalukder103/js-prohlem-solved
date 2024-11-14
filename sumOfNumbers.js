function sumOfNumbers(numbers){
  let sum=0;
for(const number of numbers){
    sum+=number;
}
return sum;
}

const numbers=[3,5,6,3]
const result=sumOfNumbers(numbers)
console.log(result)