
let xhr = new XMLHttpRequest()
xhr.open('GET', 'js/member_data.json')
xhr.send()

xhr.onreadystatechange = function(){

    if(xhr.readyState === 4 && xhr.status === 200) {
        let userInfo = JSON.parse(xhr.responseText)

        /* 아이디 비번 찾기 */

        const id = document.querySelector('input.idBox')
        const tel = document.querySelector('select.telBox')
        const tel1 = document.querySelector('input#telBox1')
        const tel2 = document.querySelector('input#telBox2')

        tel1.addEventListener('input', function(){ /* 이건 그냥 첫 4자리 치면 넘어가는거 */
            if (this.value.length >= 4) tel2.focus()
        })

        const btn = document.querySelector('.finder button.commitBtn')
        
        btn.addEventListener('click', function(){

            if(id.value === '' || tel1.value === '' || tel2.value === '') {
                return alert('정보를 모두 입력해 주세요.')
            }
            for (let i in userInfo)
                if (tel.value+tel1.value+tel2.value == userInfo[i].phone && id.value === userInfo[i].id){
                    alert('임시 비밀번호가 발송되었습니다.')
                } else alert('잘못 입력했거나 존재하지 않는 회원입니다.')

        })
    }
}

/* 로고 링크 */
let home = document.querySelector('.logo')
home.addEventListener('click', function(){
    window.location.href = './index.html'
})
