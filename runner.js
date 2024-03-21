const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImJmNzgxMjYyLTE1MjktNGMzOS1hY2Y5LTBkMjllYzJiN2Q1YS0xNzExMDQ1NTIyNjU0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMmU1YWYwODItN2YwNS00ODAyLWJiOGYtYmY3ZjNiYjgxZDY5IiwidHlwZSI6InQifQ.z8Cjo6Rp3w8JUss6Z2hI46bUAKmau6mVOQ6a-7DHX8k'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
