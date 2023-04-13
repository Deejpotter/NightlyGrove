/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

export class LoginPage {
  url = '/auth';

  get emailField() {
    return cy.get('[formControlName="email"]');
  }

  get passwordField() {
    return cy.get('[formcontrolname="password"]');
  }

  get loginButton() {
    return cy.get('[type="submit"]');
  }

  login() {
    this.emailField.type('test');
    this.passwordField.type('123');
    this.loginButton.click();
  }
}
