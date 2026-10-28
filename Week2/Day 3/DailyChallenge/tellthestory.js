myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    const mySpan = document.getElementById("story");

    

    // I would normally use required for each HTML string, but I'll assume this also checks for blanks.
        if(noun === "" || adjective === "" || person === "" || verb === "" || place === ""){
            alert("Please enter data for all input fields.")
        } else {
            const story = `Once upon a time, ${person} was ${verb} through the ${adjective} ${place}. ${person} looked down and saw a ${noun}.`
            mySpan.textContent = story;
        }
})