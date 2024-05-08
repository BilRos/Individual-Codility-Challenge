function flattenAndSort(array) {
    // Flatten the two-dimensional array into a single array
    const flattenedArray = array.reduce((acc, curr) => acc.concat(curr), []);
    
    // Sort the flattened array in ascending order
    const sortedArray = flattenedArray.sort((a, b) => a - b);
    
    return sortedArray;
}

// Test case
const array = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
console.log(flattenAndSort(array)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]