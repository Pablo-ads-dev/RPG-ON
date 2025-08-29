//CONSTANTES 
//False = Fechado

let menuStatus = false

function showAlert(message) {
    Swal.fire({
        title: 'Informação!',
        text: message,
        icon: 'info',
    });
    loader(false);
    $("#loader").addClass("loader-hidden");
}

function incluirMenu(menu) {
    $.ajax({
        url: "/includes/menu.html",
        success: function (response) {
            $(`#${menu}`).html(response);
        }
    })
}

function redirecCriarConta() {
    window.location.href = "/modules/novaConta/novaConta.html";
}

function redirecLogin() {
    window.location.href = "/modules/login/index.html";
}

function redirectInicio() {
    loader(true, text = "Aguarde...")
    setTimeout(() => {
        window.location.href = "/modules/inicio/inicio.html";
    }, 1000);
}

function redirectNovoRpg() {
    loader(true, text = "Aguarde...")
    setTimeout(() => {
        window.location.href = "/modules/newRpg/newRpg.html";
    }, 1000);
}

function loader(parameter, texto) {
    if (parameter == false) {
        $("#loader").addClass("loader-hidden")
        $(".textLoader").text(texto)
    }
    if (parameter == true) {
        $("#loader").removeClass("loader-hidden")
        $(".textLoader").text(texto)
    }
}


