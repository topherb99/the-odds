describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('/')
    cy.get('h1').contains('TheOdds')
  })
})

describe('Tables', function() {
  it('Has table headers', function() {
    cy.visit('/')
    cy.get('th').contains('League')
  })
})
