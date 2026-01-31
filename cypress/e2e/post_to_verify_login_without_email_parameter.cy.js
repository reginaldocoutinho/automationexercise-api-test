it('Valida acesso passando apenas a senha', () => {
    cy.request({
        method:'POST',
        url:'https://automationexercise.com/api/verifyLogin',
        form:true,
        body:{password:'teste'}
    }).then((response) => {
        const body = JSON.parse(response.body)
        if(body.message) {
            expect(body.message).to.eq('Bad request, email or password parameter is missing in POST request.')
            expect(body.responseCode).to.eq(400)
        }
        console.log('Response body:', body)
    })
})