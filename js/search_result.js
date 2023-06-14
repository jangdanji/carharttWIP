import imgData from "./data.js"

function comma(price){
    let result = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return result
}

let urlParams = new URLSearchParams(window.location.search);
let searchQuery = urlParams.get('search'); // "example"
let pattern = new RegExp(searchQuery, 'i')



/* 예외 발생 : 셔츠를 찾으면 티셔츠도 같이 찾아짐 */
let shirt
if (searchQuery === '셔츠' || /shirt/i.test(searchQuery)) shirt = true
else shirt = false



console.log(pattern)

const searchResult = document.querySelector('.search-result .result-list')
let dataStat = document.querySelector('.search-result p.search-data')

const productList = imgData.filter((value) => {
    return value.name === 'product-list'
})

const resultList = productList.filter((value) => {
    if (shirt == true && value.category == 'tshirt') {
        // console.log('셔츠 예외 발생')
    } else {
        return value.productKR.includes(searchQuery) || pattern.test(value.product)
    }
    
})

// let productList = []
// let resultList = []

// imgData.forEach((product) => { /* 모든 상품 뽑기 */
//     if (product.name === 'product-list') {
//         productList.push(product)
//     }
// })


// productList.forEach((pd) => { /* 검색어가 상품 이름에 들어가면 뽑기 */
//     if (shirt == true && pd.category == 'tshirt') {
//         // console.log('셔츠 예외 발생')
//     } else if (pd.productKR.includes(searchQuery) || pattern.test(pd.product)) {
//         resultList.push(pd)
//     } else {
//         console.log(pd.productKR.includes(searchQuery))
//         console.log(pd.productKR)
//         console.log(searchQuery)
//     }
// })



console.log(resultList)

if (resultList.length == 0) {
    let nothing = document.createElement('div')
    nothing.setAttribute('class', 'product-box')
    nothing.style.width = '100%'
    nothing.style.textAlign = 'center'
    nothing.style.fontSize = '20px'

    nothing.innerHTML = '<i class="fas fa-exclamation-circle"></i> 조건에 맞는 상품이 존재하지 않아요!'

    searchResult.appendChild(nothing)
    dataStat.textContent = '검색결과 (총 0건)'

} else {
    resultList.forEach((product, index) => {

        // console.log(i)
    
        let product_box = document.createElement('div')
        product_box.setAttribute('class', 'product-box')
        
        product_box.innerHTML = `
            <div class="imgBox">
                <a href="./detail.html">
                    <img src=${product.src[0]} alt=\"product-image\">
                    <img src=${product.src[1]} alt=\"product-image\">
                </a>
            </div>
            
            <div class="product-info">
                <div class="product-status">
                    <span></span>
                    <span></span>
                </div>
                <div class="product-text">
                    <p class="product-name-kr">${product.productKR}</p>
                    <p class="product-name-eng">${product.product}</p>
                    <p class="product-price">&#8361; ${comma(product.price)}</p>
                </div>
                <div class="product-buy">
                    <span><i class="fas fa-shopping-cart"></i></span>
                    <span><i class="fas fa-heart"></i></span>
                </div>
            </div>
        `
        /* 네번째 박스는 margin right 0 */
        /* 3, 7, 11 */
        if ((index+1) % 4 == 0) product_box.style.marginRight = '0'

        searchResult.appendChild(product_box)
        dataStat.textContent = `검색결과 (총 ${resultList.length}건)`
    })
    
}

