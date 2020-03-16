const resultElement = document.getElementById("result")
let tot = 0

function setDigito(digito) {   
    resultElement.innerHTML += digito
}

function calcular() {
    let calculo = resultElement.innerHTML.valueOf()
    let resultado = eval(calculo)

    if (resultado == "Infinity") {
        resultElement.innerHTML = "Não existe divisão por 0"
        setTimeout(resete, 2000)
        return
    }

    resultElement.innerHTML = resultado
}


function resete() {
    resultElement.innerHTML = ""
}