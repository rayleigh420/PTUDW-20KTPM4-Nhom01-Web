let isLogin = JSON.parse(localStorage.getItem('Auth')).isLogin
if (isLogin) {
    location.assign('/');
}

let eyePassword = document.querySelectorAll('.eye');

eyePassword.forEach(item => {
    item.onclick = () => {
        let inputPassword = item.previousElementSibling
        if (inputPassword.type == 'password') {
            inputPassword.setAttribute('type', 'text')
        }
        else {
            inputPassword.setAttribute('type', 'password')
        }
    }
})

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let user = {
    isLogin: false
}
let errorMess = ""

let btnSubmit = document.querySelector('.btn-submit');
btnSubmit.onmouseover = async () => {
    if (email.value && password.value) {

        let res = await fetch('user/signIn', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            }),
        })

        let result = await res.json()
        errorMess = result.errMessage
        if (result.errCode == 0) {
            user = {
                isLogin: true,
                email: result.user.email,
                name: result.user.name
            }
        }
    }
}

btnSubmit.onclick = (e) => {
    console.log(errorMess)
    if (errorMess == 'OK') {
        if (user.isLogin) {
            localStorage.setItem('Auth', JSON.stringify(user))
        }
    }
    else {
        e.preventDefault();
        let error = document.querySelector('.errMess')
        error.innerHTML = `<ion-icon name="alert"></ion-icon>${errorMess}`
    }
}