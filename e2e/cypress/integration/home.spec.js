/// <reference types="cypress" />

describe('Page loads', () => {
    before(() => {
        cy.visit('/');
    });

    it('h1 text', () => {
        cy.get('h1').should('contain.text', 'Welcome');
    });

    it('h2 text', () => {
        cy.get('h2').should('contain.text', 'Hello world!');
    });
});
