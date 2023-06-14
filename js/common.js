window.onload = function() {
    /* 안되면 이거 써보셈 */
}


/* top 버튼 */

const body = document.querySelector('body')

let topBtn = document.createElement('div')
topBtn.setAttribute('class', 'btn-top')
topBtn.textContent = 'TOP'


body.appendChild(topBtn)

$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
        $(topBtn).fadeIn()
    } else {
        $(topBtn).fadeOut()
    }
})

$(topBtn).click(function(){
    console.log(123)
    $('html, body').animate({ scrollTop: 0 }, 'fast');
})

/* 상단 검색창 */

let searchIcon = document.querySelectorAll('.gnb ul li:nth-child(4) i')

let icon1 = document.querySelector('.gnb .fa-search')
let icon2 = document.querySelector('.gnb .fa-minus-square')
icon2.style.fontSize = '18px'
let searchBar = document.querySelector('.gnb input')

searchIcon.forEach((i)=>{
    $(i).click(function(){
        $(icon1).toggle()
        $(icon2).toggle()
    })
})

$(icon1).click(function(){
    $(searchBar).animate({
        width: 310,
        paddingLeft: 10
    }, 0)
})

$(icon2).click(function(){
    $(searchBar).animate({
        width: 0,
        paddingLeft : 0
    }, 0)
})

searchBar.addEventListener('keydown', function(e){
    if (e.key == 'Enter') {
        window.location.href = './search_result.html?search=' + searchBar.value
    }
})



/* 인기검색어 */

let goTop = 0

setInterval(() => {

    goTop += -40

    $('.lnb .hot ul').animate({
        top: `${goTop}px`
    }, 500, function(){

        goTop += 40

        $('.lnb .hot ul').animate({
            top: `${goTop}px`
        }, 0)

        const myList = document.querySelectorAll('.lnb .hot ul li')
        const parent = myList[0].parentNode

        parent.appendChild(myList[0])

        /* 뭔가를 옮기고 싶으면 조상을 찾아서 위치를 찾아야 된다 */
    })

}, 3000);

import imgData from './data.js'

/* 특정 카테고리 호버 시 우측 이미지 배너 변경 */

const category = document.querySelectorAll('.lnb .menuTop > li')

let menuImage1 = document.querySelector('.menuVisual .menuImg1 img')
let menuImage2 = document.querySelector('.menuVisual .menuImg2 img')

let categoryImgs = []

for (let i = 1; i < imgData.length; i++) {
    if (imgData[i].name == 'lnb') categoryImgs.push(imgData[i].src) 
}

category.forEach((value, index) => {
    value.addEventListener('mouseover', function(){
        
        
        menuImage1.setAttribute('src', categoryImgs[index*2])  /* 0 2 4 6 8 10 */
        menuImage2.setAttribute('src', categoryImgs[index*2+1])/* 1 3 5 7 9 11 */
    })
})

/* 로그인, 회원가입 새창 띄우기 */

let login = document.querySelector('.gnb .btn-login')
let join = document.querySelector('.gnb .btn-join')

login.addEventListener('click', () => window.open('./login.html'))
join.addEventListener('click', () => window.open('./signup.html'))