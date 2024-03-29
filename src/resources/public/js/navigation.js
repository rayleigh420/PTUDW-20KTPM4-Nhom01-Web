let auth = JSON.parse(localStorage.getItem("Auth"));
// let checkUser;

const check = async () => {
    let result;
    let id;
    if (auth) {
        let res = await fetch("/user/checkLocal", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: auth.email,
                name: auth.name,
            }),
        });
        result = await res.json();
    } else {
        result = false;
    }

    if (result) {
        let res2 = await fetch("/user/getIdByEmail", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: auth.email,
            }),
        });
        id = await res2.json();
    }

    // console.log("result" + result);
    // console.log("id" + id);
    let userNav = document.querySelector(".btn_auth");
    if (result) {
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
                    <a href="/history/${id}">
                        <ion-icon class="user_option_icon" name="book" size="small"></ion-icon>Lịch sử đặt vé
                    </a>
                </li>
                <li class="list-group-item log_out">
                    <a href="/">
                        <ion-icon class="user_option_icon" name="log-out" size="small"></ion-icon>
                        Đăng xuất
                    </a>
                </li>
            </ul>
        </div> `;
    } else {
        localStorage.removeItem("Auth");

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
        </button> `;
    }

    let logOut = document.querySelector(".log_out");
    if (logOut) {
        logOut.onclick = () => {
            localStorage.removeItem("Auth");
        };
    }
};

check();

// console.log("123")

// const logOut = () => {
//     console.log("Log out")
//     localStorage.removeItem("Auth");
// }
