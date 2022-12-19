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
let re_password = document.querySelector('#rePassword')
let user = {
    isLogin: false
}

let errorMess = ''

let btnSubmit = document.querySelector('.btn-submit');
btnSubmit.onmouseover = async () => {
    console.log(password.value)
    console.log(re_password.value)
    if (password.value == re_password.value) {
        console.log(123123123)
        if (email.value && password.value) {

            let res = await fetch('user/signUp', {
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
    else {
        errorMess = 'Re-enter password does not match!'
    }
}

btnSubmit.onclick = (e) => {
    e.preventDefault
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
