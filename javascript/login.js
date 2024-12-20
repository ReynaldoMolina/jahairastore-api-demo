const loginUser = document.querySelector('#login-user');
const loginPassword = document.querySelector('#login-password');
const loginButton = document.querySelector('#login-button');
const spanUserError = document.querySelector('#span-user-error');
const spanPasswordError = document.querySelector('#span-password-error');

//user data to validate
const usersDatabase = [
    {
        username: 'rey',
        password: '0000'
    },
    {
        username: 'test',
        password: '1234'
    }
];

//add event to login button
loginButton.addEventListener('click', login);

//add event to password input when enter key pressed
loginPassword.addEventListener('keypress', function onEvent (event) {
    if (event.keyCode === 13) {
        login();
    }
});

function login() {
    
    let userSearch = usersDatabase.find(usr => usr.username === loginUser.value);
    
    //Check if inputs are empty
    if (loginUser.value === "") {
        spanUserError.innerHTML = 'Ingrese un usuario';
        return;
    } else {
        //check if username exists in database
        if (userSearch === undefined) {
            spanUserError.innerHTML = 'El usuario no existe';
            return;
        } else {
            spanUserError.innerHTML = '';
        }
    }

    if (loginPassword.value === "") {
        spanPasswordError.innerHTML = 'Ingrese una contraseña';
    } else {
        //check if password exists in database
        if (loginPassword.value !== userSearch.password) {
            spanPasswordError.innerHTML = 'La contraseña es incorrecta';
        } else {
            spanPasswordError.innerHTML = '';
            window.location.href = '/html/home.html';
        }
    }
}