const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const criar_lista_page = client.page.criar_lista_page();
const estimationPage = client.page.estimationPage();

defineSupportCode(({ Given, Then, When }) => {

    Given('que estou no site da Passei Direto', function () {
        return criar_lista_page
            .navigate()
            .acessarLogin();
    });
    Given('faço login no sistema com uma conta gmail', function () {
        client
            .windowHandles(function(result) {
                var handle = result.value[1]
                this.switchWindow(handle)
            })
        return criar_lista_page
            .realizarLogin();
      });
    When('salvo um arquivo em uma nova lista', function () {
        client
            .windowHandles(function(result) {
                var handle = result.value[0]
                this.switchWindow(handle)
            })
        return criar_lista_page
            .criarLista();
    });
    Then('visualizo a nova lista criada com sucesso', function () {
        client
            .url('https://www.passeidireto.com/perfil/59861891/listas')
        return criar_lista_page
            .validarListaCriada();
           
    });
});