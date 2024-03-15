//Asigning an alias for later use
describe('Assigning alias for later use',()=> {
    it('Test- Alias',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ca');

        cy.get('button[type="submit"]').click();

        //assign to value like WebElement in Selenium
        cy.get('.products').as('productLocator');

        cy.get('@productLocator').find('.product').should('have.length',4);

        //to see your console log after the let say clicking some buttons manually resolve it as shown below:
        cy.get('a.cart-icon').click();
        // right now it will not wait for console.log(). Async issue was observed. To handle this issue need to manually resolve it.
        console.log('Clicked cart button'); // check developer tools

        // resolve asyn issue
        cy.get('a.cart-icon').click().then(()=>{
            console.log('Clicked cart button')
        });
    });
})