/// <reference types="Cypress" />

/**
 * 2 Type of drop downs:
 * 1-Static - Select
 * 2-Dynamic 
 */

describe('Drop Downs',()=>{
    beforeEach(()=>{
         //visit web page
         cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
    xit('Select/Static Dropdowns',()=>{
        // select by value using select and assert
        cy.get('select').select('option2').should('have.value','option2');

    });

    it('Dynamic Dropdowns',()=>{
        // select by value using select and assert
        cy.get('input#autocomplete').type('Ind');

        //assert that dymaic dropdown is displayed
        cy.get('#ui-id-1').should('have.css','display','block');
        
        //select specific country
        cy.get('.ui-menu-item-wrapper').each((country)=>{
            if(country.text() === 'India'){
                cy.wrap(country).click();
            };
        });

        //aseert
        cy.get('input#autocomplete').should('have.value','India');
    });
});