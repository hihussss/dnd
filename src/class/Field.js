import { addForm } from "./addForm";
import { Card } from "./Card";

export class Field {
    constructor(container) {
        this.container = container;
        this.names = ["todo", "progress", "done"];
      }
    
      createField() {
        this.names.forEach((el) => {
          
          const column = this.createColumn(el);
          this.container.append(column);
          
          const form = new addForm(column);
          column.append(form.formBox);
        });
      }
    
      createColumn(title) {
        const column = document.createElement("div");
        column.className = "column";
        column.title = title;
    
        const contentColumn = `
            <div class="column-content">
                <h2>${title}</h2>
                <div class="cards-list"></div>
            </div>
            `;
    
        column.insertAdjacentHTML("beforeend", contentColumn);
        return column;
      }
    
      
      renderCard(data) {
        const arrColumn = Array.from(document.querySelectorAll(".column"));
        arrColumn.forEach((column) => {
          const title = column.title;
          const cardsListEl = column.querySelector(".cards-list");
          data[title].forEach((card) => {
            const newCard = new Card(card);
            cardsListEl.append(newCard.card);
          });
        });
      }

}