const show = (id) => {
    const detailList = document.querySelectorAll('.detail')
    const detail = document.querySelector(`.detail_${id}`)

    const showOrNot = detail.hidden

    detailList.forEach(item => {
        item.setAttribute('hidden', true)
    })

    if (showOrNot) {
        detail.removeAttribute('hidden')
    }
}

const btnSave = document.querySelector('.btnSave')
btnSave.onclick = () => {
    alert("Update success!")
}

const deleteCar = () => {
    alert("Delete Success!")
}