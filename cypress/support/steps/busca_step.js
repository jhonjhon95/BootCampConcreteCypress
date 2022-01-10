/* global Given, Then, When */

import BuscaPage from '../pageobjects/BuscaPage'
const buscaPage = new BuscaPage

Given(/^que estou na home$/, () => {
	buscaPage.acessahome();

});

When(/^realizo uma busca por produto$/, () => {
	buscaPage.buscaprodutovalido();
});

Then(/^visualizo que a busca do produto foi realizada com sucesso$/, () => {
	buscaPage.validabuscavalido();
});

Given(/^que estou na home$/, () => {
	buscaPage.acessahome();
});

When(/^realizo uma busca por um produto que não existe$/, () => {
	buscaPage.buscaprodutoinvalido();
});

Then(/^visualizo que nenhum resultado foi encontrado$/, () => {
	buscaPage.validabuscainvalido();
});
