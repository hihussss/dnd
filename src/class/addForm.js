import { Card } from "./Card.js";

export class addForm {

    constructor(column) {
        this.column = column
        this.init()
    }

    init() {
        this.createForm()
        this.addListener()
        
    }

    
    createForm(){
        this.formBox = document.createElement("div");
        this.formBox.className = "form-box";

    
        this.elAdd = document.createElement("div");
        this.elAdd.className = "btn-form-visible active";
        this.elAdd.textContent = "+ Add task";

    
        this.form = document.createElement("form");
        this.form.className = "form-field";

        this.formBox.append(this.elAdd);
        this.formBox.append(this.form);

        const contentForm = `<textarea placeholder="add" rows="3"></textarea>
            <div class="form-btn-box">
                <button>add</button>
                <button type="reset">&#215;</button>
            </div>`;

        this.form.insertAdjacentHTML("beforeend", contentForm);
        
    }
    
    addListener() {
        
        this.elAdd.addEventListener("click", this.onOpenForm.bind(this));
        
        this.form.addEventListener("submit", this.onSubmitForm.bind(this));
        
        this.form.addEventListener("reset", this.onCloseForm.bind(this));
      }
    
      onOpenForm() {
        this.elAdd.classList.remove("active");
        this.form.classList.add("active");
      }
    
      onSubmitForm(e) {
        e.preventDefault();
        
        const text = this.form.querySelector("textarea").value.trim();
        if (text) {
          const newCard = new Card(text);
          this.column.querySelector(".cards-list").append(newCard.card);
        }
        this.onCloseForm();
      }
    
      onCloseForm() {
        this.form.reset();
        this.elAdd.classList.add("active");
        this.form.classList.remove("active");
      }

    
}