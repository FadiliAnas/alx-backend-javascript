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
})

describe("/available_payments endpoint", () => {
  const url = "http://localhost:7865/available_payments"

  it("should return correct status code", (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  it("should return correct payment methods object", (done) => {
    request.get(url, (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      }
      expect(JSON.parse(body)).to.deep.equal(expectedResponse)
      done()
    })
  })
})

describe("/login endpoint", () => {
  const url = "http://localhost:7865/login"

  it("should return correct status code", (done) => {
    const options = {
      url: url,
      method: "POST",
      json: { userName: "Betty" },
      headers: { "Content-Type": "application/json" },
    }

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  it("should return welcome message with username", (done) => {
    const options = {
      url: url,
      method: "POST",
      json: { userName: "Betty" },
      headers: { "Content-Type": "application/json" },
    }

    request(options, (error, response, body) => {
      expect(body).to.equal("Welcome Betty")
      done()
    })
  })
})
