const substitutionModule = (function () {
  //helper function to check for repeated characters

  function substitution(input, alphabet, encode = true) {

    //helper function to determine if alphabet has dups
    function hasRepeatedCharacter(str) {
      const encountered = new Set();

      for (let char of str) {
        if (encountered.has(char)) {
          return true;
        }
        encountered.add(char);
      }
      return false;
    }


    //return false if argument doesnt fit parameters
    if (!alphabet || alphabet.length !== 26 || hasRepeatedCharacter(alphabet)) {
      return false;
    }

    const abc = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < input.length; i++) {
      const word = input[i];
      if (encode) {
        if (abc.includes(word)) {
          const wordIndex = abc.indexOf(word);
          result += alphabet[wordIndex];
        } else {
          result += word;
        }
      } else {
        if (alphabet.includes(word)) {
          const wordIndex = alphabet.indexOf(word);
          result += abc[wordIndex];
        } else {
          result += word;
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
