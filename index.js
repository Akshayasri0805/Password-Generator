const charactersArray = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',  // Uppercase letters
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',  // Lowercase letters
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',  // Numbers
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', '<', '>', ',', '.', '?', '/'  // Special characters
];

function generatePassword(length) {
    let password = ''; 
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersArray.length); 
        password += charactersArray[randomIndex]; 
    }
    return password; 
}

function generateAndDisplayPassword() {
    const password1 = generatePassword(12); // Generate the first password
    const password2 = generatePassword(12); // Generate the second password

    // Display the passwords in the respective input fields
    document.getElementById('password1').value = password1; 
    document.getElementById('password2').value = password2; 
}
