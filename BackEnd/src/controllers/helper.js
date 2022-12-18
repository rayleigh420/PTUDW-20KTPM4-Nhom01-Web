let helper = {};

helper.generateTypeOfCar = (type) => {
  let str = "";
  if (type == 9) {
    str = `<div class="car-9">
              <img class="seat" src="/img/seat.png" alt="">
              <img class="seat" src="/img/seat.png" alt="">
              <img class="seat" src="/img/seat.png" alt="">
              <img class="seat" src="/img/seat.png" alt="">
              <img class="seat" src="/img/seat.png" alt="">
              <div class="blank"></div>
              <div class="blank"></div>
              <img class="seat" src="/img/seat.png" alt="">
              <img class="wheel" src="/img/wheel.svg" alt="">
              <img class="seat" src="/img/seat.png" alt="">
              <img class="seat" src="/img/seat.png" alt="">
              <img class="seat" src="/img/seat.png" alt="">

          </div>`;
  } else if (type == 32) {
    str = `<div class="floor">Tầng dưới</div>
        <div class="car-32">
            <div class="blank"></div>
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <div class="blank"></div>
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="wheel" src="/img/wheel.svg" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
        </div>
        <div class="floor">Tầng trên</div>
        <div class="car-32">
            <div class="blank"></div>
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <div class="blank"></div>
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <div class="blank"></div>
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
        </div> `;
  } else if (type == 22) {
    str = `<div class ="floor">Tầng dưới</div>
        <div class="car-22">
            <div class="blank"></div>
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="wheel" src="/img/wheel.svg" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            
        </div>
        <div class ="floor">Tầng trên</div>
        <div class="car-22">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            <img class="seat" src="/img/seat.png" alt="">
            
        </div> `;
  }
  return str;
};

module.exports = helper;
