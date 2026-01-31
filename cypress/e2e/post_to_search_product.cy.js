it('Valida que o método POST retornara a lista de produtos filtradas ao passar um parametor', () =>{
    cy.request({
        method:'POST',
        url:'https://automationexercise.com/api/searchProduct',
        form:true,
        body:{search_product:'tshirt'}
    }).then((response)=> {
        //Verifica o status code é o esperado
        const body = JSON.parse(response.body)
        if(body.products) {
            expect(body.products).to.be.an('array')
            expect(body.products.length).to.be.greaterThan(0)
            expect(body.responseCode).to.eq(200)
        }
        console.log('Response body:', body)
    })
});
