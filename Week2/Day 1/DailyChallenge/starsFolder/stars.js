let star = "*"
let starLength = 5

for (let i = 1; i <= starLength; i++) {
    console.log(star.repeat(i)) /* I needed to check the internet for star.repeat, othertwise 
                                    I got this on my own. */
}

// I came up with this solution while walking to the train station, so this counts.
let j = 0

while (j < 1) {
  for (let i = 1; i <= starLength; i++) {
      console.log(star.repeat(i)) 
  }
  j += 1
}