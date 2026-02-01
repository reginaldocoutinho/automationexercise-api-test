it('Deleta uma conta de usuário', () => {
    cy.request({
        method:'DELETE',
        url:'https://automationexercise.com/api/deleteAccount',
        form:true,
        body:{email:'teste12@outlook.com', password:'teste'}
    }).then((response) => {
        const body = JSON.parse(response.body)

        if(body.message === 'Account deleted!'){ 
            expect(body.message).to.eq('Account deleted!')
            expect(body.responseCode).to.eq(200)
        }else if(body.message === 'Account not found!'){
            expect(body.message).to.eq('Account not found!')
            expect(body.responseCode).to.eq(404)
        }   

        
        
    })
})