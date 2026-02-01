it('Retorna os dados de um usuário pelo email', () => {
    cy.request({
        method:'GET',
        url:'https://automationexercise.com/api/getUserDetailByEmail',
        form:true,
        qs:{email:'teste12@outlook.com'}
    }).then((response) => {
        const body = JSON.parse(response.body)
        if(body.user)  {
            expect(body).to.have.property('user');
            expect(body.responseCode).to.eq(200)
        }else if(body.message === 'Account not found with this email, try another email!'){
            expect(body.message).to.eq('Account not found with this email, try another email!')
            expect(body.responseCode).to.eq(404)
        }
        console.log('Response body:', body)
    })
})