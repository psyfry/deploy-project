// const cy = require('cypress')
describe('Hompage shows', () => {
  it('shows navbar logo text', () => {
    cy.visit('localhost:3030')
    cy.contains('crowdref')
  })
  it('shows login Button', () => {
    cy.visit('localhost:3030')
    cy.contains('login')
  })
})