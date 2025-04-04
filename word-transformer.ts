const reverseWord = (word: string) => word.split('').reverse().join('');

const capitalizeWord = (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const repeatWord = (word: string, times: number) => word.repeat(times);

// catered for swedish - feel free to change 😊
const countVowels = (word: string) => (word.match(/[aeiouyåäö]/gi) || []).length;

const transformWord = (operation: 'reverse' | 'capitalize' | 'repeat' | 'countVowels' , word: string , param: number) => {
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

const runTransformation = (): void => {
  const word: string = (document.getElementById('word') as HTMLInputElement).value;
  const operation = (document.getElementById('operation') as HTMLSelectElement).value as 'reverse' | 'capitalize' | 'repeat' | 'countVowels';
  const param: number = parseInt((document.getElementById('param') as HTMLInputElement).value);
  const result: string | number = transformWord(operation, word, param);
  const resultContainer: HTMLElement = document.getElementById('result') as HTMLElement;
  resultContainer.textContent = `Result: ${result}`;
  resultContainer.classList.toggle('active', result !== '');
};

// Show/hide param input based on selected operation
document.getElementById('operation')?.addEventListener('change', function (this: HTMLSelectElement) {
  const paramContainer = document.getElementById('paramContainer') as HTMLElement;
  paramContainer?.classList.toggle('active', this.value === 'repeat');
});

// Event listener for transform button
document.getElementById('transformButton')?.addEventListener('click', runTransformation);





