/// <reference types="Cypress" /> 
import 'cypress-iframe'
/**
 * you need install iframe plug in
 * npm install -D cypress-iframe
 */

describe('Handling Frame',()=>{
    it('Frame test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //we need load frame to cypress object
        cy.frameLoaded('#courses-iframe');
        //switch to iframe mode
        cy.iframe().find('a[href*="mentorship"]').eq(0).click();
    });

});