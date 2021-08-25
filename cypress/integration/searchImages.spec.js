/* eslint-disable no-undef */
describe('Search Images', () => {
    it('frontpage can be opened', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Select Item')
    })
    it('A successfull search bring me results', () => {
        cy.visit('http://localhost:3000')
        cy.get('#search').type('Facundo')
        cy.get('#dropdown').select('Bing')
        cy.get('button').click()


    })
    it('Loading modal opens when I submit a request', () => {
        cy.visit('http://localhost:3000')
        cy.get('#search').type('Facundo')
        cy.get('#dropdown').select('Bing')
        cy.get('button').click()
        cy.get('[data-testid=overlay]')
    })

    it('Get error message when bing api request fail', () => {
        cy.visit('http://localhost:3000')
        cy.get('#search').type('Facundo')
        cy.get('#dropdown').select('Bing')
        cy.get('button').click()
        cy.intercept('https://api.bing.microsoft.com/v7.0/images/search?q=Facundo', { forceNetworkError: true })
    })

    it('Get error message when google api request fail', () => {
        cy.visit('http://localhost:3000')
        cy.get('#search').type('Facundo')
        cy.get('#dropdown').select('Google')
        cy.get('button').click()
        cy.intercept('https://customsearch.googleapis.com/customsearch/v1?key=AIzaSyAuYucO0jCa1lYfWd235tyJRxb8aGVGKUI&cx=4cf935c13c0e105dc&q=Facundo&searchType=image&num=10', { forceNetworkError: true })
    })
    it.only('Should display data from both search engines', () => {
        cy.visit('http://localhost:3000')
        cy.get('#search').type('Facundo')
        cy.get('#dropdown').select('Both')
        cy.get('button').click()
    })
})
