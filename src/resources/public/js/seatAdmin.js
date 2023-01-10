
const detailList = document.querySelectorAll('.detail')
detailList.forEach(item => {
    const fromSelected = item.querySelector('input[name="fromSelected"]').value
    const toSelected = item.querySelector('input[name="toSelected"]').value

    console.log(fromSelected, toSelected)

    const optionFrom = item.querySelector(`select[name="fromPlace"] option[value="${fromSelected}"]`)
    optionFrom.setAttribute("selected", "true")

    const optionTo = item.querySelector(`select[name="toPlace"] option[value="${toSelected}"]`)
    optionTo.setAttribute("selected", "true")
})


const show = (id) => {
    const detailList = document.querySelectorAll('.detail')
    const detail = document.querySelector(`.detail_${id}`)

    // const fromSelected = detail.querySelector('.select[name="from"] option[value=')

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

const deleteTrip = () => {
    alert("Delete Success!")
}

// let listName = document.querySelectorAll(`#myform1 input[name="name"]`)
// console.log(listName)

// console.log(listName)

const form2 = document.querySelector("#myform2")
const from = form2.querySelector("select.from")
const to = form2.querySelector("select.to")


const btnAdd = document.querySelector('.btnAdd')
btnAdd.onclick = async (e) => {
    console.log("add")
    let res = await fetch('/admin/api/checkTrip', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: from.value,
            to: to.value
        }),
    })

    let result = await res.json()
    if (result) {
        e.preventDefault();
    }
    else {
        alert("Add Success!")
    }
}


