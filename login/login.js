const campoSenha = document.getElementById('senha');
const btnSenha = document.getElementById('mostrar-senha');

console.log(campoSenha.type);

btnSenha.addEventListener('click', function() {

    // if(campoSenha.type == 'password') {
    //     campoSenha.type = 'text';
    // }
    // else {
    //     campoSenha.type = 'password';
    // }

    campoSenha.type = campoSenha.type == 'password' ? 'text' : 'password';

})