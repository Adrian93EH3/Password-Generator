// grabs the elements by their ID in the HTML and I gave them new parameters to reference them by in future code
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

// renaming values for functions down below on lines 18~36
const randomFunc = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    symbol: randomSymbol
}

// chooses lowercase characters from ASCII list 97~122 aka a~z
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// chooses uppercase characters from ASCII list 65~90 aka A~Z
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// chooses numbers from ASCII list 48~57 aka 0-9
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// chooses random symbols from list of values below
function randomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// checks what has been selected in the HTML to be generated
generate.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// generates what has been selected to generate
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    // If nothing is selected it won't display a password
    if (typesCount === 0) {
        return '';
    }

    // Create a loop to generate random characters until max value selected for password is met
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    // displays password
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}
