const finderBtn = document.querySelector('.detail-info .size-finder')
const modal = document.querySelector('.full-screen-modal')

finderBtn.addEventListener('click', function(){
    modal.style.visibility = 'visible'
})

const exitBtn = document.querySelector('.full-screen-modal p.exit')

exitBtn.addEventListener('click', function(){
    modal.style.visibility = 'hidden'
})

const find = modal.querySelector('.check-btn')

function getBmi(height, weight) {
    console.log(`${height}cm, ${weight}kg`)
    let bmi = weight / ((height/100) * (height/100))
    console.log(bmi)
    return bmi
}


find.addEventListener('click', function(){
    let yourHeight = modal.querySelector('.your-height input').value
    let yourWeight = modal.querySelector('.your-weight input').value

    let result = '?'

    if (yourHeight.length == 0 || yourHeight.length == 0) alert('정보를 올바르게 입력해주세요!')

    else if (165 <= yourHeight && yourHeight < 172) {
        
        let bmi = getBmi(yourHeight, yourWeight)

        console.log(bmi)

        if (bmi < 18.5) result = 'XS';
        else if (bmi < 22) result = 'S';
        else if (bmi < 23.5) result = 'M';
        else if (bmi < 24.5) result = 'L';
        else alert('해당 사이즈의 상품이 존재하지 않습니다..')

    } else if (172 <= yourHeight && yourHeight < 178) {

        let bmi = getBmi(yourHeight, yourWeight)

        if (bmi < 18.5) result = 'S';
        else if (bmi < 22) result = 'M';
        else if (bmi < 23.5) result = 'L';
        else if (bmi < 24.5) result = 'XL';
        else alert('해당 사이즈의 상품이 존재하지 않습니다..')
        

    } else if (178 <= yourHeight && yourHeight < 184) {

        let bmi = getBmi(yourHeight, yourWeight)

        if (bmi < 18.5) result = 'M';
        else if (bmi < 22) result = 'L';
        else if (bmi < 23.5) result = 'XL';
        else alert('해당 사이즈의 상품이 존재하지 않습니다..')
        

    } else if (184 <= yourHeight && yourHeight < 192) {

        let bmi = getBmi(yourHeight, yourWeight)

        if (bmi < 18.5) result = 'L';
        else if (bmi < 22) result = 'XL';
        else alert('해당 사이즈의 상품이 존재하지 않습니다..')
        

    } else if (yourHeight < 163 || yourHeight > 192) {

        alert('해당 사이즈의 상품이 존재하지 않습니다..')

    } else alert('해당 사이즈의 상품이 존재하지 않습니다..')

    

    let sizeResult = document.querySelector('.my-size p.size-result')
    sizeResult.textContent = result
})


/* 

bmi 계산 :

bmi 18.5 이하 : 저체중
    18.5 ~ 23 : 정상
    23 ~ 25 : 과체중
    25 ~ : 비만 (오차범위 쳐서 24부터)

저체중 / 정상 / 과체중 / 비만 / 고도비만

165 ~ 171 XS S M L
172 ~ 177 S M L XL
178 ~ 184 M L XL
185 ~ 192 L XL

일단 키로 분류 하고 bmi 단계별로 사이즈 나누기가 괜찮은듯?


*/