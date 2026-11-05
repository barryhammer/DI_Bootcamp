let string1 = prompt("Please enter your first string:");
let string2 = prompt("Please enter your second string:");
let lower1 = "";
let lower2 = "";

lower1 = string1.replaceAll(" ", "").toLowerCase(); 
lower1 = lower1.split("").sort().join("");
lower2 = string2.replaceAll(" ", "").toLowerCase(); 
lower2 = lower2.split("").sort().join("");

(lower1 == lower2) ? console.log(`"${string1}" is an anagram of "${string2}"`) : console.log(`"${string1}" is not an anagram of "${string2}"`);