let edit = document.querySelector('.edit_span')
edit.onclick = () => {
    localStorage.setItem('Info', JSON.stringify({
        name: document.querySelector('.name_span span').textContent,
        phone: document.querySelector('.form_phone').value,
        email: document.querySelector('.form_email').value,
        cmnd: document.querySelector('.form_cmnd').value,
        country: document.querySelector('.form_country').value,
        fromPlaces: document.querySelector('.form_fromPlaces').value,
        toPlaces: document.querySelector('.form_toPlaces').value
    }))
}

let emailUser = document.querySelector('input.email_user')
let emailOfUser = JSON.parse(localStorage.getItem('Auth'))
if (emailOfUser) {
    emailUser.value = emailOfUser.email
}

let verify = document.querySelector('.btn_continue')
let idTicket = document.querySelector('input[name="idTicket"]').value
let amount = document.querySelector('input[name="amount"]').value
let blank = false;

verify.onmouseover = async () => {
    let res = await fetch('seat/checkSeat', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idTicket: idTicket,
            amount: amount
        }),
    })

    let result = await res.json();
    blank = result
}

verify.onclick = (e) => {
    if (blank) {
        alert("Booking ticket success! Please check your information in email.")
        localStorage.removeItem('Info')
        localStorage.removeItem('Birth')
    }
    else {
        alert("Something went wrong! Please try later!")
        e.preventDefault();

    }
}