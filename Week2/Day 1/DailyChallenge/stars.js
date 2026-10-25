let star = "*"
let starLength = 5

for (let i = 1; i <= starLength; i++) {
    console.log(star.repeat(i)) /* I needed to check the internet for star.repeat, othertwise 
                                    I got this on my own. */
}

for (let i = 1; i <= starLength; i++) {
    let line = "";

    // This is the part I couldn't get on my own.
    for (let j = 1; j <= i; j++) {
        line += star;
    }

    console.log(line);
}