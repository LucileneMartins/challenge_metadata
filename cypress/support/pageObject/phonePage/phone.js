const el = require("./elements");

class Phone{

    selectPhone(device){
        cy.get(el.elements.phoneItem).eq(selectTypeOfPhone(device)).click();
    }
    
    addCart(device){   
        cy.contains(device).should('be.visible');
        cy.get(el.elements.addCartButton)
        cy.on("window:confirm",(t) => {
            expect(t).contains('Product added.')
        })
        cy.go('back');
    }
    
    selectTypeOfPhone(device){
        const devices = ['Samsung galaxy s6','Nokia lumia 1520','Nexus 6','Samsung galaxy s7',
        'Iphone 6 32gb', 'Sony xperia z5','HTC One M9','Sony vaio i5', 'Sony vaio i7' ]
        return devices[device];
    
    }

}
const menuPhone = new Phone()
export default menuPhone;