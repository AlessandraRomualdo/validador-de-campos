import validator from 'validator';
import './style.css';

// Seletores
const input = document.getElementById('input');
const select = document.getElementById('select');
const button = document.getElementById('buttonVality');
const result = document.getElementById('result');

// console.log(validator);
button.addEventListener('click', (event) => {
  event.preventDefault()
  
  const campos = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    email: validator.isEmail(input.value),
    date: validator.isDate(input.value, 'DD/MM/YY'),
    fone: validator.isMobilePhone(input.value),
    number: validator.isNumeric(input.value)
  };
  result.innerHTML = `A validação retornou ${campos[select.value]}`;
})