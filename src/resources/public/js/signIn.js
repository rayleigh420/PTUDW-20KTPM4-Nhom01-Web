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

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let user = {
    isLogin: false
}
let errorMess = "Something went wrong!"
let role = ""

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
        role = result.user.role
        if (result.errCode == 0) {
            user = {
                isLogin: true,
                email: result.user.email,
                name: result.user.name
            }
        }
    }
}

btnSubmit.onmouseout = () => {
    errorMess = 'Something went wrong';
    role = '';
}

btnSubmit.onclick = (e) => {
    console.log(errorMess)
    if (errorMess == 'OK') {
        if (role == "user") {
            if (user.isLogin) {
                localStorage.setItem('Auth', JSON.stringify(user))
            }
        }
    }
    else {
        e.preventDefault();
        let error = document.querySelector('.errMess')
        error.innerHTML = `<ion-icon name="alert"></ion-icon>${errorMess}`
    }
}