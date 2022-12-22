let auth = JSON.parse(localStorage.getItem('Auth'))
let checkUser = false

const check = async () => {
    let res = await fetch('user/checkLocal', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: auth.email,
            name: auth.name
        }),
    })
    let result = await res.json()
    checkUser = result
    if (!result) {
        localStorage.removeItem('Auth')
    }
}

check();

let userNav = document.querySelector('.btn_auth')
if (checkUser) {
    userNav.innerHTML = `
    <button type="button" class="btn btn_user">
        <ion-icon class="user_icon" name="person-circle"></ion-icon>
        ${auth.name}
    </button>
    <div class="list">
        <ul class="list-group">
            <li class="list-group-item list_title">
                Tài khoản
            </li>
            <li class="list-group-item">
                <a href="/history">
                    <ion-icon class="user_option_icon" name="book" size="small"></ion-icon>Lịch sử đặt vé
                </a>
            </li>
            <li class="list-group-item log_out">
                <a href="/">
                    <ion-icon class="user_option_icon" name="log-out" size="small"></ion-icon>Đăng xuất
                </a>
            </li>
        </ul>
    </div> `
}
else {
    userNav.innerHTML = `
    <button type="button" class="btn btn_signIn">
        <a href="/signIn">
            <ion-icon class="signIn_icon" name="people-circle"></ion-icon>
            Đăng nhập
        </a>
    </button>
    <button type="button" class="btn btn_signUp">
        <a href="/signUp">
            Đăng ký
        </a>
    </button> `
}

let logOut = document.querySelector('.log_out')
if (logOut) {
    logOut.onclick = () => {
        localStorage.removeItem("Auth");
    }
}