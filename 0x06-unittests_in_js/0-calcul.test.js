const assert = require("assert")
const calculateNumber = require("./0-calcul.js")

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

  it("should handle rounding of 0.5 correctly", () => {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2)
  })

  it("should handle negative numbers", () => {
    assert.strictEqual(calculateNumber(-1.4, -1.6), -3)
  })

  it("should handle zero values", () => {
    assert.strictEqual(calculateNumber(0, 0), 0)
  })

  it("should round 1.4 down to 1", () => {
    assert.strictEqual(calculateNumber(1.4, 0), 1)
  })

  it("should round 1.6 up to 2", () => {
    assert.strictEqual(calculateNumber(1.6, 0), 2)
  })

  it("should handle mixed positive and negative", () => {
    assert.strictEqual(calculateNumber(-1.4, 1.4), 0)
  })

  it("should round -0.5 to 0", () => {
    assert.strictEqual(calculateNumber(-0.5, 0), 0)
  })

  it("should round -1.5 to -1", () => {
    assert.strictEqual(calculateNumber(-1.5, 0), -1)
  })

  it("should handle decimal precision", () => {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0)
  })

  it("should handle large numbers", () => {
    assert.strictEqual(calculateNumber(999.6, 1000.4), 2000)
  })

  it("should round both numbers before adding", () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5)
  })
})
