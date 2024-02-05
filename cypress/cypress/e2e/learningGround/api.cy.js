describe('api test github', () => {
    
    const data = {}

    it.skip('can get my stuff', () =>{
        cy.request('GET','https://api.github.com/users/ginsusamurai').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Morgan Heinemann')
            console.log('narp', response)
        })
    })

    it.skip('pet thing', () => {
        cy.request('GET', 'https://petstore.swagger.io/#/pet/findByStatus?status=available').then((response) => {
            expect(response.status).to.eq(200)
            console.log('narp', response.body)
        })
    })

    it('authorize booker', () => {
        const payload = {
            "username" : "admin",
            "password" : "password123"
        }
        cy.request('POST', 'https://restful-booker.herokuapp.com/auth', payload)
        .then((response) => {
            expect(response.status).to.eq(200)
            console.log('narp3', response)
            data.token = response.body.token
            console.log('token', data.token)
        })
    })

    it('get id info', () => {
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking').then((response) => {
            expect(response.status).to.eq(200)
            console.log('narp4', response.body)
            data.booking = response.body[0].bookingid
            console.log(data.booking)
        })
    })

    it('get the booking', () => {
        cy.request('GET',`https://restful-booker.herokuapp.com/booking/${data.booking}`).then((response)=>{
            expect(response.status).to.eq(200)
            console.log('narp5', response.body)
        })
    })


})