it('Valida que o método PUT não é suportado no endpoint brandsList', () => {
    cy.request({
      method: 'PUT',
      form:true,
      url: 'https://automationexercise.com/api/brandsList',
      failOnStatusCode:false
    }).then((response)=> {
      const body = JSON.parse(response.body)

      if(body.responseCode){
            expect(body.responseCode).to.eq(405);
      }
      
      if(body.message){
            expect(body.message).to.eq('This request method is not supported.');
      }
      console.log('Response body:', body)    
    });
    
});
