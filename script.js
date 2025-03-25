function firstWord(s) {
    // Trim leading spaces and find the first space
    let trimmed = s.trim();
    let index = trimmed.indexOf(" ");
    
    // If no space is found, return the entire string
    return index === -1 ? trimmed : trimmed.slice(0, index);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
