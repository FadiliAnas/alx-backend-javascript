const request = require("request")
const { expect } = require("chai")

describe("Index page", () => {
  const url = "http://localhost:7865"

  it("should return correct status code", (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  it("should return correct result", (done) => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal("Welcome to the payment system")
      done()
    })
  })
})

describe("Cart page", () => {
  const baseUrl = "http://localhost:7865"

  it("should return correct status code when :id is a number", (done) => {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  it("should return correct result when :id is a number", (done) => {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(body).to.equal("Payment methods for cart 12")
      done()
    })
  })

  it("should return 404 status code when :id is NOT a number", (done) => {
    request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404)
      done()
    })
  })

  it("should return 404 status code when :id contains letters", (done) => {
    request.get(`${baseUrl}/cart/12ab`, (error, response, body) => {
      expect(response.statusCode).to.equal(404)
      done()
    })
  })
})
