// Nested loop

function countIt() {
  let count = 0;

  function counter() {
    count += 1;
    console.log(count);
  }

  return counter;
}

const myCounter = countIt();

myCounter(); // 1
myCounter(); // 2
myCounter(); // 3

/* 
1. countIt() runs once and creates count = 0.
2. It returns the counter function.
3. counter remembers the count variable even after countIt() has finished. This is called a closure.
4. Each time you call myCounter(), it updates the same count variable.
*/