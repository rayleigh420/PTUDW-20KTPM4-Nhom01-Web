console.log(123)
let edit = document.querySelector('.edit_span')
edit.onclick = () => {
    localStorage.setItem('Info', JSON.stringify({
        name: document.querySelector('.name_span').textContent,
        phone: document.querySelector('.form_phone').value,
        email: document.querySelector('.form_email').value,
        cmnd: document.querySelector('.form_cmnd').value,
        country: document.querySelector('.form_country').value,
        fromPlaces: document.querySelector('.form_fromPlaces').value,
        toPlaces: document.querySelector('.form_toPlaces').value
    }))
}

let verify = document.querySelector('.btn_continue')
verify.onclick = () => {
    localStorage.removeItem('Info')
}
