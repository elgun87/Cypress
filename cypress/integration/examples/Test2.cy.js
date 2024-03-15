/// <reference types="Cypress" />

const { wrap } = require("lodash");

describe('My Own Test',()=>{

    it('Test 1',()=>{

        cy.visit('https://rahulshettyacademy.com/');

        cy.get('div.header-upper nav').find('li').should('have.length',12);

        cy.get('div.header-upper nav').find('li').each((elem,index,list) =>{
            if(elem.text().includes('Practice')){
                cy.log('Wooden Spoon');
                cy.wrap(elem).click();
            };
        });

        cy.get("input#name").type("elgun");

        cy.get("input#email").type("elgun105@gmail.com");

        cy.get('button#form-submit').click();
    });
    
});