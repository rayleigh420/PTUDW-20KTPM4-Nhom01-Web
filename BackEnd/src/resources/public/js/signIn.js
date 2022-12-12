console.log(123)
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

let password = document.querySelector('#password')

let btnSubmit = document.querySelector('#signInForm');
// btnSubmit.onsubmit = async (e) => {
//     console.log(123)
//     e.preventDefault();

//     window.location.href = "http://localhost:3000/list"

//     // let res = await fetch("/signIn", {
//     //     method: 'post',
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify({
//     //         email: "nhatduy0409@gmail.com",
//     //         password: password.value
//     //     }),
//     // })
//     // console.log(res);
//     // if (res.redirected == true) {
//     //     res.redirected('/')
//     // }

// }