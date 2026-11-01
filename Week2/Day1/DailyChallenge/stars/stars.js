let star = "*";
let starLength = 6;

for (let i = 1; i <= starLength; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        if (j > 1) {
            line += " ";
        }

        line += star;
    }
    console.log(line);
}
