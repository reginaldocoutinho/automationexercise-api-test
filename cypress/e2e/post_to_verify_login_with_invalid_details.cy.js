it('Login com credências inválidas', () => {
    cy.request({
        method:'POST',
        url:'https://automationexercise.com/api/verifyLogin',
        form:true,
        body:{email:'testeerro@outlook.com', password:'testeerro'}
    }).then((response) => {
        const body = JSON.parse(response.body)
        if(body.message) {
            expect(body.message).to.eq('User not found!')
            expect(body.responseCode).to.eq(404)
        }
    })
})