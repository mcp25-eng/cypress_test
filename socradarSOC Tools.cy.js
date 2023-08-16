// <reference types="cypress" />
import { createTransport } from 'nodemailer'

const results = []
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log(runnable)
  const result = {
    title: runnable.title,
    result: runnable.state ? runnable.state : 'passed'
  }
  results.push(result)
    return false
})
const usedUrl = 'https://socradar.io/labs/soc-tools'

context('Socradar', () => {

    beforeEach(() => {
       cy.visit(usedUrl)
      })
    it('Butona Tıklama Olmayan Domain', () => {
      cy.get('#socToolsInput').type('ada')
      cy.get('#socToolsSubmit').click()
      cy.get('#inputErr').should('have.text', 'Please enter a valid domain, ip address or hash!')    
    })

    it('Buton Tıklama Olan Domain ', () => {
      cy.get('#socToolsInput').type('akbank.com')
      cy.get('#socToolsSubmit').click()
     // for (let i = 0; i < document.getElementsByClassName('labs-card-status').length; i++) { /// sayfay değer verme yani sayfayı kontol etme 
       // cy.get(document.getElementsByClassName('labs-card-status')[i].classList.contains('completed').should('exist'))
       cy.get('.labs-card-status').each(($el) => {
        cy.wrap($el).should('contain.text', 'Completed')
    })
      })
    })
   // console.log('sonuc basarili')

  //  after(async () => {
    //  window.open(`mailto:miktatpasin77@gmail.com?subject=TestSonuclari&body=${JSON.stringify(results)}`);
//})

    





    


