export function validaQuantidade() {
    var quantidade = document.querySelector(".formulario_quantidade-input")
    if (quantidade.value <= 0) {
        alert("Quantidade não pode ser menor que 1")
    }
    if (quantidade.value > 10000) {
        alert("Quantidade não pode ser maior que 10000")
    }
}