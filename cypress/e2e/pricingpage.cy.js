describe('Private Jet Charter Cost Estimator', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    it('Pricing Page: Response Code Verification', () => {
      cy.request('GET', 'https://www.stratosjets.com/why-stratos/pricing/?utm_source=test').then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('Should navigate to the homepage when breadcrumb is clicked', () => {
      cy.visit('https://www.stratosjets.com/why-stratos/pricing/?utm_source=test');
      cy.viewport(1920, 1080)
      cy.wait(2000)
      cy.get('img[src="https://www.stratosjets.com/wp-content/themes/stratos/images/home-grey.svg"]').click({force:true}); 
      cy.url().should('eq', 'https://www.stratosjets.com/'); 
    });
  
    it('Pricing Page: Form Test', () => {
      cy.visit('https://www.stratosjets.com/why-stratos/pricing/?utm_source=test')
      cy.viewport(1920, 1080)
      const currentDate = new Date();
      const targetDate = new Date(currentDate);
      targetDate.setDate(currentDate.getDate() + 3);
      const targetDateString = targetDate.toISOString().slice(0, 10);
      cy.clearCookies()
      cy.wait(2000)
  
  
  
      cy.get('input#arrival' , { timeout: 9000 }).eq(0).trigger("click")
      cy.get('input#arrival' , { timeout: 9000 }).eq(0).trigger('focus')
      cy.get('input#arrival' , { timeout: 9000 }).eq(0).type('TEB', {delay: 5000})
      cy.get('input#arrival' , { timeout: 9000 }).eq(0).trigger('change')

      cy.wait(1000)
      cy.get('.bc-menu-arrival_id.list-group').then(($el) => {
        if(!Cypress.dom.isVisible($el)){
            console.log('i need to wait')
            cy.wait(6000)
            cy.get('input#arrival' , { timeout: 9000 }).clear()
            cy.get('input#arrival' , { timeout: 9000 }).eq(0).trigger("click")
            cy.get('input#arrival' , { timeout: 9000 }).eq(0).trigger('focus')
            cy.get('input#arrival' , { timeout: 9000 }).eq(0).type('TEB', {delay: 5000})
            cy.get('input#arrival' , { timeout: 9000 }).eq(0).trigger('change')
        }
      })
      cy.get('.bc-menu-arrival_id.list-group .list-group-item', { timeout: 9000 }).eq(0).find('span.autocomplete-airport-name').eq(0).trigger("click")
  
      cy.get('input[name="departure"]').eq(0).clear()
      cy.get('input[name="departure"]', { timeout: 9000 }).eq(0).trigger("click")
      cy.get('input[name="departure"]', { timeout: 9000 }).eq(0).trigger('focus')
      cy.get('input[name="departure"]', { timeout: 9000 }).eq(0).type('VNY', {delay: 5000})
      cy.get('input[name="departure"]', { timeout: 9000 }).eq(0).trigger("change")
      
      cy.get('.bc-menu-departure_id.list-group').then(($el) => {
        if(!Cypress.dom.isVisible($el)){
          console.log('i need to wait')
          cy.wait(6000)
          cy.get('input[name="departure"]').eq(0).trigger("click").trigger('focus').type('VNY', {delay: 5000})
        }
      })
      cy.get('.bc-menu-departure_id.list-group .list-group-item', { timeout: 9000 }).eq(0).find('span.autocomplete-airport-name').eq(0).trigger("click")
  
     
      cy.get('input#departure_dateformid').click();
      cy.get('#ui-datepicker-div').contains(targetDate.getDate()).click();
  
      cy.get('#quote_submit').click({force:true})
      cy.wait(4000)
      cy.get('input#main_form_first_name').type('IBR')
      cy.get('input#main_form_last_name').type('LLC')
      cy.get('input#main_form_email').type('ibrllc+formtest@gmail.com')
      cy.get('input#main_form_phone').type('+17183698521')
      cy.get('input#main_form_message').type('TEST')
      cy.wait(3000)
      cy.get('button#main_submit').click();
      cy.get('div[id="content"] h1').should('contain', "Thank you for your request IBR LLC")
  
  
    });
  
  })