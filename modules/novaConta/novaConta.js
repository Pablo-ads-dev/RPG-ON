$(document).ready(function () {
    incluirHeader("header");
    $("#btnMostrarSenha").click(function () {
        let inputSenha = $("#senha")
        let eye = $(".eyeIcon")
        if ($(this).hasClass("closed")) {
            inputSenha.attr("type", "text")
            $(this).removeClass("closed").addClass("open")
            eye.removeClass("fa-eye-slash").addClass("fa-eye")

        } else {
            inputSenha.attr("type", "password")
            $(this).removeClass("open ").addClass("closed")
            eye.removeClass("fa-eye").addClass("fa-eye-slash")
        }
    })
})  