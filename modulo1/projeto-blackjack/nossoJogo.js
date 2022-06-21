/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


// BOAS VINDAS

let player = "none"


if(confirm("Olá, você gostaria de jogar um jogo de Blackjack ? ")) {
   alert("Ok, vamos começar!")
   let player = (prompt("Antes de tudo, qual o seu nome ? "))

   function cartaPlayer() {
      const numSorte = Number(prompt('Qual seu número da sorte nessa rodada ? '))
      
      for (let i = 0; i < vezes; i++) {
         const carta = comprarCarta()
      }

      console.log(`Você - carta: ${carta.texto} ${carta.valor} - pontuação ${soma}`)


   }

} else {
   alert("Oh, que pena! Caso mude de ideia, volte sem medo")
}

