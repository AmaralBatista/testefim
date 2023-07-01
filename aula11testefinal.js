var prompt = require('prompt-sync')();

let valorItem = [];
let valorTotal = 0;
let entrada = 0;
let qtd = 0;
const regex = /[a-z]+/i;
let codigo = []
let quantidade = []
let n = 0

while (true) {
  entrada = Number(prompt(`Qual o codigo do item?`));

  if (regex.test(entrada)) {
    console.log('Digite um código de produto válido!');
    continue;
  }

  if (entrada === 999) {
    break;
  }

  if (entrada < 100 && entrada > 105) {
    console.log("Digite um código de produto válido!");
    continue;
  }

  qtd = Number(prompt(`Qual quantidade desejada desse item? `));

  if (regex.test(qtd)) {
    console.log("Digite uma quantidade válida!");
    continue;
  }

  codigo[n] = entrada;
  quantidade[n] = qtd;

  switch (entrada) {
    case 100:
      valorItem[n] = 1.2 * qtd;
      break;
    case 101:
      valorItem[n] = 1.3 * qtd;
      break;
    case 102:
      valorItem[n] = 1.5 * qtd;
      break;
    case 103:
      valorItem[n] = 1.2 * qtd;
      break;
    case 104:
      valorItem[n] = 1.3 * qtd;
      break;
    case 105:
      valorItem[n] = 1.0 * qtd;
      break;
    default:
      console.log(`[ERRO] Codigo inexistente`);
      break;
  }

  n++;
}

console.log(`Valor total: ${valorTotal.toFixed(2)}`);

let codigoLimpo = [];

for (j = 0; j < codigo.length; j++) {
  if (codigo[j] >= 100 && codigo[j] <= 105) {
    codigoLimpo[j] = codigo[j];

    console.log(
      ` cod  ${codigoLimpo[j]}   ${quantidade[j]}   ${valorItem[j].toFixed(2)}  `
    );

    valorTotal += valorItem[j];
  }
}

console.log(`Valor total: ${valorTotal.toFixed(2)}`);

    













