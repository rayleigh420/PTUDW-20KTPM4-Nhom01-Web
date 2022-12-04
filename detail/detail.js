hoverSeat = () => {
  let seats = document.querySelectorAll(".seat");
  for (let i = 0; i <= seats.length - 1; i++) {
    seats[i].addEventListener(
      "mouseover",
      (hover = () => {
        seats[i].src = "image/seat-hover.png";
      })
    );
    seats[i].addEventListener(
      "mouseout",
      (handleHover = () => {
        seats[i].src = "image/seat.png";
      })
    );
  }
};

hoverSeat();
