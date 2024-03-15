/// <reference types="Cypress" /> 

/**
 * Cypress does not support mouse over
 * we use show() method from Jqeury to display hidden elements and it will look only hidden element in first parent block
 */

describe('Web Tables handle',()=>{

    // get all tables second columns value and store inside the list
    it.skip('Mouse Over',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','top');
    });

    it('Mouse Over forcing',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.contains('Top').click({force: true});
        cy.url().should('include','top');
    });
});