$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

function redirecionarPlay() {
    window.location.href = "https://youtu.be/NcnK3C5W7SI";
}

function redirecionarInfo() {
    window.location.href = "http://www.adorocinema.com/series/serie-18145/temporada-36239/";
}