import imgData from './data.js'

/* 색상 선택 */
let sortColor = document.querySelectorAll('.detail-info .color div')
const miniView = document.querySelectorAll('.detail-view .img-small div img')

/* 초기화 */
sortColor[0].style.border = '3px solid gray'

sortColor.forEach((cloth) => {

    cloth.addEventListener('click', function(){

        let color = this.getAttribute('data-color')
        let srcs

        for (let i = 0; i < imgData.length; i++) {
            if(imgData[i].name == 'detail' && imgData[i].color == color)  {
                srcs = imgData[i].src
                break
            }
        }

        let thumbnail = document.querySelector('.detail-view .img-thumb img')
        thumbnail.setAttribute('src', srcs[0])

        miniView.forEach((value, index) => {
            value.setAttribute('src', srcs[index])
        })

        /* 클릭하면 border 강조 */

        sortColor.forEach(value => value.style.border = '3px solid #eee')
        this.style.border = '3px solid gray'
    })
})

const sizeBtns = document.querySelectorAll('.size div')

sizeBtns.forEach((btn)=>{
    btn.addEventListener('click', function(){
        sizeBtns.forEach(btn => btn.style.border = '3px solid #eee')
        btn.style.border = '3px solid gray'
    })
    
})

let thumbnailSmall = document.querySelectorAll('.detail-view .img-small div img')
let thumbnail = document.querySelector('.detail-view .img-thumb img')


thumbnailSmall.forEach((img) => {
    img.addEventListener('click', function(){
        thumbnail.setAttribute('src', img.getAttribute('src'))
    })
})

/* 맨 처음꺼 클릭 */
sortColor[0].click()