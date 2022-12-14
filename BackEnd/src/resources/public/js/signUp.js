
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
let rePassword = document.querySelector('#rePassword')


let btnSubmit = document.querySelector('.btn-submit');
// btnSubmit.onclick = async (e) => {
//     e.preventDefault();

//     let res = await fetch("/signUp", {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             a: "1",
//             b: "2"
//         }),
//     })
//     console.log("res: ", res);
//     if (password.value == rePassword.value) {
//     }

// }
