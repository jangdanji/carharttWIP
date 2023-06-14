let xhr = new XMLHttpRequest()
xhr.open('GET', 'js/member_data.json')
xhr.send()

xhr.onreadystatechange = function(){

    if(xhr.readyState === 4 && xhr.status === 200) {
        let userInfo = JSON.parse(xhr.responseText)

        /* 로그인 */

        const loginBtn = document.querySelector('.commitBtn')

        loginBtn.addEventListener('click', function(){

            let id = document.querySelector('.inputLoginBox input#idBox').value
            let pw = document.querySelector('.inputLoginBox input#pwBox').value

            if (id == '' || pw == '') return alert('아이디 또는 패스워드를 입력해주세요.')

            for (let i in userInfo) {
                if (userInfo[i].id === id && userInfo[i].pw === pw) {
                    alert('환영합니다 ' + id + '님!')
                    window.location.href = './index.html'
                }
                else alert('아이디 또는 비밀번호가 일치하지 않습니다.')
            }
        })
    }
}

/* 로그인 창 input 클릭 할 때 밑줄 생기기 */

let inputTextBoxes = document.querySelectorAll('.login label.box input')

for (let i = 0; i < inputTextBoxes.length; i++) {
    inputTextBoxes[i].addEventListener('focus', function(){
        inputTextBoxes[i].parentNode.classList.add('focusOn')
    })
    inputTextBoxes[i].addEventListener('blur', function(){
        inputTextBoxes[i].parentNode.classList.remove('focusOn')
    })
}

/* 로고 링크 */
let home = document.querySelector('.logo')
home.addEventListener('click', function(){
    window.location.href = './index.html'
})
