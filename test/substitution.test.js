const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitutionModule", () => {
  describe("substitution", () => {
    it("should encode a string using the provided alphabet", () => {
      const result = substitution("hello", "zyxwvutsrqponmlkjihgfedcba");
      expect(result).to.equal("svool");
    });

    it("should decode a string using the provided alphabet", () => {
      const result = substitution("svool", "zyxwvutsrqponmlkjihgfedcba", false);
      expect(result).to.equal("hello");
    });

    it("should ignore characters not present in the provided alphabet during encoding", () => {
      const result = substitution("hello world!", "zyxwvutsrqponmlkjihgfedcba");
      expect(result).to.equal("svool dliow!");
    });

    it("should ignore characters not present in the provided alphabet during decoding", () => {
      const result = substitution(
        "svool dliow!",
        "zyxwvutsrqponmlkjihgfedcba",
        false
      );
      expect(result).to.equal("hello world!");
    });

    it("should return false if the alphabet is missing or has a length other than 26", () => {
      const result = substitution("hello", "");
      expect(result).to.be.false;
    });

    it("should return false if the alphabet has repeated characters", () => {
      const result = substitution("hello", "ttttttttrqponmlkjihgfedcba");
      expect(result).to.be.false;
    });
  });
});
