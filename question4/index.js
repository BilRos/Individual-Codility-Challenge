function palindrome(x) {
    // Convert the integer to a string
    const number = x.toString();
    
    // Iterate through the string from both ends towards the center
    for (let i = 0, j = number.length - 1; i < j; i++, j--) {
        // If characters at current positions don't match, return false
        if (number[i] !== number[j]) {
            return false;
        }
    }
    // If the loop completes without returning false, it's a palindrome
    return true;
}

// Test cases
console.log(palindrome(121)); // true
console.log(palindrome(-121)); // false