```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let salarioFixoMensal = 2000
  let comissao =  (0.05 * valorTotalVendas) + (100 * qtdeCarrosVendidos)
  let salarioFinal = salarioFixoMensal + comissao
  
  return salarioFinal
}

```