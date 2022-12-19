let today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate() + 1;

if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}

let date_format = yyyy + "-" + mm + "-" + dd;
let date = document.querySelector('#date')
date.setAttribute('min', date_format)




let find = JSON.parse(localStorage.getItem('Find'))
if (find) {
    let fromOption = document.querySelectorAll('select.from option')
    let toOption = document.querySelectorAll('select.to option')
    let date = document.querySelector('#date')

    fromOption.forEach(item => {
        if (item.value == find.from) {
            item.setAttribute('selected', true)
        }
        else {
            item.removeAttribute('selected')
        }
    });

    toOption.forEach(item => {
        if (item.value == find.to) {
            item.setAttribute('selected', true)
        }
        else {
            item.removeAttribute('selected')
        }
    });

    find.date = new Date(find.date)

    let yyyy = find.date.getFullYear();
    let mm = find.date.getMonth() + 1; // Months start at 0!
    let dd = find.date.getDate();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    let date_format = yyyy + "-" + mm + "-" + dd;
    date.value = date_format
}


let form = document.querySelector('#form_find')
form.onsubmit = () => {
    let fromOption = document.querySelector('select.from')
    let toOption = document.querySelector('select.to')
    let date = document.querySelector('#date')

    localStorage.setItem('Find', JSON.stringify({
        from: fromOption.value,
        to: toOption.value,
        date: date.value
    }))
}


