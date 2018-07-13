describe('Loja de Roupa', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  it('Cadastrar produto', function () {
    // Given Eu vou cadastrar um novo produto
    this.actionwords.euVouCadastrarUmNovoProduto();
    // And Eu não preencho todos os campos
    this.actionwords.euNaoPreenchoTodosOsCampos();
    // When Eu estou na tela de cadastro
    this.actionwords.euEstouNaTelaDeCadastro();
    // Then O Sistema emite uma mensagem que não foi possível cadastrar
    this.actionwords.oSistemaEmiteUmaMensagemQueNaoFoiPossivelCadastrar();
  });
});
