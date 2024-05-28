//---------------- MENSAJE INICIO DE SESION------------------



function loguearse(callback) {
    let form = document.getElementById('form-login');
    let container = document.getElementById('seccionLogin');
    form.email.value = '';
    form.password.value = '';

    function complete(value, valu ) {
        document.onkeydown = null;
        callback(value, valu);
    }

    form.onsubmit = function () {
        let value = form.email.value;
        let valu = form.password.value;
        if (value == ''){
            alert('Complete el campo email')
        }
        if (valu == ''){
            alert('Complete el campo Password')
        }
        if (value == '' || valu == '') return false; // ignorar submit vacíos
        complete(value, valu);
        return false;
    };

    document.onkeydown = function (e) {
        if (e.key == 'Escape') {
            complete(null, null);
        }
    };

    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];

    lastElem.onkeydown = function (e) {
        if (e.key == 'Tab' && !e.shiftKey) {
            firstElem.focus();
            return false;
        }
    };

    firstElem.onkeydown = function (e) {
        if (e.key == 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    };
};


function sarasa(value, valu){
    if (value == null && valu == null){
        alert('Nose modifico nada')
    } else if (value == localStorage.getItem('email', value) && valu == localStorage.getItem('password', valu)){
        alert('Bienvenido')
        window.location.href = '../index.html'
    } else {
        alert('Debe Registrarse')
        window.location.href = '../page/Registro.html'
    }
}


if (document.getElementById('log').textContent == 'Login'){
    loguearse(function (value, valu){
        sarasa(value, valu)
    });
} else {
    alert('Cerrando Sesion')
    document.getElementById('log').innerText = 'Login'
}
