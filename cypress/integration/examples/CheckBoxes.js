//Checkboxes
describe('Select and Validate Checkboxes',()=>{
    it('Visit the webpage',()=>{

        //visit web page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        //NOTE: for behavior assertion we use be
        //select and verify if proper checkbox is selected
        cy.get('#checkBoxOption1').check().should('be.checked')
        .and('have.value','option1');

        //uncheck
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        .and('have.value','option1');

        //select multiple checkobox and verify
        cy.get('input[type="checkbox"]:visible').each((checkBox,index,list)=>{
            const box = `option${++index}`;
            cy.wrap(checkBox).check().should('have.value',box).and('be.checked');
        });

        //unselect multiple checkobox and verify
        cy.get('input[type="checkbox"]:visible').each((checkBox,index,list)=>{
            const box = `option${++index}`;
            cy.wrap(checkBox).uncheck().should('have.value',box).and('not.be.checked');
        });

        //select specifi checkbox
        cy.get('input[type="checkbox"]:visible').eq(1).check();

        cy.get('input[type="checkbox"]:visible').uncheck(['option2']).should('not.be.checked');

        //NOTE: Radio button is same as check
    });
});