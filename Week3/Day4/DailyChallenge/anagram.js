let string1 = prompt("Please enter your first string:");
let string2 = prompt("Please enter your second string:");

function anagram(string1, string2){
    let lower1 = string1.trim().replaceAll(" ", "").toLowerCase(); 
    lower1 = lower1.split("").sort().join("");
    let lower2 = string2.trim().replaceAll(" ", "").toLowerCase(); 
    lower2 = lower2.split("").sort().join("");
    if(lower1 == lower2){
        return true;
    } else {
        return false;
    }
}

console.log(anagram(string1, string2));