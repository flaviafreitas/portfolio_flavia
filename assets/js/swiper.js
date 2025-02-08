export function initSwiper() {
    const swiperProjects = new Swiper('.swiper-container', {
        "loop": true,
        "spaceBetween": 10,
        "slidesPerView": 1,
        "pagination": {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        "speed": 10000,
        "autoplay": {
            "delay": 0,
        },
        "breakpoints": {
            700: { slidesPerView: 1.8, spaceBetween: 10 },
            992: { slidesPerView: 2.3, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
        },
    });
}
