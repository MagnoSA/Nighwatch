var nextCommands = {
    acessarLogin: function() {
      return this.waitForElementVisible('@body')
        .assert.title('trex-row - T')
        .click('@btnLogar')
        .click('@btnLoginGoogle');
    },

    realizarLogin: function() {
      return this.waitForElementVisible('@inpEmailGoogle')
      .setValue('@inpEmailGoogle', 'testexavier88@gmail.com')
      .click('@btnNextEmail')
      .waitForElementVisible('@inpSenhaGoogle')
      .setValue('@inpSenhaGoogle', 'T3st3x@vier88')
      .click('@btnNextSenha')
    },
    
    criarLista: function() {
      return this.waitForElementVisible('@btnSalvarArquivo')
      .click('@btnSalvarArquivo')
      .waitForElementVisible('@btnCriarNovaLista')
      .click('@btnCriarNovaLista')
      .waitForElementVisible('@inpNomeLista')
      .setValue('@inpNomeLista', 'Minha nova lista')
      .click('@btnSalvarLista')
      .waitForElementVisible('@tituloPage')
    },

    validarListaCriada: function() {
      return this.waitForElementVisible('@nomeListaCriada')
      .assert.containsText('@nomeListaCriada', 'Minha nova lista')
    }
};

module.exports = {
    url: 'https://www.passeidireto.com/arquivo/29260283/trex-row',
    commands: [nextCommands],
    elements: {
        body: 'body',
        btnLogar: 'a[class="button login mobile"]',
        btnLoginGoogle: 'button[class="btn_google"]',
        inpEmailGoogle: 'input[id="identifierId"]',
        inpSenhaGoogle:'input[name="password"]',
        btnNextEmail: 'div[id="identifierNext"]',
        btnNextSenha:'div[id="passwordNext"]',
        btnSalvarArquivo: 'button[class="pd-btn_base pd-button-save v-btn v-btn--depressed v-btn--round theme--light orange"]',
        inpNomeLista: 'input[aria-label="Nome da Lista"]',
        btnSalvarLista: 'button[class="pd-btn_base v-btn v-btn--depressed v-btn--round theme--light orange"]',
        tituloPage: 'div[class="notification-wrapper"] h2',
        nomeListaCriada: 'h1[class="pd-card-title"]',


        btnCriarNovaLista: 'div[class="add-container"]'
    }
};