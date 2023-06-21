
/* 잠긴 게시글 클릭 */
// let lockedPosts = document.querySelectorAll('.qna-board .qna-post.locked')

// lockedPosts.forEach((post) => {
//     post.addEventListener('click', function(){
//         alert('비공개 게시글입니다.')
//     })
// })

/* 오늘 날짜 추출 */
function getToday(){
    const dt = new Date()
    let year = dt.getFullYear()
    let month = (dt.getMonth()+1).toString()
    month = month.length == 1 ? '0' + month : month
    let day = dt.getDate().toString()
    day = day.length == 1 ? '0' + day : day
    return `${year}-${month}-${day}`
}

/* 리뷰 카운트 */
function reviewCounting(){
    const reviewCount = document.querySelector('.product-reviews > p > span:first-child')
    reviewCount.textContent = `전체 (총 ${document.querySelectorAll('.product-reviews .review').length}건)`
}



/* QNA 카운트 */
function QNACounting(){
    const howmanyQNA = document.querySelector('.qna-board > p')
    const QNAposts = document.querySelectorAll('.qna-board .qna-post')
    howmanyQNA.textContent = `전체 (총 ${QNAposts.length}건)`
}



/* 별점 클릭 */
const stars = document.querySelectorAll('.review-write p i')

stars.forEach((star, index) => {
    star.addEventListener('click', function(){

        const att = star.getAttribute('class')

        if (att == 'fa-star far'){ /* 빈 별 */
            
            for (let i = 0; i <= index; i++) {
                console.log(i)
                stars[i].classList.remove('far')
                stars[i].classList.add('fas')
            }

        } else if (att == 'fa-star fas') { /* 채워진 별 */

            for (let i = 4; i > index; i--) {
                console.log(i)
                stars[i].classList.remove('fas')
                stars[i].classList.add('far')
            }
        }
    })
})





/* 리뷰 작성 div 출력 */

const reviewDisplayBtn = document.querySelector('.product-reviews .btn-review-write')
const reviewWrite = document.querySelector('.product-reviews .review-write')

$(reviewDisplayBtn).click(function(){
    $(this).hide()
    $(reviewWrite).css('display', 'flex')
})


/* 리뷰 작성 */
const reviewWriteBtn = document.querySelector('.review-write .review-submit')

reviewWriteBtn.addEventListener('click', function(){

    const reviewText = document.querySelector('.product-reviews .review-write input').value /* 리뷰 내용 */
    const star = document.querySelector('.review-write p span').innerHTML /* 별점 */
    const today = getToday() /* 현재 날짜 */
    const yourID = 'fu****' /* 아이디 가져오기 (아무거나 일단..) */
    

    // const stars = document.querySelector('.review-write p i')
    const blackStars = document.querySelectorAll('.review-write p i.fas')

    if (reviewText.length < 10) alert('리뷰는 10자 이상 작성해주세요!')
    else if (blackStars.length == 0) alert('별점을 입력해 주세요!')
    else{

        const review = document.createElement('div')
        review.setAttribute('class', 'review')
    
        const reviewBox = document.querySelector('.reviews-wrap')
        
        review.innerHTML = `
            <span>${reviewText} <i class="fas fa-trash-alt"></i></span>
            <div class="star-point">${star}</div>
            <div class="review-date">${today}</div>
            <div class="review-id">${yourID}</div>
        `
    
        reviewBox.appendChild(review)

        /* 리뷰 삭제 */
        const deleteReview = reviewBox.querySelectorAll('i.fa-trash-alt')
        deleteReview.forEach((del) => {
            del.addEventListener('click', function(){
                let removeTargetReview = del.closest('.review')
                let removeConfirm = confirm('삭제하시겠어요?')
                if (removeConfirm) {
                    removeTargetReview.remove()
                    reviewCounting()
                }
            })
        })

        /* 초기화 */
        document.querySelector('.product-reviews .review-write input').value = ''
        const resetStars = document.querySelectorAll('.review-write p i')
        resetStars.forEach((star) => {
            star.classList.remove('fas')
            star.classList.add('far')
        })

        alert('작성되었습니다!')
        
        const reviewRecount = document.querySelector('.product-reviews > p > span:first-child')
        reviewRecount.textContent = `전체 (총 ${document.querySelectorAll('.product-reviews .review').length}건)`

    }
})


/* 열린 게시글 클릭 */
const openablePosts = document.querySelectorAll('.qna-board .qna-post')

openablePosts.forEach((post) => {
    $(post).click(function(){
        $(this).next().toggle()
    })
})


/* 답변 작성 버튼 */

function addModBtn(){
    const answerPosts = document.querySelectorAll('.qna-board-wrap .answer p')
    answerPosts.forEach((post) => {

    const isEmpty = post.querySelectorAll('i.fa-edit')

    if (isEmpty.length != 0) {
        return
    }
    
    const editBtn = document.createElement('i')
    editBtn.classList.add('fas')
    editBtn.classList.add('fa-edit')

    editBtn.addEventListener('click' , function(){
        const p = this.parentElement
        const adminZone = this.parentElement.parentElement.querySelector('.input-answer')
        
        p.style.display = 'none'
        adminZone.style.display = 'block'
    })

    post.appendChild(editBtn)



    
    })
}

function addSubmitBtn(){
    const answerBtn = document.querySelectorAll('.input-answer .answer-submit')
    answerBtn.forEach((btn) => {
        btn.addEventListener('click', function(){
            const textBox = this.previousElementSibling
            const p = this.parentElement.previousElementSibling
            const span = this.parentElement.previousElementSibling.querySelector('span')

            span.textContent = textBox.value
            p.style.display = 'block'
            this.parentElement.style.display = 'none'

            const father = this.parentElement.parentElement
            father.classList.remove('pending')

            const changeStatus = father.previousElementSibling.querySelector('.status')
            changeStatus.textContent = '답변완료'
            
            })
    })
}


const questionBoard = document.querySelector('.qna-board-wrap')
const questionBtn = document.querySelector('.qna .btn-question')
const questionWrite = document.querySelector('.qna .question-write')
const questionTextBox = questionWrite.querySelector('input.answer')
const questionSubmit = questionWrite.querySelector('.question-submit')
const questionCheck = questionWrite.querySelector('.private-check input')

/* 문의하기 버튼 */
questionBtn.addEventListener('click', function(){
    this.style.display = 'none'
    questionWrite.style.display = 'flex'
})

/* 본격적으로 문의하기 */
questionSubmit.addEventListener('click', function(){
    const private = document.querySelector('.private-check input').checked ? '<i class="fas fa-lock"></i>' : ''
    const qText = questionTextBox.value
    const today = getToday()
    const yourID = 'fu****' /* 아디는 일단 아무거나 */


    const deleteQuestion = document.createElement('i')
    deleteQuestion.classList.add('fas')
    deleteQuestion.classList.add('fa-trash-alt')
    deleteQuestion.style.marginLeft = '10px'
    deleteQuestion.style.color = 'red'
    deleteQuestion.addEventListener('click', function(){
        let a = $(this).closest('.qna-post')
        let b = a.next()

        if (confirm('문의를 삭제하시겠습니까?')) {
            a.remove()
            b.remove()
            QNACounting()
        }
        
    })

    if (qText.length < 10) {
        alert('10자 이상 작성해주세요!')
        return
    }

    let questionPost = document.createElement('div')
    questionPost.classList.add('qna-post')

    questionPost.innerHTML = `
        <p class="status">미처리</p>
        <p class="title">${qText} ${private}</p>
        <p class="date">${today}</p>
        <p class="user">${yourID}</p>
    `

    let title = questionPost.querySelector('.title')

    title.appendChild(deleteQuestion)

    let answer = document.createElement('div')
    answer.classList.add('answer')
    answer.classList.add('pending')

    answer.innerHTML = `            
        <b><i class="fas fa-sort-down"></i> [CARHARTT] 관리자</b>
        <p>
            <span></span>
        </p>
        <div class="input-answer">
            <input type="text"></input>
            <div class="answer-submit">답변하기</div>
        </div>
    `
    /* 그냥 다 하자 로드될때 안 먹힐 수도 있다 */
    
    // $(answerSubmit).click(function(){
    //     $(this).parent().toggle()
    // })



    
    $(questionPost).click(function(){
        $(answer).toggle()
    })

    /* 최종 삽입 */
    $(questionBoard).prepend(answer) /* prepend라서 answer부터.. */
    $(questionBoard).prepend(questionPost)

    questionTextBox.value = ''
    questionCheck.checked = false

    

    console.log()


    addModBtn()
    addSubmitBtn()

    QNACounting()


    alert('등록 되었습니다!')


})

/* 모든 수정/작성 버튼 이벤트 걸기 (동적인 요소들어오면 이거 한번 더 해줘야됨) */

addModBtn()
addSubmitBtn()
reviewCounting()
QNACounting()



// let answerSubmit = document.querySelectorAll('.input-answer .answer-submit')
    
// answerSubmit.forEach((answer) => {
//     answer.addEventListener('click', function(){

//         let textZone = answer.parentElement.previousElementSibling
//         textZone.style.display = 'block'

//         let adminZone = answer.parentElement
//         adminZone.style.display = 'none'

//         let textData = answer.previousElementSibling
//         textZone.innerHTML = `${textData.value} <i class="fas fa-edit"></i>`

//         /* 동적으로 만든거라서 여기서 한번 더 해야되나..? */

//         let editBtns = document.querySelectorAll('.answer .fa-edit')

//         editBtns.forEach((btn) => {
//             btn.addEventListener('click' , function(){
//                 adminZone.style.display = 'block'
//                 btn.parentElement.style.display = 'none'
//             })
//         }) 

//     })
// })

/* 수정 버튼 */



/* 미처리 문의 */

// const pendingAnswers = document.querySelectorAll('.answer')

                 
// pendingAnswers.forEach((answer) => {
//     const inputAnswer = document.createElement('div')
//     inputAnswer.setAttribute('class', 'answer')
//     // inputAnswer.setAttribute('class', 'answer')

//     inputAnswer.innerHTML = `
//             <div class="input-answer">
//                 <b><i class="fas fa-sort-down"></i> [CARHARTT] 관리자</b>
//                 <input type="text"></textarea>
//                 <div class="answer-submit">답변하기</div>
//             </div>`

//     answer.appendChild(inputAnswer)
    
// })


// /* 미처리 문의 */

// const replyPost = document.querySelector('.qna-post .answer.pending')

// replyPost.forEach((post) => {

//     let replyInput = post.querySelector('.input-answer')

//     let replyText = post.querySelector('input')
//     let replyBtn = post.querySelector('.answer-submit')

//     replyBtn.addEventListener('click', function(){

//     console.log(replyText)
//     let replyElement = document.createElement('p')
//     replyElement.textContent = replyText.value

//     /* 수정 구현 */

//     let modifyBtn = document.createElement('span')
//     modifyBtn.innerHTML = ' <i class="fas fa-edit"></i>'
//     modifyBtn.style.color = '#545ADC'
//     modifyBtn.style.cursor = 'pointer'

//     replyElement.appendChild(modifyBtn)
//     post.appendChild(replyElement)

//     replyInput.style.display = 'none'
//     modifyBtn.addEventListener('click', function(){
//         replyInput.style.display = 'flex'
//         post.removeChild(replyElement)
//     })

//     /* 미처리 -> 답변완료 */
    
//     $(post).prev().children('.status').text('답변완료')

// })

// })



/* category bar 스크롤 */

const categoryBars = document.querySelectorAll('.category-bar')

categoryBars.forEach((gory) => {
    let gorys = gory.querySelectorAll('div')

    gorys.forEach((g, index) => {

        g.addEventListener('click', function(){

            let arrival = categoryBars[index]

            arrival.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
        })
    })
})