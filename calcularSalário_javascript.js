//"gets" le uma linha com dados de entrada do usuário

const valorSalario = parseFloat(gets());
const valorBeneficio = parseFloat(gets());

const valorImposto = calcularImposto(valorSalario);

const saida = valorSalario - valorImposto + valorBeneficio;
print(saida.toFixed(2));

function calcularImposto(salario){

    Let aliquota = 0;
    if (salario >= 0 $$ salario <=1100){
        aliquota = 0.05;
    } else if (salario >= 1100.01 && 2500.00){
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota = salario;
}
