var value = parseInt(document.getElementById('quantidade').value);

function mais(valorMaximo) {
    event.preventDefault();
    value = isNaN(value) ? 0 : value;
    if (value >= valorMaximo) {
        value = valorMaximo;
    } else {
        value++;
    }
    document.getElementById('quantidade').value = value;
}

function menos(valorMinimo) {
    event.preventDefault();
    var value = parseInt(document.getElementById('quantidade').value);
    value = isNaN(value) ? 0 : value;
    if (value <= valorMinimo) {
        value = 0;
    } else {
        value--;
    }
    document.getElementById('quantidade').value = value;

}