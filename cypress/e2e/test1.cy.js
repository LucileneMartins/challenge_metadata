import menu from "../support/pageObject/menu/menu"
describe('Test 1', () => {
    it('Given User access the Login page', () => {
        
    });
    it('When User sign up as a new user with valid email and password and Validate if yoThen the system will shows up a modal returning a successfully message Sign up successful.', () => {
        menu.signUp()
        
    });
    it('Log in and Log Out', () => {
        menu.logIn()
    });
    it('Try logging in with invalid user ', () => {
        menu.invalidLoginAndPassword()
    });
});