listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Numero secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa} tentativas!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'Você errou!');
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }else{
            exibirTextoNaTela('p', 'Você errou!');
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }  
        tentativas ++;     
        limparCampo(); 
    }
};

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}
