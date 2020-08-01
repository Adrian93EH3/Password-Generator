var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}'];

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var passwordLength = parseInt(prompt('How long do you want your password to be?'))

var passwordGenerated = []
var randomArray = []

if (confirm('Would you like symbols?')) {
    passwordGenerated.push(symbols)
}
if (confirm('Would you like numbers?')) {
    passwordGenerated.push(numbers)
}
if (confirm('Would you like lowercase letters?')) {
    passwordGenerated.push(lowercaseLetters)
}
if (confirm('Would you like uppercase letters?')) {
    passwordGenerated.push(uppercaseLetters)
}
console.log(passwordLength, passwordGenerated);

for (var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * passwordGenerated.length);
    var randomPasswordPicker = Math.floor(Math.random() * passwordGenerated[randomPassword].length);
    var random = passwordGenerated[randomPassword][randomPasswordPicker]
    randomArray.push(random)
    console.log(randomPassword, randomPasswordPicker, random)
}
console.log(randomArray)