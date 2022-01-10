/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


Given(/^que estou na tela de login$/, () => {
	loginPage.acessarLogin();
});

When(/^realizo login com usuário válido$/, () => {
	loginPage.preencherFormulario();
});

Then(/^visualizo que estou logado na aplicação$/, () => {
	loginPage.validaLogin();
});


Given(/^que estou na tela de login$/, () => {
	loginPage.acessarLogin();
});

When(/^preencho meus dados com senha inválida$/, () => {
	loginPage.preencherFormularioinvalido();
});

Then(/^visualizo mensagem de erro ao realizar login$/, () => {
	loginPage.validaLogininvalido();
});

