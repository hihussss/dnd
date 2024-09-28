export class instrForm {
    constructor() {

    }

    pushCard(key, value) {
       localStorage.setItem(key, value) 
        
    }

    removeCardStorage(key) {
        localStorage.removeItem(key)
    }

    getCardStorage(key) {
        return localStorage.getItem(key)
    }


    deleteCard(event) {
        if (event.target.parentElement.classList.contains('boxCard')) {
            event.target.parentElement.parentElement.remove()
        }else{
            event.target.parentElement.remove()
        }
        
    }
    
    transportCard(card) {
        card.addEventListener("mousedown", () => {
            card.classList.add("mousedown")    
        })

    }
}