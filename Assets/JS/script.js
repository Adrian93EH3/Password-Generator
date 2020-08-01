var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}'];

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var passwordLength = parseInt(prompt('How long do you want your password to be?'))

var passwordGenerated = []

if (confirm('Would you like symbols?')) {
    passwordGenerated.push(symbols)
}
if (confirm('Would you like numbers?')) {
    passwordGenerated.push(numbers)
}
if (confirm('Would you like letters?')) {
    passwordGenerated.push(letters)
}
console.log(passwordLength, passwordGenerated);

for (var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * passwordGenerated.length);
    var randomPasswordPicker = Math.floor(Math.random() * passwordGenerated[randomPassword].length);
    
    
    console.log(randomPassword, randomPasswordPicker)
}