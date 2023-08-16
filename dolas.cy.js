// <reference types="cypress" />

import { createTransport } from 'nodemailer'
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
const usedUrl = 'https://dolasapp.com/' 
context('dolas', () => {
    beforeEach(() => {
       cy.visit(usedUrl) 
      
    })
    it('sayfayı ziayaret etme ', () => {
        cy.get('#navigation > :nth-child(5) > a').click()
        cy.get('.button').click()


})
})