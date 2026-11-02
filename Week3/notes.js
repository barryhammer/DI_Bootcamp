/* const numbers = [10, 11, 12, 15, 20]

for (const x in numbers) {
  if (numbers[x] % 2 === 0) {
    console.log(numbers[x]);
  }
}

const words = ["hello", "hooray", "hola"]
console.log(words.every(e => e[0] === 'h'))
// const myFunction = (e) => e[0] === 'h';
// console.log(words.every(myFunction));
*/ 
//myArray.push(10) - Moves element to last part of array
//myArray.pop() - Removes last element of array
//myArray.shift() - Removes first element of array, saves to variable
// const [firstFruit, ...remainingFruits] = fruits; - Uses rest parameter to keep remainder of array while adding firstFruit to first part of array
//myArray.unshift(3) - Moves element to beginning of array
//Myarray.splice(start, deleteCount, item1, item2, ..., itemN)
// start: The zero-based index at which to start changing the array. 
// deleteCount (optional): An integer indicating the number of elements to remove.
// item1, item2, ... (optional): The elements to add to the array, beginning at the start index

//myNewArray.flat(2) - Integer removes the number of brackets specified in the array. 

/* 
const myArray = [1, 20, 20, 30];

const myFunction = (e) => e * 5;

const newArray = [];
for (const of myArray) {
  newArray.push(myFunction(e));
}
// newArray = myArray.map(myFunction) - Returns same result as for loop

// const newArray = (evalue, eIndex, myArray) => e*5

*/
myOldArray = [1, 3, 5, 10, 0]

const myFunction2 = (evalue, eIndex, myOldArray) => {
  if (eIndex % 2 === 0){
    return evalue * 2
  } else {
    if (eIndex > 0) {
      return eValue + myOldArray[eIndex - 1]
    } else {
      return -1000
    }
  }
}

// const myFunction2 = (evalue, eIndex, myOldArray) =>
// eIndex % 2 === 0 ? eValue * 2 : eIndex > 0 ? eValue + myOldArray[eIndex -1] : -1000

console.log(myArray.map(myFunction2));

/* 
const myArray = [1, 10, 20, 30]
const myCondition = (e) => e > 9;
console.log(myArra.filter(myCondition)); 

let result = 0;
myArray.forEach(e => {
  result += e;
})
console.log(result)

// const myCallback = (a, b) => a + b;
// console.log(myArray.reduce(myCallback, 0))
// a = 0, b = 1 - The initial argument, the initial element
// a = 1, b = 10 - 