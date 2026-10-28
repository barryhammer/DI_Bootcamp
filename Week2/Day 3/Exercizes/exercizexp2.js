/* 



When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
*/

// Retrieve the form and console.log it.
const form = document.querySelector('form');
console.log(form); // Should I be using formData, even though we didn't learn it yet?

// Retrieve the inputs by their id and console.log them.
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

console.log("First name:", fname.value);
console.log("Last name:", lname.value);

// Retrieve the inputs by their name attribute and console.log them.
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    console.log(input);
});