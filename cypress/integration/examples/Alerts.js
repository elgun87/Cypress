/// <reference types="Cypress" />

describe('Drop Downs',()=>{
    beforeEach(()=>{
         //visit web page
         cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
    it('Alerts',()=>{
        // select by value using select and assert
        cy.get('input[name="enter-name"]').type('Elgun');
        cy.get('#alertbtn').click();

        /**
         * Cypress auto accepting alert
         * Cypress has capability of fireing browser events.
         * we can triger window.alert() to get the text
         * cy.on() will help to triger any event
         * whe fire alert event cypress will capture alert and browser capture its as string
         */
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello Elgun, share this practice page and share your knowledge');
        });

    });

    it('Confirm',()=>{
        // select by value using select and assert
        cy.get('input[name="enter-name"]').type('Elgun');
        cy.get('#confirmbtn').click();
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello Elgun, Are you sure you want to confirm?');
        });

        /**
         * for confirm event we can use window:confirm 
         */

        //Hello Elgun, Are you sure you want to confirm?

    });
});