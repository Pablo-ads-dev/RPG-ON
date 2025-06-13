//CONSTANTES 
//False = Fechado

let menuStatus = false


function incluirHeader(header) {
    /./includes/ir o header
    $.ajax({
        url: "./includes/des/header.html",
        success: function (response) {
            $(`#${header}`).append(response)
        }
    })
}
function incluirMenu(menu) {
    $.ajax({
        url: "./includes/des/menu.html",
        success: function (response) {
            $(`#${menu}`).html(response);
        }
    })
}
function todasInclusoes(header, menu, sidePrimaria, SideSegundaria) {
    /./includes/ir o header
    $.ajax({
        url: "./includes/des/header.html",
        success: function (response) {
            $(`#${header}`).html(response)
        }
    })
}

function redirecCriarConta() {
    loader(true, text = "Aguarde...")
    setTimeout(() => {
        window.location.href = "/modules/novaConta/novaConta.html";
    }, 1000);
}

function redirecLogin() {
    loader(true, text = "Aguarde...")
    setTimeout(() => {
        window.location.href = "/modules/login/index.html";
    }, 1000);
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




//Para fazer mostrar os itens da side nav Menu


$(document).on('click', '.btnMenu', function () {

    let item = $("#menu");
    let textHidden = $(".nomeItemLista");
    let itemLista = $(".listItem");
    let menuTitle = $(".menuTitle");
    let content = $("#content");
    let listSeparator = $(".listSeparator");

    if (menuStatus == false) {
        listSeparator.show("fast");
        item.addClass("openMenuSide");
        itemLista.addClass("itemAlign")
        textHidden.show("fast")
        menuTitle.show("fast")
        menuStatus = true
        content.addClass("overlay")
        return;
    }
    if (menuStatus == true) {
        listSeparator.hide("fast");
        item.removeClass("openMenuSide");
        textHidden.hide("fast")
        itemLista.removeClass("itemAlign");
        menuTitle.hide("fast")
        menuStatus = false;
        content.removeClass("overlay")
        return;
    }

})


