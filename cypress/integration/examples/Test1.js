
describe('My First Test Suite', () =>{

    it('My First Test case',() => {
        //navigate to webpage
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        //type 'ca' in search box
        cy.get('.search-keyword').type('ca');

        //click submit button
        cy.get('button[type="submit"]').click();

        //verify the count of displayed products
        cy.get('.product:visible').should('have.length',4);

        //parent child 
        cy.get('.products').find('.product').should('have.length',4);

        //click second product
        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        //get all the product , get text and add given product

        cy.get('.products').find('.product').each((element,index,list) => {
            const textVeg = element.find('h4.product-name').text();
            if(textVeg.includes('Cashews')){
                cy.wrap(element).find('button').click();
            }
        });
        //manually handling promise
        /**
         * const logoText = cy.get('.brand.greenLogo')
         * cy.log(logoText.text());
         * 
         * 
         *  const logoText = cy.get('.brand.greenLogo').text();
         * cy.log(logoText);
         */
        // this is to print in logs
        cy.get('.brand.greenLogo').then((logoText)=>{
            cy.log(logoText.text());
        });

        //assert if logo text is correctly displayed
        cy.get('.brand.greenLogo').should('have.text','GREENKART');

    });
});

