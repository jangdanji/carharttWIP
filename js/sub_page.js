/* 서브페이지 색상 필터 체크 표시 */

const filterColorCheck = document.querySelectorAll('.filter-color label input')

filterColorCheck.forEach((checkbox) => {
    checkbox.addEventListener('change', function(){
        $(checkbox).next().toggle()
    })
})