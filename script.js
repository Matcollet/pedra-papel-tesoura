function choose1() {
    jogar('tesoura')
}
function choose2() {
    jogar('pedra')
}
function choose3() {
    jogar('papel')
}
function jogar(escolha) {
    const jogadas = ["tesoura", "pedra", "papel"]
    const escolhaIA = jogadas[Math.floor(Math.random() * 3)]
    let resultado = `você escolheu: ${escolha}<br>`
    resultado += `computador escolheu ${escolhaIA}<br>`
    if (escolha === escolhaIA) {
        resultado += "Empatou..."
    } else if (
        (escolha === "pedra" && escolhaIA === "tesoura") ||
        (escolha === "papel" && escolhaIA === "pedra") ||
        (escolha === "tesoura" && escolhaIA === "papel")
    ) {
        resultado += "você venceu!"
    } else {
        resultado += "você perdeu..."
    }

    document.getElementById("resultado").innerHTML = resultado
}