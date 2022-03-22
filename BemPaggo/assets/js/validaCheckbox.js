export function validaCheckbox() {
    const check = document.querySelectorAll('.checkbox')
    var selecionado = false
    check.forEach(e => {
        if (e.checked) {
            selecionado = true
        }
    });
    if (selecionado == false) {
        alert("Selecione um adesivo por favor")
    }
}