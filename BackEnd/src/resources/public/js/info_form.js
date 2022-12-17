let user = JSON.parse(localStorage.getItem("Auth"))
console.log("Auth", user)
if (user) {
    let emailElement = document.querySelector('.form_email');
    emailElement.value = user.email

    let nameElement = document.querySelector('.form_name');
    nameElement.value = user.name
}