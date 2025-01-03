export class Card {
    constructor(text) {
      
      this.text = text;
      
      this.mouseOverHandler = this.onMouseOver.bind(this);
      this.mouseOutHandler = this.onMouseOut.bind(this);
      this.deleteHandler = this.onDelete.bind(this);
      this.init();
    }
    
    init() {
        this.addCard();

        this.addListener();

    }

    addCard() {
        this.card = document.createElement('div')
        this.card.className = 'cart'

        this.card.draggable = true;
        const content = `<div>${this.text}</div>
        <div class="card_delete">&#215;</div>`;

        this.card.insertAdjacentHTML("beforeend", content);
        this.delete = this.card.querySelector(".card_delete");
    }

    addListener() {
        this.card.addEventListener("mouseover", this.mouseOverHandler);
        this.card.addEventListener("mouseout", this.mouseOutHandler);
        this.delete.addEventListener("click", this.deleteHandler);
      }
    
      onMouseOver() {
        this.delete.classList.add("active");
      }
    
      onMouseOut() {
        this.delete.classList.remove("active");
      }
    
      onDelete() {
        console.log(this.card)
        
        this.card.removeEventListener("mouseover", this.mouseOverHandler);
        this.card.removeEventListener("mouseout", this.mouseOutHandler);
        this.delete.removeEventListener("click", this.deleteHandler);
        this.card.remove();
      }

}