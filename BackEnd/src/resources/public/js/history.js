if (!JSON.parse(localStorage.getItem("Auth"))) {
  location.assign("/");
}
let user = JSON.parse(localStorage.getItem("Auth"));
console.log("Auth", user);
if (user) {
  let email = document.querySelector("#parseUser");
  email.value = user.email;
}
let logOutELement = document.querySelector(".logout");
logOutELement.onclick = () => {
  localStorage.removeItem("Auth");
};
