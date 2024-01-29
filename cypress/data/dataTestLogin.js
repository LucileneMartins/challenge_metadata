function generateEmail(){
    return `lucilene.martins.nascimento_${generateRandomNumber()}@gmail.com`;
}

const password_login_already_exist = {
    pass: '12345678$',
    login : 'lucilene.martins.nascimento_1@gmail.com'
}

const password_login_doesnt_exist = {
    pass: '12345678',
    login : 'lucilene.martins.nascimento_000@gmail.com'
}

function generatePassword(){
    return `12Challenge_Metadata_${generateRandomNumber()}`;
}

function generateRandomNumber(){
    return Math.random().toFixed(1);
}


export{
    password_login_already_exist,
    generateEmail,
    generatePassword,
    generateRandomNumber
}