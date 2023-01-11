const detailList = document.querySelectorAll(".detail");

detailList.forEach((item) => {
  const carOwnerSelected = item.querySelector(
    'input[name="carOwnerSelected"]'
  ).value;
  const fromtoSelected = item.querySelector(
    'input[name="fromtoSelected"]'
  ).value;
  // const fromSelected = item.querySelector('input[name="fromSelected"]').value
  // const toSelected = item.querySelector('input[name="toSelected"]').value

  // console.log(fromSelected, toSelected)

  // const optionFrom = item.querySelector(`select[name="fromPlace"] option[value="${fromSelected}"]`)
  // optionFrom.setAttribute("selected", "true")

  // const optionTo = item.querySelector(`select[name="toPlace"] option[value="${toSelected}"]`)
  // optionTo.setAttribute("selected", "true")

  const optionCarOwner = item.querySelectorAll(`select[name="idTrip"] option`);
  optionCarOwner.forEach((item) => {
    if (item.innerText == fromtoSelected) {
      item.setAttribute("selected", "true");
    }
  });

  const optionFromTo = item.querySelectorAll(`select[name=""] option`);
  optionCarOwner.forEach((item) => {
    if (item.innerText == carOwnerSelected) {
      item.setAttribute("selected", "true");
    }
  });
});

const show = (id) => {
  const detailList = document.querySelectorAll(".detail");
  const detail = document.querySelector(`.detail_${id}`);

  // const fromSelected = detail.querySelector('.select[name="from"] option[value=')

  const showOrNot = detail.hidden;

  detailList.forEach((item) => {
    item.setAttribute("hidden", true);
  });

  if (showOrNot) {
    detail.removeAttribute("hidden");
  }
};

let handle = (id) => {
  let detail1 = document.querySelector(`.detail_${id}`);
  let startTime = detail1.querySelector(".start");
  let price = detail1.querySelector(".price");
  let endTime = detail1.querySelector(".end");
  let start;
  let end;
  if (startTime.value != "") {
    start = startTime.value;
    endTime.min = start;
  }
  if (endTime.value != "") {
    end = endTime.value;
    startTime.max = end;
  }
  //   console.log(start);
  //   console.log(end);
  //   startTime.min = new Date().toISOString;
};

let date = () => {
  let detail1 = document.querySelector("#myform2");
  let startTime = detail1.querySelector(".start");
  let price = detail1.querySelector(".price");
  let endTime = detail1.querySelector(".end");
  let start;
  let end;
  if (startTime.value != "") {
    start = startTime.value;
    endTime.min = start;
  }
  if (endTime.value != "") {
    end = endTime.value;
    startTime.max = end;
  }
  //   console.log(end);
  //   startTime.min = new Date().toISOString;
};
