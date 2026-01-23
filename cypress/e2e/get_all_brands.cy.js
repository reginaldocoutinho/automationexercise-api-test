it('Get_All_Brands_List', () => {
    //Requisição
    cy.request({
        method:'GET',
        url: 'https://automationexercise.com/api/brandsList',
    }).then((response) => {
        //Valida o Status Code(Sucesso)
        expect(response.status).to.eq(200);

        // Valida se o corpo da resposta não está vazio.
        expect(response.body).to.not.be.null;
        console.log(response.body);
    })
})