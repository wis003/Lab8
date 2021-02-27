describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => { // example
    expect(true).to.equal(true);
  });

  it('Volume Number', () => { // demo 1
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el) {
      expect($el).to.have.value(75)
    })
  });

  it('Volume Slider', () => { // demo 2
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function($el) {
      expect($el).to.have.value(33)
    })
  });

  it('Check Volume Change', () => { // demo 3
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('volume', 0.33)
    })
  });

  it('Image and Sound Source Change', () => { // test 1
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg')
    })
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3')
    })
  });

  it('Volume Image Change', () => { // test 2
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg')
    })

    cy.get('#volume-number').clear().type('21');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg')
    })

    cy.get('#volume-number').clear().type('42');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg')
    })

    cy.get('#volume-number').clear().type('69');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg')
    })
  });

  it('Honk Disabled', () => { // test 3
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(function($el) {
      expect($el).to.have.attr('disabled', 'disabled')
    })

    cy.get('#volume-number').clear().type('asdf');
    cy.get('#honk-btn').then(function($el) {
      expect($el).to.have.attr('disabled', 'disabled')
    })
  });

  it('Invalid Volume', () => { // test 4
    cy.get('#volume-number').clear().type('150');
    cy.get('#honk-btn').click();
    cy.get('input:invalid').then(function($invalidInputs) {
      expect($invalidInputs).to.have.value('150')
    })
  });
});
