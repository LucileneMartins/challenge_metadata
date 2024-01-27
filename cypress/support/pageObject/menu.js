const el = require("./elements");
import * as data from "../../data/dataTest";

class Menu {

    signUp(){

        cy.session('signUp', () => {
            cy.visit('/')
            cy.get(el.elements.signUpButton).should('be.visible');
            cy.get(el.elements.signUpButton).click();
            cy.get(el.elements.formModalSignUp).should('be.visible');
            cy.get(el.elements.labelEmailInput).type(data.generateEmail(), { delay: 20 });
            cy.get(el.elements.labelPasswordInput).type(data.generatePassword() , { delay: 20 });
            cy.get(el.elements.signUpdButtonModal).eq(1).click();
            cy.wait(10)
            cy.on("window:confirm", (t) => {
                //verify text on pop-up
                expect(t).to.contains("Sign up successful.");
            });
             cy.get(el.elements.closeButton).eq(1).click()
          })
     
    }
    
    logIn(){

        cy.session('login', () => {
            cy.visit('/')
            cy.get(el.elements.logInButton).click();
            cy.get(el.elements.labelLoginUsername).type(data.password_login_already_exist.login, { delay: 10 })
            cy.get(el.elements.labelLoginpassword).type(data.password_login_already_exist.pass, { delay: 10 })
            cy.get(el.elements.logInButtonModal).click()
            cy.get(el.elements.welcomeLabel).should('be.visible');
            cy.get(el.elements.welcomeLabel).contains(data.password_login_already_exist.login)

            //LogOut
            cy.get(el.elements.signUpButton).click();
            cy.get(el.elements.signUpButton).should('be.visible');
          })
        
    }

    logIn(){

        cy.session('invalidPassLogin', () => {
            cy.visit('/')
            cy.get(el.elements.logInButton).click();
            cy.get(el.elements.labelLoginUsername).type(svgvbgbtvetv, { delay: 10 })
            cy.get(el.elements.labelLoginpassword).type(data.password_login_doesnt_exist.pass, { delay: 10 })
            cy.get(el.elements.logInButtonModal).click()

            cy.on("window:alert", (t) => {
                //verify text on pop-up
                expect(t).to.contains("User does not exist. ");
            });
            
          })
        
    }
    

}

const menu =  new Menu();
export default menu;

