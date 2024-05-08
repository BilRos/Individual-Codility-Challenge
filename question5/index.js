
function removeDuplicates(str) {
    // Split the string into an array of words
    const words = str.split(" ");
    // Create an object to store unique words
    const uniqueWords = {};
    
    // Iterate through the array of words
    for (const word of words) {
        // Store the word in the object with its value as true
        uniqueWords[word] = true;
    }
    
    // Get the keys (unique words) from the object
    const result = Object.keys(uniqueWords);
    
    // Join the unique words array into a string
    return result.join(" ");
}

// Test case
const input = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
console.log(removeDuplicates(input)); // 'alpha beta gamma delta'
