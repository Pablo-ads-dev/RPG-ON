function verifyFields() {
    let email = $("#email").val();
    let password = $("#password").val();

    if (!email || !password) {
        Swal.fire({
            title: 'Attention!',
            text: 'All fields must filled',
            icon: 'info',
        });
        return false;
    }
    login(email, password)
}
function login(email, password) {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/login/",
        contentType: "application/json",
        data: JSON.stringify({
            email, password
        }),
        success: function (response) {
            Swal.fire({
                title: 'Success!',
                text: 'Welcome back ' + response.user.usu_name,
                icon: 'success',
            })

        }, error: function (error) {

        }
    })

}
$(document).ready(function () {

    $("#showPassword").click(function () {
        let inputPassword = $("#password")
        let eye = $(".eyeIcon")
        if ($(this).hasClass("closed")) {
            inputPassword.attr("type", "text")
            $(this).removeClass("closed").addClass("open")
            eye.removeClass("fa-eye-slash").addClass("fa-eye")
        } else {
            inputPassword.attr("type", "password")
            $(this).removeClass("open ").addClass("closed")
            eye.removeClass("fa-eye").addClass("fa-eye-slash")
        }
    })

    $('#btnConfirm').on('click', function () {
        verifyFields()
    });

    $(document).on('keydown', function (e) {
        if (e.key === "Enter") {
            verifyFields();
        }
    });
})
