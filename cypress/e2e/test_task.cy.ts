/// <reference types="cypress" />

import { isTypedArray } from "cypress/types/lodash"
import { getRandomMessage } from "../utils/message"

describe('Sending message - happy path', () => {
  beforeEach(() => {
    cy.viewport('macbook-16')
    cy.visit('http://sourceful.nl')
  })

  it('should send message', () => {

    const message = getRandomMessage()

    cy.get('#menu-item-1477-pl').click()
    cy.get('#menu-item-2413').should('contain.text', 'Kontakt').click()
    cy.url().should('eq', 'https://sourceful.nl/pl/contact-pl/')

    cy.get('[name="your-name"]').type(message.firstName + ' ' + message.lastName)
    cy.get('[name="your-email"]').type(message.email)
    cy.get('[name="your-subject"]').type(message.subject)
    cy.get('[name="your-message"]').type(message.text)

    cy.wait(3000)

    //code source: https://stackoverflow.com/questions/63793801/click-on-recaptcha-cypress-version-3-8
    cy.get('[title="reCAPTCHA"]')
      .its('0.contentDocument.body')
      .should('be.visible')
      .and('not.be.empty')
      .then(cy.wrap)
      .find('#recaptcha-anchor')
      .should('be.visible')
      .click()

    cy.wait(1000)
    //cy.get('[type="submit"]').click()

  })

})