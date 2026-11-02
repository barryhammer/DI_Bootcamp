let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]

const countCalories = (accumulator, currentValue) => accumulator + (currentValue.desert === 'Apple Pie' ? 0 : currentValue.calories);

console.log(party.reduce(countCalories, 0));