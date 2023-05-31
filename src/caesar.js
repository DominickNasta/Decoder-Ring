// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // return false is no, 0 ,26, or -26 shift
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    //turn input to lowercase and define alphabet
    input = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    //loop through the input
    for (let i = 0; i < input.length; i++) {
      const letter = input[i];
      //find the index of each letter of input in the alphabet
      if (alphabet.includes(letter)) {
        const letterIndex = alphabet.indexOf(letter);

        //get the new index after the shift
        let shiftIndex;
        if (encode) {
          shiftIndex = letterIndex + shift;
        } else {
          shiftIndex = letterIndex - shift;
        }
        if (shiftIndex >= 26) {
          shiftIndex = shiftIndex % 26;
        }
        if (shiftIndex <= -1) {
          shiftIndex = (shiftIndex % 26) + 26;
        }
        //add the new letter or empty space to result
        const shiftLetter = alphabet[shiftIndex];
        result += shiftLetter;
      } else {
        result += letter;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
