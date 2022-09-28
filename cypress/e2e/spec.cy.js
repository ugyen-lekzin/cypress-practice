import { url } from '../fixtures/data';

describe('testing page object', () => {
  before(function () {
    cy.visit(url)
    cy.url().should('include', 'blazemeter.com')
  })

  it('random demo website', () => {

  })
})