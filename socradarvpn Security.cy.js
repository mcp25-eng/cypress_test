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

const usedUrl = 'https://socradar.io/labs/vpnradar/'

context('Socradar', () => {

  beforeEach(() => {
     cy.visit(usedUrl)
    })


    it('Butona Tıklama Olmayan Domain', () => {
      cy.get('#domainInput').type('ada', {delay: 100})
      cy.get('#domainInput').type('{enter}')
      cy.get('.error-field').should('have.text', 'Please enter a valid address')    
    })

    it('Buton Tıklama Olan Domain ', () => {
      cy.get('#domainInput').type('akbank.com', {delay: 100})
      cy.get('#domainInput').type('{enter}')
    })
  })
//sabit bir değişken atıyıp kodda düzletme olablir 9.satıdaki kod gibiiiiii
console.log('sonuc basarili')

  after(async () => {

    // let body = `
    // <p><strong>Results</strong></p>
    // <p>&nbsp;</p>
    // <ul>
    
    // `

    // for(let i = 0; i < results.length; i++) {
    //   if(i === results.length - 1) {
    //     body += `<li><strong>Sonuc ${i + 1}</strong><strong>- Baslik:&nbsp; ${results[i].title}</strong><strong>- Sonuc: <span style="color: $">${results[i].result}</span></strong></li>
    //     </ul>`
    //   } else {
    //     body += `<li><strong>Sonuc ${i + 1}</strong><strong>- Baslik:&nbsp; ${results[i].title}</strong><strong>- Sonuc: <span style="color: $">${results[i].result}</span></strong></li>
    //     `
    //   }
    // }

    window.open(`mailto:miktatpasin77@gmail.com?subject=TestSonuclari&body=${JSON.stringify(results)}`);

    // const transporter = createTransport({
    //   host: "smtp-mail.outlook.com", // hostname
    //   // secureConnection: false, // TLS requires secureConnection to be false
    //   port: 587, // port for secure SMTP
    //   auth: {
    //       user: "cansocradar@outlook.com",
    //       pass: "Miktat7725"
    //   },
    //   // tls: {
    //   //     ciphers:'SSLv3'
    //   // }
    // })

    // const info = await transporter.sendMail({
    //   from: '"can " cansocradar@outlook.com',
    //   to: 'miktatpasin77@gmail.com', // list of receivers
    //   subject: 'Hello ✔', // Subject line
    //   text: 'deneme', // plain text body
    //   html: '<b>Hello world?</b>', // html body
    // })
  
    // console.log('Message sent: %s', info.messageId)
  })
  


// tpre=giriş ksımı olarak düşünebilirim bir nevi clack yerinede kullanılabilir üsteki görrevi butono clesklememk 
// contanies başlıkları belirlemek için  kod h1 şeklinnde gözüktü 
//should şart içinde ne yazması grektği yanlış yazıldığı taktiirde hata veriri 
// wait bekleme verdi sayfaya girerken değilde yapılan işlemi daha ayrıntılı göremk için yaptuım