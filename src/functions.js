/* eslint-disable no-use-before-define */
// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

const ligarDesligar = (status) => {
  let engineStatus = status === 'ligado' ? 'desligado' : 'ligado';
  console.log(`O motor está ${engineStatus}`);
  return engineStatus;
};
ligarDesligar('desligado');

// 2 - Crie a função circleArea, que calcule a área de um círculo.
const circleArea = (radius) => {
  if (typeof radius !== 'number') {
    return 'O parâmetro radius deve ser um número';
  }
  const PI = 3.14;
  const area = PI * radius ** 2;
  return `Essa é a área do círculo: ${area}`;
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (phrase) => {
  const arrayPhrase = phrase.split(' ');
  let longest = '';
  for (const value of arrayPhrase) {
    if (value.length > longest.length) {
      longest = value;
    }
  }
  return longest;
};

// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => {}),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => {}),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => {}),
};
