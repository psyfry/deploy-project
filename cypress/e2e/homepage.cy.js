// const cy = require('cypress')
describe('Hompage shows', () => {
  it('shows navbar logo text', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('CROWDREF')
  })
  it('shows login Button', () => {
    cy.visit('http://localhost:3030')
    cy.contains('Login')
  })
})