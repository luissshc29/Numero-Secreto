function verificaValidadeDoChute () {
    const numero = + chute

    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (numeroForaDoLimite(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido: o número deve estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="botao-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
        
    }
}

function numeroInvalido (numero) {
    return Number.isNaN(numero)
}

function numeroForaDoLimite (numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (evento) => {
    if (evento.target.id === 'jogar-novamente') {
        window.location.reload()
    }
})
