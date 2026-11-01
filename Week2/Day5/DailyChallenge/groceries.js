let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {  // Defines function using arrow function.
  groceries.fruits.forEach(fruit => console.log(fruit)); // for each fruit in groceries object
};

const cloneGroceries = () => {
    let user = client;
    user = "Betty" // variables are using the same reference point
    let shopping = { ...groceries };
    shopping.totalPrice = "35$"
    shopping.other.paid = false;
  console.log(user);
  console.log(shopping);
}

cloneGroceries();

console.log(client);
console.log(groceries);