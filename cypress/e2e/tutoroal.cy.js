describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://opexa-user-client-staging-833597492714.us-central1.run.app/')

      /* ==== Generated with Cypress Studio ==== */
      cy.get('.gap-5 > [href="/about"]').click();
      cy.get('.w-20').click();
      cy.get('.gap-5 > [href="/contact"]').click();
      cy.get('.gap-3 > [href="/auth/login"] > .inline-flex').click();
      cy.get('.gap-3 > [href="/auth/register"] > .inline-flex').click();
      cy.get('.md\\:flex-row > .flex-col > .max-w-fit > .items-center').click();
      cy.get('.flex-col.items-center > :nth-child(1) > .flex') .should('be.visible').clear();

      cy.get('.space-y-5 > .flex > .inline-flex').click();
      cy.get('.bg-\\[\\#fafafa\\] > .md\\:flex-row > :nth-child(1) > .space-y-6 > .flex > .inline-flex').click();
      cy.get(':nth-child(7) > .md\\:flex-row > :nth-child(1) > .space-y-6 > .flex > .inline-flex').click();
      cy.get(':nth-child(8) > .md\\:flex-row > :nth-child(1) > .space-y-6 > .flex > .inline-flex').click();
      cy.get('.relative.px-5 > .grid > :nth-child(1) > .flex-col > .flex > .inline-flex').click();
      cy.get('.top-4').click();
      cy.get('.top-4').should('be.visible');
      cy.get('.gap-6 > .flex-col > .flex > .inline-flex').click();
      cy.get('.hidden > :nth-child(1) > a').should('be.visible').click();

      cy.get('.flex > [href="/contact"]').click();
      cy.get('[href="/faqs"]').click();
      cy.get(':nth-child(4) > .flex > [href="/policy"]').click();
      cy.get(':nth-child(4) > .flex > [href="/terms"]').click();
      cy.get('[href="/payment-policy"]').click();
      cy.get('.hidden > .inline-flex').click();
      cy.get('[href="/terms"] > .md\\:border-r').click();
      cy.get('[href="/policy"] > .text-white').click();
      /* ==== End Cypress Studio ==== */
    })
  })