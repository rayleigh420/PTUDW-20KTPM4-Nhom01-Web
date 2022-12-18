let helper = {};

helper.generateTypeOfCar = (name) => {
  let str = `<div class="car-9">
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
  return str;
};

module.exports = helper;
