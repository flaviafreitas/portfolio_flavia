export function initSwiper() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        },
        breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        },
    });
}