it('Login com usuário válido', () =>{
    cy.request({
        method:'POST',
        url:'https://automationexercise.com/api/verifyLogin',
        form:true,
        body:{email:'teste3@outlook.com', password:'teste'}
    }).then((response) => {
        const body = JSON.parse(response.body)
        if(body.message) {
            expect(body.message).to.eq('User exists!')
        }
        console.log('Response body:', body)
    })
});