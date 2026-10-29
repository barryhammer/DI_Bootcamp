// Exercise 1: Find the numbers divisible by 23
function displayNumbersDivisible() {
    let sum = 0
    for (let i = 0; i < 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
          sum += i
        }
    }
    console.log("Sum: " + sum)
}

displayNumbersDivisible();

// Exercise 1 A: Find the numbers divisible by divisor
function displayNumbersDivisibleWithParameter(divisor=0) {
    let sum = 0
    for (let i = 0; i < 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
          sum += i
        }
    }
    console.log("Sum: " + sum)
}

displayNumbersDivisibleWithParameter();

// Exercize 2: Shopping List
const stock = {
    banana: 6,
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 1
};

const prices = {
    banana: 4,
    apple: 2,
    pear: 1,
    orange: 1.5,
    blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

let total = 0;

function myBill() {
    for (let item of shoppingList) {
        if (stock[item] > 0) {
            total += prices[item];
            stock[item]--;
        }
        else {
          console.log(`Sorry, ${item} is out of stock.`)
        }
    }
    console.log (total);
    console.log(stock);
}

myBill();

// Exercise 3: What’s in my wallet?
function changeEnough(itemPrice, amountOfChange) {
    // Convert the item price from dollars to cents
    const itemPriceInCents = itemPrice * 100;

    // Calculate the total value of the change in cents
    const totalChange =
        amountOfChange[0] * 25 + // quarters - First index
        amountOfChange[1] * 10 + // dimes - Second index
        amountOfChange[2] * 5 +  // nickels - Third index
        amountOfChange[3];       // pennies - Fourth index

    // Return true if there's enough money, otherwise false
    return totalChange >= itemPriceInCents;
}

// changeEnough(4.25, [25, 20, 5, 0]) => returns true
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

// Exercise 4: Vacations Costs
function hotelCost(nights) {
    return Math.round(nights) * 140; // Standard nightly fee
}

function planeRideCost(price) {
    return price; // Price of destination
}

function rentalCarCost(car) {
    if (car > 10) {
      return Math.round(car) * 40 * 0.95 // 5% discount
    } else {
      return Math.round(car) * 40
    }
}

function totalVacationCost() {
    // Hotel nights
    let nights = 0;
    while (nights < 1) {
        nights = Number(prompt("How many nights would you like to stay in our hotel? "));
    }

    // Flight destination
    let destination = "";
    while (destination == "") {
      destination = prompt("Where would you like to go? ")
    }
        const price = 
        destination === "London" ? 183 : // If destination is London
        destination === "Paris" ? 220 : // If destination is Paris
        300;        // All other destinations

    // Car rental
      let car = 0;
      while (car < 1) {
        car = Number(prompt("How many days would you like to rent a car? "));
    }
  
    let totalHotel = hotelCost(nights);
    let totalPlane = planeRideCost(price);
    let totalRental = rentalCarCost(car);

    let total = totalHotel + totalPlane + totalRental;

    console.log(`The car cost: $${totalRental}, the hotel cost: $${totalHotel}, the plane tickets cost: $${totalPlane}. The total cost for your vacation is $${total}`);
}

totalVacationCost();