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
        "breakpoints": {
            768: { slidesPerView: 1, spaceBetween: 10 },
            992: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
        },
    });

    const swiperSkills = new Swiper('.swiper-skills', { 
        loop: true,
        "spaceBetween": 20,
        "slidesPerView": 'auto',
        "speed": 2000,
        "watchOverflow": true,
        "autoplay": {
            "delay": 0,
            "disableOnInteraction": false,
            "pauseOnMouseEnter": true
        },
        "breakpoints": {
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
        },
    });
}
