const assert = require("assert")
const calculateNumber = require("./0-calcul")

describe("calculateNumber", () => {
  it("should return 4 when inputs are 1 and 3", () => {
    assert.strictEqual(calculateNumber(1, 3), 4)
  })

  it("should return 5 when inputs are 1 and 3.7", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5)
  })

  it("should return 5 when inputs are 1.2 and 3.7", () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5)
  })

  it("should return 6 when inputs are 1.5 and 3.7", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6)
  })

  it("should handle negative numbers", () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5)
  })

  it("should handle zero", () => {
    assert.strictEqual(calculateNumber(0, 0), 0)
  })

  it("should round 0.5 up", () => {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2)
  })

  it("should round -0.5 down", () => {
    assert.strictEqual(calculateNumber(-0.5, -0.5), -2)
  })
})
