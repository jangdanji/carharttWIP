import imgData from './data.js'

function imgSetter (imgCategory, path){

    let srcs = []
    let details = []

    for (let i of imgData) {
        if (i.name === imgCategory) {
            srcs.push(i.src)
            details.push(i.productKR)
        }
    }

    // console.log(srcs)

    path.forEach((value, index) => {
        value.setAttribute('src', srcs[index][0])

        let hv = document.createElement('img')
        hv.style.position = 'absolute'
        hv.style.left = '0'
        hv.style.opacity = '0'
        hv.style.transition = '0.1s'

        let detail = document.createElement('p')
        detail.style.position = 'absolute'
        detail.style.bottom = '0'
        detail.style.padding = '10px'
        detail.style.width = '300px'
        detail.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
        detail.style.fontWeight = 'bold'
        detail.textContent = details[index]

        if (srcs[index].length > 1) hv.setAttribute('src', srcs[index][1])

        value.parentElement.appendChild(hv)
        value.parentElement.appendChild(detail)


        hv.addEventListener('mouseover', () => hv.style.opacity = '1')
        hv.addEventListener('mouseout', () => hv.style.opacity = '0')
        }
    )



    

}
const VisualSlides = document.querySelectorAll('.visual-main .swiper-slide img')
const bestSlides = document.querySelectorAll('.best-product .swiper-slide img')
const newSlides = document.querySelectorAll('.new-product .swiper-slide img')
const lookbooks = document.querySelectorAll('.product-accordion .accProduct img')
const mds = document.querySelectorAll('.mdsPick .pickProduct img')
const instaPics = document.querySelectorAll('.instagram .instaPicture img')

imgSetter('visual', VisualSlides)
imgSetter('best', bestSlides)
imgSetter('new', newSlides)
imgSetter('instagram', instaPics)



/* 인스타그램 링크 달기 */

let instaSrc = []
const insta = document.querySelectorAll('.instagram .instaPicture')
for (let i of imgData) {
    if (i.name === 'instagram') {instaSrc.push(i.path)}
}

insta.forEach((value, index) => {
    value.addEventListener('click', function(){
        window.location.href = instaSrc[index]
    })
})