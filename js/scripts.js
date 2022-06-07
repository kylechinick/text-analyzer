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

// function noPottyMouth(text) {
//   const wordArray = text.split(' ');
//   wordArray.forEach(function (element) {
//     if (element === 'loopdaloop') {
//       wordArray.replace(element, 'awooga');
//     }
//     // if this array-element equals this bad-word
//     // then replace with "awooga"
//   });
// }

// exampleString = 'test words and stuff';
// console.log(exampleString);
// exampleString.replace('loopdaloop', 'awooga');
// console.log(exampleString);
