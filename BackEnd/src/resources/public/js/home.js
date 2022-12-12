let fromOption = document.querySelector('select.from')
let toOption = document.querySelectorAll('select.to option')

console.log(fromOption)
fromOption.onchange = (e) => {
    console("123: ", e)
}
