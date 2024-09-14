describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://jnvjzs5t-5001.inc1.devtunnels.ms')
    cy.get('#continue').click()
  })
})