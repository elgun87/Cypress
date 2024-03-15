/// <reference types="Cypress" /> 
let rows = [];
describe('Web Tables handle',()=>{

    // get all tables second columns value and store inside the list
    it.skip('Navigate to web page',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('table[name="courses"] tr').each((row)=>{
            let content = row.find('td').eq(1).text();
            rows.push(content);
        });
    });

    it('Navigate to web page',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each((el,index,list)=>{
            const text = el.text();
            if(text.includes('Python')){
                /**
                 * next() we can use after get() to move next element
                 */
                cy.get('tr td:nth-child(2)').eq(index).next().then((el)=>{
                    cy.log(el.text());
                });

            }
        })
    });


});