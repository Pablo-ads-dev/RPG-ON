//CONSTANTES 
//False = Fechado

let menuStatus = false

function showAlert(title, message, type) {
    Swal.fire({
        title: title,
        text: message,
        icon: type,
    });
}

function incluirMenu(menu) {
    $.ajax({
        url: "/includes/menu.html",
        success: function (response) {
            $(`#${menu}`).html(response);
        }
    })
}

function redirecNewAccount() {
    window.location.href = "/modules/newAccount/newAccount.html";
}

function redirecLogin() {
    window.location.href = "/modules/login/index.html";
}

function redirectHome() {
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


