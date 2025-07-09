const { expect } = require("chai")
const calculateNumber = require("./2-calcul_chai")

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return 6 when inputs are 1.4 and 4.5", () => {
      expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6)
    })

    it("should return 0 when inputs are 0.1 and -0.1", () => {
      expect(calculateNumber("SUM", 0.1, -0.1)).to.equal(0)
    })
  })

  describe("SUBTRACT", () => {
    it("should return -4 when inputs are 1.4 and 4.5", () => {
      expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4)
    })

    it("should return 0 when inputs are 1.4 and 1.4", () => {
      expect(calculateNumber("SUBTRACT", 1.4, 1.4)).to.equal(0)
    })
  })

  describe("DIVIDE", () => {
    it("should return 0.2 when inputs are 1.4 and 4.5", () => {
      expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2)
    })

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error")
    })

    it('should return "Error" when dividing by 0.2 (rounds to 0)', () => {
      expect(calculateNumber("DIVIDE", 1.4, 0.2)).to.equal("Error")
    })
  })
})
