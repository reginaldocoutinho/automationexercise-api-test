it('POST_To_All_Products_List', () =>{
    // Faz a requisição
    cy.request({
        method:'POST',
        url:'https://automationexercise.com/api/productsList',
        failOnStatusCode: false,//evita que o cypress falhe antes do teste
        //corpo da requisição com as credências de um usuário cadastrado.
        body:{email: 'teste3@outlook.com', password:'teste'}
    }).then((response) => {
        //Verifica o status code é o esperado
        expect(response.status).to.eq(200);
        //Verifica se a contem a mensagem no corpo da requisição
        expect(response.body.responseCode).to.eq(405);
        expect(response.body.message).to.eq("This request method is not supported.");
        console.log(response.body);
    });
});