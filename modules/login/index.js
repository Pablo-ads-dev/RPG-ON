
$(document).ready(function () {

    $("#btnMostrarSenha").click(function(){
        let inputSenha = $("#senhaInput")
        let eye = $(".eyeIcon")
        if ($(this).hasClass("closed")){
            inputSenha.attr("type", "text")
            $(this).removeClass("closed").addClass("open")
            eye.removeClass("fa-eye-slash").addClass("fa-eye")

        }else {
            inputSenha.attr("type", "password")
            $(this).removeClass("open ").addClass("closed")
            eye.removeClass("fa-eye").addClass("fa-eye-slash")
        }
    })
})
