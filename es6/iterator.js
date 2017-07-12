let myArray = [1, 2, 3, 4, 5]

let iterator = myArray[Symbol.iterator]();

console.log(iterator.next());


const obj = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                };
            }
        };
    }
};