$(document).ready(function () {
    incluirMenu("menu");
    $('.tooltip').tooltip()

    $("#btnAdd").click(function () {
        let url = $("#urlImg").val();
        if (!url | url == "") {
            Swal.fire({
                icon: "info",
                text: "Url não informada",
                title: "Informação"
            })
        } else {
            $(".imgSourceDiv").attr("src", url);
        }
    })

    $(document).on("keypress", "#nomeSessao", function () {
        let text = $(this).val();
        $(this).val(text.replace(/[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|-]/g, ""));
    })
})