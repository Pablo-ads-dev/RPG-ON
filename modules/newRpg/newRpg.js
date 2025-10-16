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
    $(".select2").select2();

    $(document).on("keypress", "#nomeSessao", function () {
        let text = $(this).val();
        $(this).val(text.replace(/[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|-]/g, ""));
    })
    $(document).on("change", "#genderSelect", function () {
        let values = $(this).val();
        if (values.length > 3) {
            values.pop();
            $(this).val(values);
            $(this).trigger('change')
            showAlert("Information", "Maximum of 3 genders allowed", "info");
            return;
        }
    })
    $(document).on("change", "#playersNumber", function () {
        let values = $(this).val();
        if (values > 8) {
            $(this).val(values - 1);
            $(this).trigger('change')
            showAlert("Information", "Maximum of 8 players allowed", "info");
            return;
        }
        if (values < 1) {
            $(this).val(1);
            $(this).trigger('change')
            showAlert("Information", "You need atleast 1 player", "info");
            return;
        }
    })
})