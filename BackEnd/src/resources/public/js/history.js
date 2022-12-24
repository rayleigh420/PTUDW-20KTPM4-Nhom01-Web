if (!JSON.parse(localStorage.getItem("Auth"))) {
    location.assign('/')
}

let logOutELement = document.querySelector('.logout')
logOutELement.onclick = () => {
    localStorage.removeItem('Auth')
}