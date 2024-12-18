describe('template spec', () => {

  /* landing page clicks==== Test Created with Cypress Studio ==== */
  it('regtech log', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://beta.regtech365.com/');
    cy.get('#standardsDropdown').click();
    cy.get('.hero-content > :nth-child(3)').click({force:true});
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get('.btn > svg').click();
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get(':nth-child(1) > .dropdown-item').click();
    cy.get('.divides > .btn > svg').click();
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get(':nth-child(2) > .dropdown-item').click();
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get(':nth-child(3) > .dropdown-item').click();
    cy.get(':nth-child(1) > .nav-link').click();
    cy.get('.hero-content > :nth-child(3) > .btn-primary').click();
    cy.get('.btn > svg').click();
    cy.get('.btn-outline-secondary').click();
    cy.get('.logo-light').click();
    //cy.get(':nth-child(1) > .text-decoration-none > .standard-card-height > .card-img').click();
    
    //cy.get(':nth-child(3) > .text-decoration-none > .standard-card-height > .card-img').click();
    //cy.get(':nth-child(2) > .text-decoration-none > .standard-card-height > .card-img').click();
    cy.get('#scrollingElement').click();
    cy.get('.col-md-10 > .btn').click({force:true});
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(1) > a').click();
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(3) > a').click();
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(4) > a').click();
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(5) > a').click();
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(6) > a').click();
    cy.get('.ms-4').click();
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(6) > a').click();
    cy.get('.logo-light').click();
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(7) > a').click();
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(1) > a').click();
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(2)').click();
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(3) > a').click();
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(4) > a').click();
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(5) > a').click();
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(6) > a').click();
    cy.get('.list-unstyled > :nth-child(11) > a').click();
    /* ==== End Cypress Studio ==== */
  });

  it('passes', () => {
    cy.visit('https://beta.regtech365.com/')
    /*login to client dasboard to view side nav options* ==== Generated with Cypress Studio ==== */
    cy.get('[href="./auth/login.php"] > .btn').click();
    cy.get('#email-address').clear('rofyobopsu@gufum.com');
    cy.get('#email-address').type('rofyobopsu@gufum.com');
    cy.get('#password').clear('12345678Ab#');
    cy.get('#password').type('12345678Ab#');
    cy.get(':nth-child(3) > .btn').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get('.nk-menu > :nth-child(2) > .nk-menu-link > .nk-menu-text').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get('.nk-menu-toggle > .nk-menu-text').click();
    cy.get('.nk-menu-sub > :nth-child(1) > .nk-menu-link > .nk-menu-text').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get(':nth-child(4) > .nk-menu-link').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get('.nk-header-brand > .logo-link > .logo-dark').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get(':nth-child(6) > .nk-menu-link > .nk-menu-text').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get(':nth-child(7) > .nk-menu-link > .nk-menu-text').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get(':nth-child(8) > .nk-menu-link > .nk-menu-text').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get(':nth-child(9) > .nk-menu-link').click();
    cy.get('.nk-nav-toggle > .icon').click();
    /* ==== End Cypress Studio ==== */
  })



  it.only('passes', () => {
      cy.visit('https://beta.regtech365.com/')
    /* to do self assessment for the first time, submit and see results==== Generated with Cypress Studio ==== */
    cy.get('[href="./auth/login.php"] > .btn')
    cy.get('#email-address').clear('rofyobopsu@gufum.com');
    cy.get('#email-address').type('rofyobopsu@gufum.com');
    cy.get('#password').clear('12345678Ab#');
    cy.get('#password').type('12345678Ab#');
    cy.get(':nth-child(3) > .btn').click();


    cy.get('.nk-nav-toggle > .icon').click();
    cy.get('.nk-menu > :nth-child(2) > .nk-menu-link > .nk-menu-text').click();


    cy.get('.nk-menu-sub > :nth-child(1) > .nk-menu-link').click();
    cy.get(':nth-child(1) > :nth-child(5) > .btn > .btn-text-a').click();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio20_0').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio22_0').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio23_0').check();
    cy.get(':nth-child(3) > .custom-control-label').click();
    cy.get('#customRadio25_2').check();
    cy.get(':nth-child(2) > .custom-control-label').click();
    cy.get('#customRadio26_1').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio27_0').check();
    cy.get(':nth-child(2) > .custom-control-label').click();
    cy.get('#customRadio29_1').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio30_0').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio32_0').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio34_0').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio36_0').check();
    cy.get('#showSubmitButton > .btn').click();
    cy.get('.swal-footer').click();
    cy.get(':nth-child(2) > .swal-button').click();
    cy.get('.swal-button').click();
    cy.get('.px-5.mb-5 > .btn').click();
    /* ==== End Cypress Studio ==== */
  })

  it('regtech log', function() {
    /* to login and continue self assesment==== Generated with Cypress Studio ==== */
    cy.visit('https://beta.regtech365.com/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="./auth/login.php"] > .btn').click();
    cy.get('#email-address').clear('rofyobopsu@gufum.com');
    cy.get('#email-address').type('rofyobopsu@gufum.com');
    cy.get('#password').clear('12345678Ab#');
    cy.get('#password').type('12345678Ab#');
    cy.get(':nth-child(3) > .btn').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get('.nk-menu > :nth-child(2) > .nk-menu-link > .nk-menu-text').click();
    cy.get('.nk-nav-toggle > .icon').click();
    cy.get('.nk-menu-toggle > .nk-menu-text').click();
    cy.get('.nk-menu-sub > :nth-child(1) > .nk-menu-link > .nk-menu-text').click({force:true});
    cy.get(':nth-child(2) > :nth-child(5) > .btn').click();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio134_1').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio136_1').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio138_1').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio140_1').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio142_1').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio143_0').check();
    cy.get(':nth-child(1) > .custom-control-label').click();
    cy.get('#customRadio145_0').check();
    /* ==== End Cypress Studio ==== */
  })

})