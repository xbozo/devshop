describe('search products', () => {
  it('should be able to search for a products', () => {
    cy.visit('/')

    cy.get('input[name=q]').type('moletom').parent('form').submit()

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom') // q refers to input **name** (which is also the query param)

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit search page without a search query', () => {
    cy.on('uncaught:exception', () => {
      // to treat Next redirect behavior (which Cypress recognizes as an error)
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
