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
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

// chooses lowercase characters from ASCII list 97~122 aka a~z
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// chooses uppercase characters from ASCII list 65~90 aka A~Z
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// chooses numbers from ASCII list 48~57 aka 0-9
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}