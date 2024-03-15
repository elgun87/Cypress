describe('End to end testing',() =>{
    //navigate the web page
    beforeEach('Navigate to web page',()=>{
        cy.clearCookies();
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    });

    //select Cashews from product
    it('Select item and verify it in cart',()=>{
        
        //search ca
        cy.get('input.search-keyword').type('ca');

        //click search button
        cy.get('button.search-button').click();

        //verify 4 product is displayed
        cy.get('div.product:visible').should('have.length',4);

        //get cashews from product list
        cy.get('div.product').each((item) =>{
            if(item.text().includes('Cashews')){
                cy.wrap(item).contains('ADD TO CART').click();
            };
        });

        //click cart button
        cy.get('a.cart-icon').click();

        //assert that cart is displayed with chai assertion
        cy.get('div.cart-preview.active').as('cart');
        cy.get('@cart').should('have.css','display','block');

        //assert that cart is displayed with then()
        cy.get('div.cart-preview.active').then((cart) =>{
            expect(cart).to.have.css('display','block');
        });

        //click procceed button
        cy.get('@cart').find('button').contains('PROCEED TO CHECKOUT').click();

        //click place order button
        cy.get('button').contains('Place Order').click();
    });
})