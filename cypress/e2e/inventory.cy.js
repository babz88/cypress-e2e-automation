describe('Inventory Flow', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Add product to cart', () => {
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})
