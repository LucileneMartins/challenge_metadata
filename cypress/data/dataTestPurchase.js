import { faker } from '@faker-js/faker';

const formPurchase = {
    name: faker.person.fullName(),
    country : faker.location.country(),
    city: faker.location.city(),
    creditCard : faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year : faker.date.year()
}


export{
    formPurchase
}