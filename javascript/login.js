const loginUser = document.querySelector('#login-user');
const loginPassword = document.querySelector('#login-password');
const loginButton = document.querySelector('#login-button');
const spanUserError = document.querySelector('#span-user-error');
const spanPasswordError = document.querySelector('#span-password-error');
let user = 'rey';
let password = '0000';

let users = {
    'rey': '0000',
    'Jahaira': '11102004'
}

let validatedUser = false;
let validatedPassword = false;

loginButton.addEventListener('click', validateLogin);
loginPassword.addEventListener('keypress', function onEvent (event) {
    if (event.keyCode === 13) {
        validateLogin();
    }
});

function validateLogin() {
    if (loginUser.value === "") {
        spanUserError.innerHTML = 'Ingrese un usuario';
    } else if (loginUser.value !== user) {
        spanUserError.innerHTML = 'Usuario incorrecto';
        validatedUser = false;
    } else {
        spanUserError.innerHTML = '';
        validatedUser = true;
    }

    if (loginPassword.value === "") {
        spanPasswordError.innerHTML = 'Ingrese una contraseña';
    } else if (loginPassword.value !== password) {
        spanPasswordError.innerHTML = 'Contraseña incorrecta';
        validatedPassword = false
    } else {
        spanPasswordError.innerHTML = '';
        validatedPassword = true;
    }

    if (validatedUser && validatedPassword) {
        window.location.href = '/html/home.html';
    }
}