/*-----------------------------------
Defaults and destructuring arrays
-----------------------------------*/
function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid
//This throws an error because createGrid() expects an array to be passed in that it will then destructure.
createGrid(); // throws an error
// default paramater
function createGrid2([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}

function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}

houseDescriptor(['green', ['white', 'gray', 'pink']]);
houseDescriptor(['green']);

/*-----------------------------------
Defaults and destructuring objects
-----------------------------------*/
function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.

function buildHouse({floors = 1, color = 'red', walls = 'brick'}={}){
  return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`
}

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.
