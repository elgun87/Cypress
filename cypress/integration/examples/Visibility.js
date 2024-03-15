/// <reference types="Cypress" />
/**
 * Verify is box visible or not
 */
describe("Visibility of element",()=>{
    beforeEach(()=>{
        //visit web page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
   });

   it('Validate of element visibility',()=>{
    cy.get('input[name="show-hide"]').should('be.visible');
   });

   it('Validate of element unvisibility',()=>{
    cy.get('#hide-textbox').click();
    cy.get('input[name="show-hide"]').should('not.be.visible');
   });

   //or can use should('have.css','display','block');
})