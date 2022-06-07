// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(' ');
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(' ');
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

let theString = 'these loopdaloop are still loopdaloop words loopdaloop';

function noPottyMouth(text) {
  if (text.trim().length === 0) {
    return 0;
  }

  const wordArray = text.split(' ');
  
    let wordCount = 0;
  
  
  wordArray.forEach(function (element) {
    if (element === 'loopdaloop') {
      element.replace('loopdaloop', 'awooga');
      console.log(element);
      console.log(theString);
    }
  });
}

noPottyMouth(theString);

// let wordArray = '';

// let theString = 'these loopdaloop are still loopdaloop words loopdaloop';

// function noPottyMouth(text) {
//   // let wordArray = text.split(' ');
//   theString.forEach(function (element) {
//     if (element.includes('loopdaloop')) {
//       theString.replace('loopdaloop', 'awooga');
//       // console.log('I FOUND A BAD WORD');
//       // console.log(theString.replace('loopdaloop', 'awooga'));
//     }
//   });
//   return theString;
// }

// function noPottyMouthAlt(text) {
//   let wordArray = text.split(' ');
//   wordArray.forEach(function (element) {
//     if (element.includes('loopdaloop') || element.includes('zoinks')) {
//       element.replace('loopdaloop', 'awooga');
//       console.log(wordArray);
//     }
//     return wordArray;
//   });
// }

// UI Logic

$(document).ready(function () {
  $('form#word-counter').submit(function (event) {
    event.preventDefault();
    const passage = $('#text-passage').val();
    const word = $('#word').val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $('#total-count').html(wordCount);
    $('#selected-count').html(occurrencesOfWord);
  });
});
