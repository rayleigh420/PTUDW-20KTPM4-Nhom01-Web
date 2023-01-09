const detailList = document.querySelectorAll('.detail')
detailList.forEach(item => {
    const fromSelected = document.querySelector('input[name="fromSelected"]').value
    const toSelected = document.querySelector('input[name="toSelected"]').value

    console.log(fromSelected, toSelected)

    const optionFrom = item.querySelector(`select[name="from"] option[value=${fromSelected}]`)
    optionFrom.setAttribute("selected", "true")

    const optionTo = item.querySelector(`select[name="to"] option[value=${toSelected}]`)
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

// const form2 = document.querySelector("#myform2")
// const formName = form2.querySelector(`input[name="name"]`)

// const btnAdd = document.querySelector('.btnAdd')
// btnAdd.onclick = (e) => {
//     let flag = false;
//     listName.forEach(item => {
//         if (item.value == formName.value) {
//             flag = true;
//         }
//     })
//     if (flag) {
//         e.preventDefault();
//     }
//     else {
//         alert("Add Success!")
//     }
// }
