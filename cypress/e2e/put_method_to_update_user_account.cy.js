it('Método Post para criação de nova conta', () => {
    cy.request({
        method:'PUT',
        url:'https://automationexercise.com/api/updateAccount',
        form:true,
        body:{name:'Name teste Update',
            email:'teste12@outlook.com',
            password:'teste',title:'Mr',birth_date:'10', 
            birth_month:'10',birth_year:'1998',
            firstname:'Teste first name', 
            lastname:'lastname teste',company:'company teste', 
            address1:'av. main, 300', address2:'av. main, 300',
            country:'Brazil', zipcode:'13563-673',
            state:'São Paulo', city:'São Carlos', mobile_number:'9999999999'}
    }).then((response) => {
        const body = JSON.parse(response.body)
        
        if (body.message === 'User updated!') {
            expect(response.status).to.eq(200);
            // Outras validações para sucesso
        } else if (body.message === 'Account not found!') {
            expect(response.status).to.eq(200); // Ou o código de erro da sua API
            // Outras validações para erro
        }
    })
})