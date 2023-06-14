/* 회원가입 검사 */

const id = document.getElementById('idBox')
const pw = document.getElementById('pwBox')
const pwChk = document.getElementById('pwChkBox')
const name = document.getElementById('nameBox')
const tel = document.querySelectorAll('.telBoxWrap .telBox')
const addr = document.getElementById('addrBox')
const signupBtn = document.querySelector('button.commitBtn')

const allInput = document.querySelectorAll('label.box input')

id.addEventListener('change', function(){
    if (id.value.length <= 4) {
        checking(this, '아이디는 4자리 이상으로 만들어 주세요!', 'red')
    } else {
        checking(this, '멋진 아이디네요!', '#545ADC')
    }
})

pw.addEventListener('change', function(){
    if (pw.value.length <= 8 || pw.value.length >= 16) {
        checking(this, '8~16자리 비밀번호를 만들어 주세요!', 'red')
    } else {
        checking(this, '올바른 비밀번호 입니다.', '#545ADC')
    }
})

pwChk.addEventListener('change', function(){
    if (pw.value != pwChk.value) {
        checking(this, '비밀번호가 일치하지 않아요!', 'red')
    } else {
        checking(this, '비밀번호가 일치합니다!', '#545ADC')
    }
})

tel[1].addEventListener('input', function(){
    if (this.value.length >= 4) tel[2].focus()
})

tel[1].addEventListener('change', function(){
    if (this.value.length <= 3) {
        checking(this, '전화번호 4자리를 올바르게 입력해주세요!', 'red', this.parentElement.parentElement.querySelector('.textAlert'))
    } else {
        checking(this, '', '#545ADC', this.parentElement.parentElement.querySelector('.textAlert'))
    }
})

tel[2].addEventListener('change', function(){
    if (this.value.length <= 3) {
        checking(this, '전화번호 4자리를 올바르게 입력해주세요!', 'red', this.parentElement.parentElement.querySelector('.textAlert'))
    } else {
        checking(this, '', '#545ADC', this.parentElement.parentElement.querySelector('.textAlert'))
    }
})

signupBtn.addEventListener('click', function(){
    let alerts = document.querySelectorAll('span.textAlert')

    for (let i = 0; i < alerts.length; i++) {
        if (alerts[i].style.color == 'red') return alert('입력한 정보를 다시 확인해 주세요!'); 
    }

    for (let i = 0; i < allInput.length; i++) {
        if (allInput[i].value == '') return alert('정보를 모두 입력해 주세요!!')
    }

    if (term1.checked != true || term2.checked != true) return alert('약관에 모두 동의해주세요!')

    alert('가입되었습니다!');

    window.location.href = './login.html'
    
})

function checking (element, text, color, alertSpan=element.previousElementSibling) {
    if (element.value == '') return

    alertSpan.textContent = text
    alertSpan.style.color = color
    alertSpan.style.float = 'right'
    alertSpan.style.fontSize = '12px'

    if (color=='red') element.select()
}

/* 약관 동의 */

const termAll = document.getElementById('termAll')
const term1 = document.getElementById('term1')
const term2 = document.getElementById('term2')

termAll.addEventListener('change', function(){
    if (termAll.checked == true) {
        term1.checked = true; term2.checked = true;
    } else {
        term1.checked = false; term2.checked = false;
    }
})

term1.addEventListener('change', function(){
    if (term1.checked == term2.checked == true) termAll.checked = true
})

term2.addEventListener('change', function(){
    if (term1.checked == term2.checked == true) termAll.checked = true
})


