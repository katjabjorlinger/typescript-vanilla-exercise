"use strict";
var _a, _b;
const reverseWord = (word) => word.split('').reverse().join('');
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
const repeatWord = (word, times) => word.repeat(times);
// catered for swedish - feel free to change 😊
const countVowels = (word) => (word.match(/[aeiouyåäö]/gi) || []).length;
const transformWord = (operation, word, param) => {
    switch (operation) {
        case 'reverse':
            return reverseWord(word);
        case 'capitalize':
            return capitalizeWord(word);
        case 'repeat':
            return repeatWord(word, param);
        case 'countVowels':
            return countVowels(word);
        default:
            return "Invalid operation";
    }
};
/*
const runTransformation = () => {
  const word: string = (document.getElementById('word').value) as HTMLInputElement;
  const operation = document.getElementById('operation').value as HTMLSelectElement;
  const param = parseInt(document.getElementById('param').value) as HTMLSelectElement;
  const result = transformWord(operation, word, param) as ;
  const resultContainer = document.getElementById('result');
  resultContainer.textContent = `Result: ${result}`;
  resultContainer.classList.toggle('active', result !== '');
}; */
const runTransformation = () => {
    const word = document.getElementById('word').value;
    const operation = document.getElementById('operation').value;
    const param = parseInt(document.getElementById('param').value);
    const result = transformWord(operation, word, param);
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Result: ${result}`;
    resultContainer.classList.toggle('active', result !== '');
};
// Show/hide param input based on selected operation
(_a = document.getElementById('operation')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function () {
    const paramContainer = document.getElementById('paramContainer');
    paramContainer === null || paramContainer === void 0 ? void 0 : paramContainer.classList.toggle('active', this.value === 'repeat');
});
// Event listener for transform button
(_b = document.getElementById('transformButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', runTransformation);
