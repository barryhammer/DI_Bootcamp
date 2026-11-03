let myObj = {
  firstname: "Barry",
  lastname: "Hammer",
  greeting: function() {
    console.log("Hello " + this.firstname);
  }
};

myObj.age = 54;
myObj.goodbye = function() {console.log(`Goodbye ${this.firstname} ${this.lastname}`);}

myObj.goodbye();

const copy1 = { ...myObj };	
copy1.firstname = "Shoshanna";
copy1.age = 45;

const copy2 = { ...myObj };	
copy2.firstname = "Elishewa";
copy2.age = 17;

const people = [myObj, copy1, copy2];

people.forEach(person => {
  if (person.age > 21) {
    person.greeting();
  } else {
    person.goodbye();
  }
});

/*
people.forEach(person => {
  person.age > 21 ? person.greeting() : person.goodbye();
});
*/