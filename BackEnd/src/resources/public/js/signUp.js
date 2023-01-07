let userAuth = JSON.parse(localStorage.getItem('Auth'))
if (userAuth) {
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

let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let re_password = document.querySelector('#rePassword')

let user = {
    isLogin: false
}
console.log(123)
let errorMess = ''

let btnSubmit = document.querySelector('.btn-submit');
btnSubmit.onmouseover = async () => {
    console.log(password.value)
    console.log(re_password.value)
    if (password.value == re_password.value) {
        if (email.value && password.value) {

            let res = await fetch('user/signUp', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    password: password.value,
                }),
            })

            let result = await res.json()
            console.log(result.user)
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
