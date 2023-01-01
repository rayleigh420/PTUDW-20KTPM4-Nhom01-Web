hoverSeat = () => {
  let seats = document.querySelectorAll(".seat");
  for (let i = 0; i <= seats.length - 1; i++) {
    seats[i].addEventListener(
      "mouseover",
      (hover = () => {
        seats[i].src = "/img/seat-hover.png";
      })
    );
    seats[i].addEventListener(
      "mouseout",
      (handleHover = () => {
        seats[i].src = "/img/seat.png";
      })
    );
  }
};
hoverSeat();
let user = JSON.parse(localStorage.getItem("Auth"));
console.log("Auth", user);
if (user) {
  let email = document.querySelector("#parseUser");
  email.value = user.email;
}
// hide form when user not login or sign up
else {
  let comment = document.querySelector('.write-comment');
  comment.setAttribute('hidden', 'true');
}
