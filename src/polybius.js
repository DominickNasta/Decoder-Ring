

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    const letterToNumber = {
      A: "11",
      B: "21",
      C: "31",
      D: "41",
      E: "51",
      F: "12",
      G: "22",
      H: "32",
      I: "42",
      J: "42",
      K: "52",
      L: "13",
      M: "23",
      N: "33",
      O: "43",
      P: "53",
      Q: "14",
      R: "24",
      S: "34",
      T: "44",
      U: "54",
      V: "15",
      W: "25",
      X: "35",
      Y: "45",
      Z: "55",
    };

    const numberToLetter = {
      11: "A",
      21: "B",
      31: "C",
      41: "D",
      51: "E",
      12: "F",
      22: "G",
      32: "H",
      42: "I/J",
      52: "K",
      13: "L",
      23: "M",
      33: "N",
      43: "O",
      53: "P",
      14: "Q",
      24: "R",
      34: "S",
      44: "T",
      54: "U",
      15: "V",
      25: "W",
      35: "X",
      45: "Y",
      55: "Z",
    };

    //return false if decode message is invalid
    input = input.toUpperCase();
    const inputWithoutSpaces = input.replace(/\s/g, "");
    if (!encode && inputWithoutSpaces.length % 2 !== 0) {
      return false;
    }

    //if true loop input and add value of key or space accordingly
    if (encode) {
      let encoded = "";
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          encoded += " ";
        } else {
          const number = letterToNumber[char];
          encoded += number;
        }
      }
      return encoded;
    } else {
      let decoded = "";
      let i = 0;
      while (i < input.length) {
        if (input[i] === " ") {
          decoded += " ";
          i++;
        } else {
          const number = input.slice(i, i + 2);
          const letter = numberToLetter[number];
          decoded += letter ? letter : "";
          i += 2;
        }
      }
      return decoded.toLowerCase();
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
