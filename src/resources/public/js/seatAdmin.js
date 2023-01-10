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
