function toggleScrollbar() {
    const panel = document.querySelector('.panel-cards');
    if (panel.scrollWidth <= panel.clientWidth) {
        panel.style.overflowX = 'hidden';
    } else {
        panel.style.overflowX = 'auto';
    }
}
function redirectNewSession() {
    location.href = "/modules/newRpg/newRpg.html"
}

$(document).ready(function () {
    incluirMenu("menu");
    toggleScrollbar();
    const $slider = $('.panel-cards');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Arrastar com mouse
    $slider.mousedown(function (e) {
        isDown = true;
        $slider.addClass('active');
        startX = e.pageX - $slider.offset().left;
        scrollLeft = $slider.scrollLeft();
    });

    $slider.mouseleave(function () {
        isDown = false;
        $slider.removeClass('active');
    });

    $slider.mouseup(function () {
        isDown = false;
        $slider.removeClass('active');
    });

    $slider.mousemove(function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - $slider.offset().left;
        const walk = (x - startX) * 2; // velocidade do arraste
        $slider.scrollLeft(scrollLeft - walk);
    });

    gsap.to($slider, {
        scrollLeft: "+=100",
        duration: 0.5,
        ease: "power2.out"
    });

    $(document).on("click", ".imgBorder", function () {
        let source = $(this).attr("src");
        $("#modalImagem").modal('show')
        $(".imgZoom").attr("src", source)
    })

    $(document).on("load", ".panel-cards", function () {
        toggleScrollbar();
    })

    $(document).on("resize", ".panel-cards", function () {
        toggleScrollbar();
    })

    $(document).on("click", ".img-session", function () {
        let source = $(this).attr("src");
        console.log(source);
        $("#modalImagem").modal('show')
        $(".imgZoom").attr("src", source)
    })
})