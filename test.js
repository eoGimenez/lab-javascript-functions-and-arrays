const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() {
  let stringAvg = 0;
  if (!wordsArr.length) {
    return null;
  } else {
    for (i = 0; i < wordsArr.length; i++) {
        stringAvg += wordsArr[i].length;
      }
    }
    stringAvg = (stringAvg / wordsArr.length);
    return stringAvg;
  }
 
let text = averageWordLength(wordsArr);
console.log(text)



  /* const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  let stringAvg = 0;
  if (!wordsArr.length) {
    stringAvg = null;
  } else {
    for (i = 0; i < wordsArr.length; i++) {
      if (wordsArr.length == 1) {
        stringAvg = (stringAvg + wordsArr[i].length) / 2;
        return stringAvg;
      } else {
        stringAvg += wordsArr[i].length;
      }
    }
    stringAvg = stringAvg / wordsArr.length
  }
  return stringAvg;
 }
 */
