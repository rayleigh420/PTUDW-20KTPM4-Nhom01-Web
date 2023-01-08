const show = (id) => {
    const detailList = document.querySelectorAll('.detail')
    console.log(detailList)
    detailList.forEach(item => {
        item.setAttribute('hidden', true)
    })

    const detail = document.querySelector(`.detail_${id}`)
    detail.removeAttribute('hidden')
}