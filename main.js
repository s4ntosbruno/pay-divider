function calcularConta() {
  const conta = this.document.getElementById("conta").valueAsNumber;
  const salario1 = this.document.getElementById("salario-de-bubu").valueAsNumber;
  const salario2 = this.document.getElementById("salario-de-lala").valueAsNumber;
  let resultado = "";

  if (!conta) {
    resultado += "adicione a conta<br />";
  }
  if (!salario1) {
    resultado += "adicione o salario de bubu<br />";
  }
  if (!salario2) {
    resultado += "adicione o salario de lala";
  }

  if (conta && salario1 && salario2) {
    const valorBaseTotal = salario1 + salario2;

    const porcentagem1 = salario1 / valorBaseTotal;
    const porcentagem2 = salario2 / valorBaseTotal;

    const valorQue1Paga = conta * porcentagem1;
    const valorQue2Paga = conta * porcentagem2;

    resultado = `Bubu paga: ${valorQue1Paga}<br />Lala paga: ${valorQue2Paga}`;
  }

  this.document.getElementById("resultado").innerHTML = resultado;
}
