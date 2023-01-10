const detailList = document.querySelectorAll(".detail");

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
