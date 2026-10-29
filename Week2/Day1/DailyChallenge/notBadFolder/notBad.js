let sentence = "This dinner is not that bad ! You cook really well"
let wordNot = sentence.indexOf('not'); 
let wordBad = sentence.indexOf('bad'); 

/* Check if variables wordBad and wordNot are in string, then check if wordBad comes before wordNot */
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    let result = sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad + 3);
    console.log(result);
} else {
    console.log(sentence);
}