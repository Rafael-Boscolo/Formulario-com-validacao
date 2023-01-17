// VARIAVEIS
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const txtTextarea = document.querySelector('#message');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === ''){
        alert('Informe o nome!');
        return;
    }

    if (emailInput.value == '' || !CheckedEmail(emailInput.value)){
        alert('Informe o email');
        return;
    }

    if(!CheckedPassword(passwordInput.value, 8)){
        alert('Informe uma senha com mais de 8 digítos!');
        return;
    }

    if(jobSelect.value === ''){
        alert("Selecione se está trabalhando!");
        return;
    }

    if(txtTextarea.value === ''){
        alert('Escreva uma mensagem!');
        return;
    }

    form.submit();
});

// FUNÇÕES
function CheckedEmail(email){

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function CheckedPassword(passwordInput, minDigits){
    if(passwordInput.length >= minDigits){
        return true;
    } else {
        return false;
    }
    
}