let user = JSON.parse(localStorage.getItem("Auth"))
console.log("Auth", user)
if (user) {
    let emailElement = document.querySelector('.form_email');
    emailElement.value = user.email

    let nameElement = document.querySelector('.form_name');
    nameElement.value = user.name
}

let birth = document.querySelector('.form_birth')

let btnContinue = document.querySelector('.btn_continue')
btnContinue.onclick = () => {
    localStorage.setItem('Birth', JSON.stringify({
        birth: birth.value
    }))
}

let birthDate = JSON.parse(localStorage.getItem('Birth'))
if (birthDate) {
    let birth = document.querySelector('.form_birth')
    birthDate.birth = new Date(birthDate.birth)

    let yyyy = birthDate.birth.getFullYear();
    let mm = birthDate.birth.getMonth() + 1; // Months start at 0!
    let dd = birthDate.birth.getDate();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    let birth_format = yyyy + "-" + mm + "-" + dd;
    birth.value = birth_format
}

let info = JSON.parse(localStorage.getItem("Info"))
if (info) {
    let name = document.querySelector('.form_name')
    name.value = info.name

    let phone = document.querySelector('.form_phone')
    phone.value = info.phone

    let email = document.querySelector('.form_email')
    email.value = info.email

    let cmnd = document.querySelector('.form_cmnd')
    cmnd.value = info.cmnd


    // country: document.querySelector('.form_country').value,
    // fromPlaces: document.querySelector('.form_fromPlaces').value,
    // toPlaces: document.querySelector('.form_toPlaces').value
}