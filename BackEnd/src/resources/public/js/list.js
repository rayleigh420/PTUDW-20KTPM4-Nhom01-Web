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

let filterTicket = () => {
    let ticketListCopy = [...ticketList]
    ticketListCopy = ticketListCopy.filter(item => {
        let name = item.querySelector('.car_name span')
        if (ownerName == '') {
            return name.textContent != ownerName
        }
        else {
            return name.textContent == ownerName
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
}