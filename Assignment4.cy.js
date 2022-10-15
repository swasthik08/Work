
describe('Assignment 1', () => {
    it('Task 1 ', () => {
        cy.visit('https://ineuron-courses.vercel.app/login')
        cy.title().should('contain','Courses')
        cy.url().should('contain','login')
    });

    it('Task 2',()=>{
        cy.xpath('//input[@id="email1"]').type('ineuron@ineuron.ai').should('have.value','ineuron@ineuron.ai')
        cy.xpath('//input[@id="password1"]').type('ineuron').should('have.value','ineuron')
        cy.contains('Sign in').click({timeout:4000})
        cy.xpath('//h4[@class="welcomeMessage"]').should('be.visible').should('contain.text','Welcome ')
        cy.contains('Sign out').click()
        cy.get('.header').should('have.text','Sign In')
    })
});


describe('Assignment 1', () => {
    it('Task 3', () => {
        cy.visit('https://ineuron-courses.vercel.app/login')
        cy.contains('Sign in').click()
        cy.get('.errorMessage').should('contain.text','Email and Password is required')
        cy.xpath('//input[@id="email1"]').type('ineuron@ineuron.ai').should('have.value','ineuron@ineuron.ai')
        cy.contains('Sign in').click()
        cy.xpath('//input[@id="email1"]').clear()
        cy.get('.errorMessage').should('contain.text','Password is required')
        cy.xpath('//input[@id="password1"]').type('ineuro').should('have.value','ineuro')
        cy.contains('Sign in').click()
        cy.get('.errorMessage').should('contain.text','Email is required')
        cy.xpath('//input[@id="email1"]').type('ineuron@ineuron.ai')
        cy.contains('Sign in').click()
        cy.get('.errorMessage').should('have.text',"Email and Password Doesn't match")
    });
});