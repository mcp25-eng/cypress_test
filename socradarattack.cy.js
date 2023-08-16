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

const usedUrl = 'https://socradar.io/labs/external-attack-surface/'

context('Socradar', () => {

  beforeEach(() => {
     cy.visit(usedUrl)
    })


    it('Butona Tıklama Olmayan Domain', () => {
      cy.get('#domainInput').type('adaffffffffffff', {delay: 100})
      cy.get('#domainInput').type('{enter}')
      cy.get('.error-field').should('have.text', 'Please enter a valid domain !')    
    })

    it('Buton Tıklama Olan Domain ', () => {
      cy.get('#domainInput').type('akbank.com', {delay: 100})
      cy.get('#domainInput').type('{enter}')
     // for (let i = 0; i < document.getElementsByClassName('labs-card-status').length; i++) { /// sayfay değer verme yani sayfayı kontol etme 
      //  cy.get(document.getElementsByClassName('labs-card-status')[i].classList.contains('completed'))}
      cy.get('.labs-card-status').each(($el) => {
        cy.wrap($el).should('contain.text', 'Completed')
        
    })
    })
    console.log('sonuc basarili')

    after(async () => {
      window.open(`mailto:miktatpasin77@gmail.com?subject=TestSonuclari&body=${JSON.stringify(results)}`);
})
})

  // 30 satıda kodları denedikten sonra sayfa yükleniyormu diyre denemim cy.wrap o yüzden kullandım
  // delay kodun içersinede kullanılabilir 
    