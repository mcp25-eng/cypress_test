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

const usedUrl = 'https://socradar.io/labs/accountbreach/'


context('Socradar', () => {

  beforeEach(() => {
    cy.visit(usedUrl)
  })


  it('Butona Tıklama Olmayan Domain', () => {
    cy.get('#domainInput').type('ada', {delay: 100})
    cy.get('#domainInput').type('{enter}')
    cy.get('.error-field').should('have.text', 'Please enter a valid domain or email address!')    
  })

  it('Buton Tıklama Olan Domain ', () => {
    cy.get('#domainInput').type('akbank.com', {delay: 100})
    cy.get('#domainInput').type('{enter}')
    cy.get('.main-content').each(($el) => {
    cy.contains('Breach Statistics').should('exist')
      cy.contains('Account Breach Details').should('exist')
      cy.wait(4000)
      cy.get('.request-button').last().click({force: true})
    })
  })

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

   ///window.open(`mailto:levent.engin@socradar.io?subject=TestSonuclari&body=${JSON.stringify(results)}`);
    module.exports = defineConfig({
      e2e: {
        baseUrl: 'https://socradar.io/labs/accountbreach/'
      }
    })
     const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('ptpOp3BHTJmvmum8u3iq2Q');
    const msg = {
      to: 'levent.engin@socradar.io',
      from: 'miktatpasin77@gmail.com', // Use the email address or domain you verified above
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
   //ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
      SendGrid = new SendGrid('ptpOp3BHTJmvmum8u3iq2Q');
    }
  }
})();
});
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



// task 10 geçir 