import imgData from "./data.js"

/* sub page 상품 import */

let productList = document.querySelector('.products .product-list')

function removeBox(){
    let boxRemoveTarget = document.querySelectorAll('.products .product-list .product-box')
    boxRemoveTarget.forEach((value) => value.remove())
}

function comma(price){
    let result = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return result
}

function sortProducts(products){
    let selectFilter = document.getElementById('productSelector')
    if (selectFilter.value == "newest") products.sort((a, b) => a.productNum - b.productNum)
    else if (selectFilter.value == "hot") products.sort((a, b) => a.sale - b.sale)
    else if (selectFilter.value == "price-low") products.sort((a, b) => a.price - b.price)
    else if (selectFilter.value == "price-high") products.sort((a, b) =>  b.price - a.price)
}

function importData(valueCategory, valueColor, valuePrice) {

    /* 초기화 */
    products = []
    const pagenation = document.querySelector('.products .pagination')
    let resetPage = pagenation.querySelectorAll('span')
    removeBox()
    resetPage.forEach((page) => pagenation.removeChild(page))



    sortProducts(products)

    /* products가 채워졌으니 페이지 만들기 */

    let pages = products.length / 12 /* 12개씩 나누기 페이지당 12개 */

    if (products.length % 12 !== 0) { /* 12의 배수가 아니라면 그냥 반내림 하고 1 추가*/
        pages = Math.floor(pages) + 1}

    console.log('상품 총 갯수 : ' + products.length + '개')
    console.log(pages + '개의 페이지를 만들어야 함')

    /* 페이지 만들기 */
    for (let i = 1; i <= pages; i++) {
        let page = document.createElement('span')
        page.textContent = i

        pagenation.appendChild(page)
    }

    /* 페이지 누르면 12개 뽑기 */

    let paginationSpan = document.querySelectorAll('.pagination span')

    paginationSpan.forEach((value, index) => {
        value.addEventListener('click', function(){
            console.log('페이지 인덱스 : ' + index)
            removeBox()
            get12(index, products)
            paginationSpan.forEach((value) => value.classList.remove('active'))
            value.classList.add('active')

        })
    })

    try{
        paginationSpan[0].classList.add('active') 
    }
    catch{
        /* 상품이 아예 없으면 오류남.. */
    }
    

}





/* 12개 뽑기 */
function get12(index, products){

    if (products.length == 0) {
        let nothing = document.createElement('div')
        nothing.setAttribute('class', 'product-box')
        nothing.style.width = '100%'
        nothing.style.textAlign = 'center'
        nothing.style.fontSize = '20px'

        nothing.innerHTML = '<i class="fas fa-exclamation-circle"></i> 조건에 맞는 상품이 존재하지 않아요!'

        productList.appendChild(nothing)

    }

    let indexStart = 12 * index /* 1, 13, 25, 38 */
    let indexEnd

    /* 없는 값 불러오면 자바스크립트는 undefined를 반환 */
    if (products[indexStart+12] === undefined) indexEnd = products.length - 1/* 뒤에 값이 12개 이하로 있으면 */
    else if (products[indexStart+12] !== undefined) indexEnd = indexStart + 12 - 1/* 뒤에 값이 12개 더 있으면 */

    console.log('시작 : ' + indexStart + '번째 상품')
    console.log('끝 : ' + indexEnd + '번째 상품')


    for (let i = indexStart; i <= indexEnd; i++) {

        // console.log(i)

        let product_box = document.createElement('div')
        product_box.setAttribute('class', 'product-box')
        
        product_box.innerHTML = `
            <div class="imgBox">
                <a href="./detail.html">
                    <img src=${products[i].src[0]} alt=\"product-image\">
                    <img src=${products[i].src[1]} alt=\"product-image\">
                </a>
            </div>
            
            <div class="product-info">
                <div class="product-status">
                    <span></span>
                    <span></span>
                </div>
                <div class="product-text">
                    <p class="product-name-kr">${products[i].productKR}</p>
                    <p class="product-name-eng">${products[i].product}</p>
                    <p class="product-price">&#8361; ${comma(products[i].price)}</p>
                </div>
                <div class="product-buy">
                    <span><i class="fas fa-shopping-cart"></i></span>
                    <span><i class="fas fa-heart"></i></span>
                </div>
            </div>
        `
        /* 세번째 박스는 margin right 0 */
        /* 2, 5, 7 */
        if ((i+1) % 3 == 0) product_box.style.marginRight = '0'
        productList.appendChild(product_box)
    }
}


/* 선택된 필터 추출하기 */

const AllFilter = document.querySelectorAll('.side-filter label input')

let checkList = []

AllFilter.forEach((filter) => {
    filter.addEventListener('change', function(){

        let products = []

        let data = this.getAttribute('data')

        if (this.checked) checkList.push(data)
        else if (!this.checked) {
            let index = checkList.indexOf(data)
            checkList.splice(index, 1)
        }

        let clothChecked = checkList.filter(check => check.includes('cloth'))
        let priceChecked = checkList.filter(check => check.includes('price')) 
        let colorChecked = checkList.filter(check => check.includes('color')) 

        // console.log(`${clothChecked}, ${priceChecked}, ${colorChecked}`)

        imgData.forEach((value) => {

            let clothCheck /* 카테고리 분류 */
            let colorCheck /* 색상 분류 */
            let priceCheck /* 가격 분류 */

            if (clothChecked.length == 0) clothCheck = true
            else clothCheck = clothChecked.some((cloth) => value.category == cloth)

            if (colorChecked.length == 0) colorCheck = true
            else colorCheck = colorChecked.some((color) => value.color == color)

            if(priceChecked.length == 0) priceCheck = true
            else {
                priceCheck = priceChecked.some((priceIdx) => {

                    const p = value.price
                    priceIdx = priceIdx.replace('price-', '')
                    priceIdx = parseInt(priceIdx)

                    let priceFilters = [
                        p <= 50000,
                        50000 <= p && p <= 150000,
                        150000 <= p && p <= 250000,
                        250000 <= p && p <= 500000,
                        500000 < p]

                    return priceFilters[priceIdx]

                })
            }

            /* 모든 값이 true라면 최종적으로 필터링 통과됨 */
            if (clothCheck && priceCheck && colorCheck) products.push(value)

            sortProducts(products) /* products 정렬하기 */

            console.log(products)
        })
    })
})



// let selectFilter = document.getElementById('productSelector')
// selectFilter.addEventListener('change', function(){
//     importData(categoryCheck, colorCheck, priceCheck)
//     get12(0, products)
// })

// /* 기본 */

// importData(categoryCheck, colorCheck, priceCheck)
// get12(0, products)


/* 초기화 */

const filterReset = document.querySelector('.filter-category span.filter-reset')

filterReset.addEventListener('click', function(){
    filterClothes.forEach((checkbox) => checkbox.checked = false)
    filterPrice.forEach((checkbox) => checkbox.checked = false)
    filterColor.forEach((checkbox) => {
        checkbox.checked = false

        /* 이건 동적인 요소라서 수동으로 ... */
        checkbox.parentElement.querySelector('i.fa-check').style.display = 'none'
    })
    // filterDiscount.forEach((checkbox) => checkbox.checked = false)

    categoryCheck = []
    colorCheck = []
    priceCheck = []

    importData(categoryCheck, colorCheck, priceCheck)
    get12(0, products)
    
})