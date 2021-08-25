/* eslint-disable no-undef */
beforeEach(() => {
    cy.visit('http://localhost:3000')
})

const BING_KEY = '095b83c3c7954874b4212b9227c3c442'
const GOOGLE_KEY = 'AIzaSyAuYucO0jCa1lYfWd235tyJRxb8aGVGKUI'
const GOOGLE_CX = '4cf935c13c0e105dc'
const BASE_URL_BING = "https://api.bing.microsoft.com/v7.0/images/search?q="
const BASE_URL_GOOGLE = "https://customsearch.googleapis.com/customsearch//v1?"
const SEARCH = 'Facundo'
const OPTIONS = ['Google', 'Bing', 'Both']
const SEARCH_TYPE = 'image'
const RESPONSE_LENGTH = 10


describe('Search Images', () => {
    it('Should frontpage can be opened', () => {
        cy.contains('Select Item')
    })
    it('Should bring me results', () => {
        cy.get('#search').type(SEARCH)
        cy.get('#dropdown').select(OPTIONS[1])
        cy.get('button').click()
        cy.get('#card')
    })
    it('Should load modal when I submit a request', () => {
        cy.get('#search').type(SEARCH)
        cy.get('#dropdown').select(OPTIONS[1])
        cy.get('button').click()
        cy.get('[data-testid=overlay]')
    })

    it('Should get error message when bing api request fail', () => {
        cy.get('#search').type(SEARCH)
        cy.get('#dropdown').select(OPTIONS[1])
        cy.get('button').click()
        cy.intercept(`${BASE_URL_BING}${SEARCH}`, { forceNetworkError: true })
    })

    it('Should get error message when google api request fail', () => {
        cy.get('#search').type(SEARCH)
        cy.get('#dropdown').select(OPTIONS[0])
        cy.get('button').click()
        cy.intercept(`${BASE_URL_GOOGLE}key=${GOOGLE_KEY}cx=${GOOGLE_CX}&q=${SEARCH}&searchType=${SEARCH_TYPE}&num=${RESPONSE_LENGTH}`, { forceNetworkError: true })
    })
    it.only('Should display data from both search engines', () => {
        cy.get('#search').type(SEARCH)
        cy.get('#dropdown').select(OPTIONS[2])
        cy.get('button').click()
        cy.get('#card')
    })
})
