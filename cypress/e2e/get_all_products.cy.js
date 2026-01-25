it('Valida método GET, retorno de lista de produtos', () => {
  // Faz a requisição
  cy.request({
    method: 'GET',
    url: 'https://automationexercise.com/api/productsList',
  }).then((response) => {
    // Valida o Status Code(Sucesso)
    expect(response.status).to.eq(200);
    
    // Valida se o corpo da resposta não está vazio.
    expect(response.body).to.not.be.null;
    console.log(response.body);
  });
});