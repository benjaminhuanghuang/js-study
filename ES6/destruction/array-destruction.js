
//Sample 1
const pizzaSizes= ["slice", "half-pie", "full-pie"];
const [slice, halfPie, fullPie] = pizzaSizes;


// Sample 2
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

// Sample 3
// You can also ignore values when destructuring arrays. For example, const [x, , z] = point; ignores the y coordinate and discards it.
const [x1, , z2] = point;

console.log(x, z);
