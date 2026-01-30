it('Valida se o método POST não retorna se não existir parametros definidos', () => {
    cy.request({
        method:'POST',
        url:'https://automationexercise.com/api/searchProduct'
    }).then((response) => {
        const body = JSON.parse(response.body)
        if(body.message) {
            expect(body.message).to.eq('Bad request, search_product parameter is missing in POST request.')
            expect(body.responseCode).to.eq(400);
        }
        console.log('Response body:', body)
    })
})