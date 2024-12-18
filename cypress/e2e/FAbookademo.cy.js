describe('template spec', () => {
    it('visit farmsagora', function() {
      //clicking actions on the landing page not including book a demo, login and register at the header*/
      cy.visit('https://farmsagora.com/');
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.underline').click();
      cy.get('.space-y-5 > :nth-child(1) > :nth-child(1) > .rounded-lg').clear('G');
      cy.get('.space-y-5 > :nth-child(1) > :nth-child(1) > .rounded-lg').type('Glory');
      cy.get('.space-y-5 > :nth-child(1) > :nth-child(2) > .rounded-lg').clear('A');
      cy.get('.space-y-5 > :nth-child(1) > :nth-child(2) > .rounded-lg').type('Adujah');
      cy.get(':nth-child(2) > :nth-child(1) > .rounded-lg').clear('adujah.glory@opexconsult.co.uk');
      cy.get(':nth-child(2) > :nth-child(1) > .rounded-lg').type('adujah.glory@opexconsult.co.uk');
      cy.get(':nth-child(2) > :nth-child(2) > .rounded-lg').clear('0');
      cy.get(':nth-child(2) > :nth-child(2) > .rounded-lg').type('08052950877');
      cy.get('.space-y-5 > :nth-child(3) > .rounded-lg').clear('Johndoe Mans');
      cy.get('.space-y-5 > :nth-child(3) > .rounded-lg').type('Johndoe Mans');
      cy.get(':nth-child(4) > .rounded-lg').clear('W');
      cy.get(':nth-child(4) > .rounded-lg').clear('I want to know more about FA');
      cy.get(':nth-child(4) > .rounded-lg').type('I want to know more about FA');
      cy.get('#\\[object\\ Object\\]').click();
      cy.get('.gap-y-0\\.5 > :nth-child(32)').click();
      cy.get('.h-\\[700px\\] > :nth-child(10)').click();
      cy.get('.z-0').click();
      cy.get('.z-0').click();
      /* ==== End Cypress Studio ==== */
    })
})