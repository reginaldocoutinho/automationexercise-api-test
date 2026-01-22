it('Get all products', () => {
  // Faz a requisição
  cy.request({
    method: 'GET',
    url: 'https://automationexercise.com/api/productsList',
  }).then((response) => {
    // Valida o Status Code(Sucesso)
    expect(response.status).to.eq(200);
    
    // Valida se o corpo da resposta não está vazio.
    expect(response.body).to.not.be.null;
  });
});