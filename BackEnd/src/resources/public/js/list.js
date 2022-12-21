let ticketList = document.querySelectorAll('.list_ticket .ticket')

let ownerName = "";
let typeName = "";
let price = "";

let deleteTicket = () => {
    let ticketListCopy = [...ticketList]
    ticketListCopy.forEach(item => {
        item.remove();
    })
}

let insertTicket = (ticketFilter) => {
    deleteTicket()
    let ticket = document.querySelector(".list_ticket")
    ticketFilter.forEach(item => {
        ticket.append(item)
    })
}

// let resetOwnerName = () => {
//     let ticketListCopy = [...ticketList]
//     ticketListCopy = ticketListCopy.filter(item => {
//         let name = item.querySelector('.car_name span')
//         return name.textContent != ownerName

//     })
//     insertTicket(ticketListCopy)
// }

let filterTicket = () => {
    let ticketListCopy = [...ticketList]
    ticketListCopy = ticketListCopy.filter(item => {
        let name = item.querySelector('.car_name span')
        let type = item.querySelector('input')
        console.log(type.value)
        if (ownerName == '' && typeName == '') {
            return name.textContent && type.value
        }
        else if (ownerName != '' && typeName == '') {
            return name.textContent == ownerName && type.value
        }
        else if (ownerName == '' && typeName != '') {
            return name.textContent && type.value == typeName
        }
        else if (ownerName != '' && typeName != '') {
            return name.textContent == ownerName && type.value == typeName
        }
    })
    insertTicket(ticketListCopy)
}

let carOwner = document.querySelector(".carOwner_option")
carOwner.onchange = () => {
    ownerName = carOwner.value
    filterTicket()
}

let type = document.querySelector(".type_option")
type.onchange = () => {
    typeName = type.value
    filterTicket()
}