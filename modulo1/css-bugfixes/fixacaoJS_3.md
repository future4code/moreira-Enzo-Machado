```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let media = (ex + p1 + p2) / 3
  if (media >= 9) {
    const conceitoA = "A"
    return conceitoA
  } else if (media >= 7.5 && media < 9) {
    const conceitoB = "B"
    return conceitoB
  } else if (media < 7.5 && media >= 6) {
    const conceitoC = "C"
    return conceitoC
  } else {
    const conceitoD = "D"
    return conceitoD
  }
}
```