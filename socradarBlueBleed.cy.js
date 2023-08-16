// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
const usedUrl = 'https://socradar.io/labs/bluebleed/' 
context('Socradar', () => {
    beforeEach(() => {
       cy.visit(usedUrl) 
      })
      it('false Domain', () => {
        cy.get('#domainInput').type('adaffffffffffff', {delay: 100})
        cy.get('#domainInput').type('{enter}')
        cy.wait(4000)
       cy.get('.error-field').should('have.text', 'Please enter a valid domain')    
      })
      it('True Domain ', () => {
        cy.get('#domainInput').type('akbank.com', {delay: 100})
        cy.get('#domainInput').type('{enter}')
        cy.wait(4000)
        cy.get('.bluebleed-result')
        cy.get('.success-result > .go-to-freemium').click()
        cy.wait(4000)
        cy.get('.c-modal-content')
      
      })
      })
      
    
  
   

  