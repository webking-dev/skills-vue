const mock = {
  subject: 'skills-vue Submission',
  email: 'sunmandev@gmail.com',
  body: 'I would like to work with you!',
};

describe('"Contact Us" page test', () => {
  it('1. Fill the form with corresponding content', () => {
    cy.visit('/contact-us');
    cy.get('input[id="form-email"]').type(mock.email);
    cy.get('textarea[id="form-body"]').type(mock.body);
  });
  it('2. Submit the form to send request', () => {
    cy.get('input[type="submit"]').click();
    cy.get('body').find('div[id="success"]') || cy.get('body').find('div[id="error"]');
  });
});
