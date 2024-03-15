/// <reference types="Cypress" />
describe('Window handle',()=>{
    /**
     * Scope of cypress always will be same tabe you opened first
     * once you opened new tab cypress is not able to switch child window
     * we need to make a trick to make application to open new tab on same browser by removing target attr
     * so we need invove function from jQuery to remove the attribute and then perform click
     */
    it.skip('navigate to web page',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Verification 1 : if you need to verify that url exist just get the href value and asser
        cy.get('#opentab').should('have.attr','href')
        .and('include','https://www.qaclickacademy.com');
    });

    it.skip('removing target attr',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.url().should('include','https://www.qaclickacademy.com/')
    });

    it.skip('Without removing attr',()=>{
        /**
         * we can use prop() from jquery to get href property value and then navigate the page
         */
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then((newTab)=>{
            const hrefTab = newTab.prop('href');
            cy.visit(hrefTab);
        });

        // then if we want to go back to previous page
        cy.go('back')
    });

    it('navigate to web page',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Verification 1 : if you need to verify that url exist just get the href value and asser
        cy.get('#opentab').invoke('removeAttr','target').click();
        //if you want to validation on the current page use cy.origin()
        cy.origin('https://www.qaclickacademy.com',()=>{
            
        });
    });
});