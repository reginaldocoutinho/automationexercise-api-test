it('Valida o método DELETE no login site', () => {
    cy.request({
        method:'DELETE',
        url:'https://automationexercise.com/api/verifyLogin'  
    })
    .then((response) => {
         const body = JSON.parse(response.body)
        if(body.message) {
            expect(body.message).to.eq('This request method is not supported.')
            expect(body.responseCode).to.eq(405)
        }  
    })

})
