const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesarModule", () => {
  describe("caesar", () => {
    it("should return encoded string with positive shift", () => {
      const encoded = caesar("hello", 3);
      expect(encoded).to.equal("khoor");
    });

    it("should return encoded string with negative shift", () => {
      const encoded = caesar("hello", -3);
      expect(encoded).to.equal("ebiil");
    });

    it("should return decoded string with positive shift", () => {
      const decoded = caesar("khoor", 3, false);
      expect(decoded).to.equal("hello");
    });

    it("should return decoded string with negative shift", () => {
      const decoded = caesar("ebiil", -3, false);
      expect(decoded).to.equal("hello");
    });

    it("should return the string with non-alphabetic characters in the same position", () => {
      const input = "Hello, World!";
      const encoded = caesar(input, 5);
      expect(encoded).to.equal("mjqqt, btwqi!");
    });

    it("should return false for invalid shifts", () => {
      const encoded = caesar("hello", 0);
      expect(encoded).to.equal(false);
    });
  });
});
