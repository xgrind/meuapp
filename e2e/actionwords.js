exports.Actionwords = {
  euVouCadastrarUmNovoProduto: function () {
    element(by.id('botaoEnviar')).click;    
  },
  euNaoPreenchoTodosOsCampos: function (login, senha) {    

    element(by.id('login')).sendKeys('michael');
    // element(by.id('senha')).sendKeys('123456'); 
        
    Promise.all([
    expect(element(by.id('login')).getAttribute('value')).toEqual('michael'),
      expect(element(by.id('senha')).getAttribute('value')).toEqual('')]).then(function() {
        done();
      }).catch(function(){
        done.fail('incorreto');
      })
      browser.sleep(10000);
    
  },
  euEstouNaTelaDeCadastro: function () {
    browser.get('cadastro.html');
    expect(browser.getCurrentUrl()).toMatch("cadastro");
  },
  oSistemaEmiteUmaMensagemQueNaoFoiPossivelCadastrar: function () {
    // criar teste para verificar alertas
  }
};