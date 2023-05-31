const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybiusModule", () => {
  describe("polybius", () => {
    it("should encode a message correctly", () => {
      const encoded = polybius("HELLO WORLD");
      expect(encoded).to.equal("3251131343 2543241341");
    });

    it("should encode a message with spaces correctly", () => {
      const encoded = polybius("HELLO WORLD", true);
      expect(encoded).to.equal("3251131343 2543241341");
    });

    it("should encode a message with 'I' and 'J' correctly", () => {
      const encoded = polybius("IJ");
      expect(encoded).to.equal("4242");
    });
  });

  describe("decoding", () => {
    it("should decode an encoded message correctly", () => {
      const decoded = polybius("3251131343 2543241341", false);
      expect(decoded).to.equal("hello world");
    });

    it("should decode an encoded message with spaces correctly", () => {
      const decoded = polybius("3251131343 2543241341", false);
      expect(decoded).to.equal("hello world");
    });

    it("should decode an encoded message with 'I' and 'J' correctly", () => {
      const decoded = polybius("4242", false);
      expect(decoded).to.equal("i/ji/j");
    });

    it("should return false for an invalid decoded message", () => {
      const decoded = polybius("3251131343 2543241341 1", false);
      expect(decoded).to.equal(false);
    });
  });
});
