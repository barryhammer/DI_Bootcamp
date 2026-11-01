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