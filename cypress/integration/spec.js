
describe('All Tests', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('https://e2e-hackernews.herokuapp.com/top')

    cy.title().should('include', 'Vue HN 2.0')
    cy.get('li.news-item').should('have.length.at.least', 2)
    cy.get('a').contains('New').click()
    cy.url().should('contain', '/new')
    cy.get('li.news-item').should('have.length.at.least', 2)
    
    cy.get(".news-list").find(".news-item").should("not.exist");
    cy.get('a').contains('more >').click()
    cy.url().should('contain', '/new/2')
    cy.get('li.news-item').should('have.length.at.least', 2)

    cy.get('nav > a').contains('Jobs').click()
    cy.url().should('contain', '/job')
    cy.get('li.news-item').should('have.length.at.least', 2)
})
})