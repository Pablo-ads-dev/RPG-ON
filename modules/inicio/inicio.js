
$(document).ready(function () {
    incluirHeader("header");
    incluirMenu("menu");

    $(document).on("click", ".imgBorder", function () {
        let source = $(this).attr("src");
        $("#modalImagem").modal('show')
        $(".imgZoom").attr("src", source)
    })
})