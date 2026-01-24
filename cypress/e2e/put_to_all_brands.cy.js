describe('Testes de API - Automation Exercise', () => {
  it('Deve validar que o método PUT não é suportado no endpoint brandsList', () => {
    cy.request({
      method: 'PUT',
      url: 'https://automationexercise.com',
      failOnStatusCode: false
    }).then((response) => {
      // O Cypress recebeu 200 na camada HTTP, então validamos o corpo da resposta
      // que contém o código 405 e a mensagem específica
      expect(response.body.responseCode).to.eq(405);
      expect(response.body.message).to.eq('This request method is not supported.');
    });
  });
});
