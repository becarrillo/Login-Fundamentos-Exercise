let password;
let username;
if (username === '') {
    document.getElementById('userErrorSpan').setAttribute('value', "No ingresaste algún valor de usuario");
    throw new error("campo vacío, ingresa algún valor usuario")
}

if (password === '') {
    document.getElementById('passwErrorSpan').setAttribute('value', "No ingresaste algún valor de contraseña");
    throw new error("campo vacío, ingresa algún valor contraseña");
}

document.querySelector('#userFieldLogin').addEventListener('change', function (ev) {
    username = ev.target.value
})
document.querySelector('#pswFieldLogin').addEventListener('change', function(ev) {
    password = ev.target.value
})

const data = [
    {
        "username": "brianna",
        "password": "135"
    },
    {
        "username": "german-pe05",
        "password": "xyz9"
    },
    {
        "username": "lin94",
        "password": "#2468"
    }
];

document.getElementById('loginForm').addEventListener('submit', function (ev) {
    ev.preventDefault();
    let foundUser = data.filter(info => {
        return info.username === username && info.password === password
    });

    
    console.log(...foundUser);      // Aplicación para ver en consola
})