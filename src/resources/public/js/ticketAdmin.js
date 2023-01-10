const detailList = document.querySelectorAll(".detail");

detailList.forEach(item => {
    const carOwnerSelected = item.querySelector('input[name="carOwnerSelected"]').value
    // const fromSelected = item.querySelector('input[name="fromSelected"]').value
    // const toSelected = item.querySelector('input[name="toSelected"]').value

    // console.log(fromSelected, toSelected)

    // const optionFrom = item.querySelector(`select[name="fromPlace"] option[value="${fromSelected}"]`)
    // optionFrom.setAttribute("selected", "true")

    // const optionTo = item.querySelector(`select[name="toPlace"] option[value="${toSelected}"]`)
    // optionTo.setAttribute("selected", "true")

    const optionCarOwner = item.querySelectorAll(`select[name="idCarOwner"] option`)
    optionCarOwner.forEach(item => {
        if (item.innerText == carOwnerSelected) {
            item.setAttribute("selected", "true")
        }
    })
})

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
