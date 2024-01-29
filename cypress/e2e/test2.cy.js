import menu from "../support/pageObject/menuPage/menu";
import menuPhone from "../support/pageObject/phonePage/phone";
import menuCart from '../support/pageObject/cartPage/cart';

describe('Test 2', () => {
    it('Given User access the Login page', () => {
        menu.logIn();
    });
    it('When User go to Phones', () => {
        menu.clickPhoneMenu();
    });
    it('When user select bunch of phone and add to a cart', () => {
        menuPhone.selectPhone('Samsung galaxy s6');
        menuPhone.addCart('Samsung galaxy s6');
        menuPhone.selectPhone('Samsung galaxy s7');
        menuPhone.addCart('Samsung galaxy s7');
        menuPhone.selectPhone('Sony xperia z5');
        menuPhone.addCart('Sony xperia z5');
        menuPhone.selectPhone('Nokia lumia 1520');
        menuPhone.addCart('Nokia lumia 1520');
    });
    it('When user remove one item from a cart the system should delete the phone from the cart ', () => {
        menuCart.removePhoneCart(0)
    });
    it('When the user Place order, fill out the form and click purchase order ', () => {
        menuCart.placeOrder()
    });
});