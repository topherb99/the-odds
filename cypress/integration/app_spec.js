describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('/')
    cy.get('h1').contains('Hello world')
  })
})
