import menu from '../menuPage/menu';
const data = require("../../../data/dataTestPurchase")
const el = require("./elements");

class Cart{

    constructor(data) {
        this.name = data.formPurchase.name;
        this.country = data.formPurchase.country;
        this.city = data.formPurchase.city;
        this.creditCard = data.formPurchase.creditCard;
        this.month = data.formPurchase.month;
        this.year = data.formPurchase.year;
    }

    removePhoneCart(position){
        menu.clickMenu('Cart');
        cy.contains('Delete').eq(position).click();
    }

    placeOrder(){
        cy.get(el.elements.labelName).type(this.name);
        cy.get(el.elements.labelCountry).type(this.country);
        cy.get(el.elements.labelCity).type(this.city);
        cy.get(el.elements.labelCreditCard).type(this.creditCard);
        cy.get(el.elements.labelMonth).type(this.month);
        cy.get(el.elements.labelYear).type(this.year);
        cy.get(el.elements.purchaseButton).click(el.elements.purchaseButton)        

    }

    placeOrderSuccessfullMessage(){
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("Thank you for your purchase!");
            expect(t).to.contains(this.name)
            expect(t).to.contains(this.creditCard)
        });
    }
}

const cart = new Cart();
export default cart;