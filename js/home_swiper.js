let dotMsg = ['2023 봄 여름 캠페인 스웨터 셔츠', '2023 봄 자켓', '2023 봄 여성 셔츠']

const swiper1 = new Swiper('.visual-main .swiper', {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index) {
            
        return `<span class="swiper-pagination-bullet"> ${dotMsg[index]} </span>`; /* 이거 js 모듈에서 긁어와야됨 */
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    loopAdditionalSlides : 1,
    
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay : 3000,   // 시간 설정
        // disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

});

const swiper2 = new Swiper('.best-product .swiper', {

    slidesPerView: 4,
    spaceBetween: 15,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true

});

const swiper3 = new Swiper('.new-product .swiper', {

    slidesPerView: 4,
    spaceBetween: 15,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,

});

const swiperArrowsLeft = document.querySelectorAll('.swiper-arrow .fa-chevron-left')
const swiperArrowsRight = document.querySelectorAll('.swiper-arrow .fa-chevron-right')

swiperArrowsLeft.forEach((left) => {
    left.addEventListener('click', function(){
        left.parentElement.parentElement.parentElement.querySelector('.swiper-button-prev').click()
    })
})

swiperArrowsRight.forEach((right) => {
    right.addEventListener('click', function(){
        right.parentElement.parentElement.parentElement.querySelector('.swiper-button-next').click()
    })
})