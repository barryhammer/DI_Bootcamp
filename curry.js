const myTestFunction = (a,b,c,d) => a + b + c + d;
const myTestFunction2 = a => b => c => d => a + b + c + d;

function myAddFunction(a,b) {
  return a + b;
}

function myAddFunction2(a) {
  function myInnerFunction(b) {
    return a + b;
  }
  return myInnerFunction
}

function curry(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...more) => curried(...args, ...more);
    // it uses an arrow function, a rest parameter, the spread operator, and a closure all at once.
    // The ... collects any arguments passed into this new function and stores them in an array.
    // curried(...) calls the original inner function again.
    // curried(...args, ...more) combines the old arguments with the new arguments.
    // The spread operator expands the arrays: curried(...[1,2], ...[3,4]) becomes curried(1, 2, 3, 4)
    // he reason this works is that the returned arrow function remembers the old args value.
    // "When I am called later, take the arguments I already have (args), add the new arguments (more), and continue."
  }

  return curried;
}


function addFunction2(a, b) {
  return a + b;
}

function addFunction4(a, b, c, d) {
  return a + b + c + d;
}


const curriedFunction2 = curry(addFunction2);
const curriedFunction4 = curry(addFunction4);

console.log(curriedFunction4(1, 2, 3, 4));

const myNumbers = [1,2,3,4];
const addNumbers = (nums) => {
  let result = 0;
  
}