const myArray = [4, 2, 7, 1, 9, 3];

// Use the sort() method with a custom comparison function
myArray.sort(function (a, b) {
    return b - a;
});

console.log(myArray); // The array is now sorted in descending order
