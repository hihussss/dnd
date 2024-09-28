export class addFrom {

    constructor() {
        this.border = document.body
    }

    addFormColumn() {
        const form = document.createElement('div')
        form.classList.add('form')
        this.border.appendChild(form)
        for (let i = 0; i < 3; i++) {
            const column = document.createElement('div')
            column.classList.add('column')
            form.appendChild(column)
        }
    }

    addCard(text) {
        const card = document.createElement('div')
        card.classList.add('cart')
        card.innerHTML = `<p>${text}</p>`
        return card
    }

    addLinkCard() {
        const linkCard = document.createElement('div')
        linkCard.classList.add('linkCard')
        const plus = document.createElement('span')
        plus.classList.add('plus')
        plus.textContent = '+'
        const link = document.createElement('a')
        link.classList.add('link')
        link.textContent = 'Add another cart'
        link.setAttribute('href', '#')
        linkCard.appendChild(plus)
        linkCard.appendChild(link)
        return linkCard
        
    }

    addInputText(){
        const inputForm = document.createElement('form')
        inputForm.classList.add('inputForm')
        const input = document.createElement('input')
        input.classList.add('input')
        input.placeholder = "Enter a title for this card..."
        input.setAttribute('type', 'text')
        const boxCard =  document.createElement('div')
        boxCard.classList.add('boxCard')
        const button = document.createElement('button')
        button.classList.add('button')
        button.textContent = 'Add Card'
        boxCard.appendChild(button)
        inputForm.appendChild(input)
        inputForm.appendChild(boxCard)
        return inputForm
    }

    addIconDelete(){
        const icon = document.createElement("div")
        icon.classList.add("icon")
        return icon
    }
}