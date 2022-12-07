
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

Solution:

function findLongestWordLength(str) {
    let newStr = str.split(" ");
     let maxL = 0;
  
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i].length > maxL) {
        maxL = newStr[i].length;
      }
    }
    return maxL
  }
