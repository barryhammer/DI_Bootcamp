let names = ["john", "sarah", 23, "Rudolph", 34];

for (let i = 0; i < names.length; i++) {
    if (typeof names[i] !== "string") {
        continue;
    }

    if (names[i].charAt(0) !== names[i].charAt(0).toUpperCase()) {
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    }
}

console.log(names);

for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== "string") {
        break;
    }
  else {
    console.log(names[i])
  }
}