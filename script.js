//botao para gerar o resultado

const botao = document.querySelector('#btn');
botao.addEventListener('click', () => {

    var horas = document.getElementById('inpHoras').value;
    var dias = document.getElementById('inpDias').value;
    var preciso = document.getElementById('inpPrecisa').value;
    var imposto1 = document.getElementById('inpImposto').value;
    var lucro1 = document.getElementById('inpLucro').value;

    lucro = '0.'+ lucro1 
    imposto = '0.'+ imposto1
    
    var resposta1 = document.getElementById('resposta1');
    
    var hrPmes = horas * dias;
    var calc = preciso / hrPmes;

    preco = calc / (1 - imposto - lucro)

    resposta1.innerHTML = 'Seu custo por hora trabalhada é de: '+ preco.toFixed(2)+'R$';

  console.log('botao acionado');
});

//botao para limpar os elementos do input
document.getElementById('clearButton').addEventListener('click', function() {
  var inputs = document.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
    resposta1.innerHTML = ' ';
  }
});


