let listaDeNumerosSorteados = [];
let qdteDeNumeros = 10
let numeroSecreto = numeroAleatorio ();
let tentativas = 1;

function exibirTexto (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak (texto,'Brazilian Portuguese Female',{rate:1.2});   
}
textoInicio ();
function textoInicio (){
exibirTexto ('h1', "Jogo do numero secreto");
exibirTexto ('p', "Escolha de 1 a 10");
}
function verificarChute () {
   let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa"
        let mensagemTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTexto ('h1', "PARABENS")
        exibirTexto ('p', mensagemTentativas)
        document.getElementById ('reiniciar').removeAttribute ("disabled")
    } else if (chute > numeroSecreto){
        exibirTexto ('p', `O numero secreto é menor que ${chute}` )
    } else {
        exibirTexto ('p', `O numero secreto e maior que ${chute}`)
    }
    tentativas ++;
    limparcampo ()
}
function numeroAleatorio ( ){
   let numeroEscolhido = parseInt (Math.random () *qdteDeNumeros +1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == qdteDeNumeros){
        listaDeNumerosSorteados = []
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return numeroAleatorio ();
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
   }
function limparcampo (){
    chute = document.querySelector ('input');
    chute.value = "";
}
function reiniciarJogo(){
    
    exibirTexto ('h1', "Jogo do numero secreto");
    exibirTexto ('p', "Escolha de 1 a 10");
    numeroSecreto = numeroAleatorio ();
    tentativas = 1;
    limparcampo ();

}
