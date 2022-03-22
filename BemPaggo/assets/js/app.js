import { validaCheckbox } from "./validaCheckbox.js"
import { validaQuantidade } from "./validaQuantidade.js";
const botao = document.querySelector('.formulario__enviar-botao')

botao.addEventListener('click', evento => {
    evento.preventDefault();
    validaCheckbox();
    validaQuantidade();
})