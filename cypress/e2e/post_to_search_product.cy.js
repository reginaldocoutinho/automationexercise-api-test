it.only('Post_to_search_product', () =>{
    cy.request({
        method:'POST',
        url:'https://automationexercise.com/api/searchProduct',
        form:true,
        body:{search_product:'tshirt'}
    }).then((response)=> {
        //Verifica o status code é o esperado
        const body = JSON.parse(response.body)
        if(body.message) {
            expect(body.message).to.eq('Searched products list')
        }
        console.log('Response body:', body)
    })
});
