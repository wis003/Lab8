describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Volume Number', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el) {
      expect($el).to.have.value(75)
    })
  });

  it('Volume Slider', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function($el) {
      expect($el).to.have.value(33)
    })
  });

  it('Check Volume Change', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('volume', 0.33)
    })
  });

  it('Image and Sound Source Change', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg')
    })
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3')
    })
  });

  it('Volume Image Change', () => {
    let vol = 0;
    while(vol <= 100) {
      cy.get('#volume-number').clear().type(String(vol));
      
        if(vol > 66) {
          cy.get('#volume-image').then(function($el) {
            expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg')
          })
        }
        else if(vol > 33 && vol < 67) {
          cy.get('#volume-image').then(function($el) {
            expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg')
          })
        }
        else if(vol > 0 && vol < 34) {
          cy.get('#volume-image').then(function($el) {
            expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg')
          })
        }
        else {
          cy.get('#volume-image').then(function($el) {
            expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg')
          })
        }
      vol++;
    }
    
  });
});
