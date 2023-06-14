import imgData from './data.js'

let accProducts = document.querySelectorAll('.product-accordion .accProduct')
let pickProducts = document.querySelectorAll('.mdsPick .pickProduct')

/* lookbook 마우스 호버 */
for (let i = 0; i < accProducts.length; i++){

    let target = accProducts[i]

    /* 마우스 오버 */
    target.addEventListener('mouseover', function(){
        accProducts.forEach((value) => {
            if (value === target) {
                value.style.width = '825px'
            } else {
                value.style.width = '202.5px'
            }
        })
    })

    /* 마우스 아웃 */
    target.addEventListener('mouseout', function(){
        accProducts.forEach((value) => {
            value.style.width = '405px'
        })
    })
}

/* md pick 마우스 호버 */
for (let i = 0; i < pickProducts.length; i++){
    pickProducts[i].addEventListener('mouseover', function(){
        let hover = pickProducts[i]

        pickProducts.forEach((value) => {
            if (value === hover) {
                value.style.width = '615px'
            } else {
                value.style.width = '195px'
                value.firstElementChild.style.filter = 'brightness(20%)'
            }
        })

    })
    pickProducts[i].addEventListener('mouseout', function(){
        pickProducts.forEach((value) => {
            value.style.width = '300px'
            value.firstElementChild.style.filter = 'brightness(100%)'

        })
    })
}

const hoverContents = document.querySelectorAll('.accProduct .hoverContent')

hoverContents.forEach((content, lookbookIndex) => {

    const imgs = content.querySelectorAll('img')
    const bgImg = content.parentElement.querySelector('img.bgImg')
    const info = content.querySelector('.productInfo')

    content.addEventListener('mouseover', function(event){

        // console.log(event.target)
        
        let a = Array.from(content.children)
        // a.pop()
        // console.log(a)
        a = a.indexOf(event.target.parentElement)

        // console.log(a)

        /* 백그라운드 밝기 */
        bgImg.classList.add('gangjo-off')
        bgImg.classList.remove('gangjo-default')
        
        /* 누끼 이미지 밝기 */
        imgs.forEach((img, imgIdx) => {

            // console.log(imgIdx)
            // console.log(a)
            
            if (imgIdx === a) {
                
                img.classList.add('gangjo-on')
                img.classList.remove('gangjo-off')
            

                /* 하는 김에 상품정보도 넣기 */
                let productInfo = []

                for (let i of imgData) {
                    if (i.name === 'lookbook_hoverInfo' && i.index === lookbookIndex && i.index == lookbookIndex) {
                        productInfo.push(i)
                    }
                }

                info.querySelector('.productName').textContent = productInfo[a].product
                info.querySelector('.productNameKR').textContent = productInfo[a].productKR
                info.querySelector('.productPrice').textContent = productInfo[a].price
                info.querySelector('.productDetails').textContent = productInfo[a].description

                info.addEventListener('mouseover', function(){
                    // alert(123)
                    // img.classList.add('gangjo-on')
                    // img.classList.remove('gangjo-off')
                })

            }
            else if (a === -1) {
                true




            }
            
            else if (imgIdx !== a && a !== -1) {
                img.classList.add('gangjo-off')
                img.classList.remove('gangjo-on')
            }
        })

        // /* 상품 설명 불러오기 */
        // let yourContent = content.querySelector('bright-100')

        // /* 호버한 사진의 상품 인덱스 찾기 */


    })

    content.addEventListener('mouseleave', function(){

        bgImg.classList.add('gangjo-default')
        bgImg.classList.remove('gangjo-off')

        imgs.forEach((img) => {
            img.classList.add('gangjo-default')
            img.classList.remove('gangjo-off')
            img.classList.remove('gangjo-on')
        })
    })


})
