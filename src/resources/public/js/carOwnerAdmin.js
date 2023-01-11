const detailList = document.querySelectorAll('.detail')
detailList.forEach(item => {
    const typeSelected = item.querySelector('input[name="typeSelected"]').value

    const optionType = item.querySelector(`select[name="type"] option[value="${typeSelected}"]`)
    optionType.setAttribute("selected", "true")
})

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
btnSave.onclick = async (e) => {
    // let nameInput = document.querySelector('#myform1 input[name="name"]').value
    // let res = await fetch('/admin/api/checkCarOwner', {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: nameInput
    //     }),
    // })

    // let result = await res.json()
    // if (result) {
    //     e.preventDefault();
    // }
    // else {
    // }
    alert("Update Success!")
}

const deleteCar = () => {
    alert("Delete Success!")
}

let listName = document.querySelectorAll(`#myform1 input[name="name"]`)
console.log(listName)

console.log(listName)

const form2 = document.querySelector("#myform2")
const formName = form2.querySelector(`input[name="name"]`)

const btnAdd = document.querySelector('.btnAdd')
btnAdd.onclick = (e) => {
    let flag = false;
    listName.forEach(item => {
        if (item.value == formName.value) {
            flag = true;
        }
    })
    if (flag) {
        e.preventDefault();
    }
    else {
        alert("Add Success!")
    }
}