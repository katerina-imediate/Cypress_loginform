describe('example to-do app', () => {
  
    it('failed login', () => {
     
        cy.visit('https://dev-trackimpact.org/')
        cy.get('button').contains('Login').click()
        cy.wait(3000)
        cy.get('#inputEmail').type('fake@email.com').should('have.value', 'fake@email.com')
        cy.get('#inputPassword').type('fakepassword').should('have.value', 'fakepassword')
        cy.get('button').contains('Sign insignInBtn').click()
        cy.get('.alert-danger').should('contain', 'Incorrect username or password.')
        cy.screenshot('Capturing screenshot after successful execution under screenshots dir')
    })
  
   
})