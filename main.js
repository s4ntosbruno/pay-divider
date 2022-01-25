function calcularConta() {
  const conta = this.document.getElementById("conta").valueAsNumber;
  const salario1 = this.document.getElementById("salario1").valueAsNumber;
  const salario2 = this.document.getElementById("salario2").valueAsNumber;
  const despesas1 =
    this.document.getElementById("despesas1").valueAsNumber || 0;
  const despesas2 =
    this.document.getElementById("despesas2").valueAsNumber || 0;
  let resultado = "";

  if (!conta) {
    resultado += "adicione a conta<br />";
  }
  if (!salario1) {
    resultado += "adicione o salario1<br />";
  }
  if (!salario2) {
    resultado += "adicione o salario2";
  }

  if (conta && salario1 && salario2) {
    const valorBase = salario1 - despesas1;
    const valorBase2 = salario2 - despesas2;

    const valorBaseTotal = valorBase + valorBase2;

    const porcentagem1 = valorBase / valorBaseTotal;
    const porcentagem2 = valorBase2 / valorBaseTotal;

    const valorQue1Paga = conta * porcentagem1;
    const valorQue2Paga = conta * porcentagem2;

    resultado = `1 paga: ${valorQue1Paga}<br />2 paga: ${valorQue2Paga}`;
  }

  this.document.getElementById("resultado").innerHTML = resultado;
}
