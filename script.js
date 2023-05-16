function calcularNumeroDeNotas() {
  var valorSaque = document.getElementById("saque").value;

  if (valorSaque <= 0) {
    document.getElementById("exampleModalLabel").innerHTML = "Erro";
    document.getElementById("resultado").innerHTML =
      "Valor inválido. Insira um valor válido para o saque.";

    var myModal = new bootstrap.Modal(
      document.getElementById("resultadoModal"),
      {
        keyboard: false
      }
    );
    myModal.show();

    return;
  }

  var notas = [100, 50, 20, 10];

  var quantidadeNotas = [];

  for (var i = 0; i < notas.length; i++) {
    var notaAtual = notas[i];
    var quantidade = Math.floor(valorSaque / notaAtual);

    quantidadeNotas.push(quantidade);
    valorSaque -= quantidade * notaAtual;
  }

  if (valorSaque > 0) {
    document.getElementById("exampleModalLabel").innerHTML = "Erro";
    document.getElementById("resultado").innerHTML =
      "Saque não é possível com as notas disponíveis.";

    var myModal = new bootstrap.Modal(
      document.getElementById("resultadoModal"),
      {
        keyboard: false
      }
    );
    myModal.show();

    return;
  }

  document.getElementById("exampleModalLabel").innerHTML = "Resultado";

  var resultadoSpan = document.getElementById("resultado");

  var resultadoTexto = "Quantidade de notas:<br>";
  for (var i = 0; i < notas.length; i++) {
    resultadoTexto += notas[i] + ": " + quantidadeNotas[i] + "<br>";
  }

  resultadoSpan.innerHTML = resultadoTexto;

  var myModal = new bootstrap.Modal(document.getElementById("resultadoModal"), {
    keyboard: false
  });
  myModal.show();
}
