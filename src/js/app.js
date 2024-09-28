import { addFrom } from "../class/addForm.js";
import { instrForm } from "../class/instrForm.js";

const addForm = new addFrom();
const instr = new instrForm();
addForm.addFormColumn();
const titles = ["To Do", "In Progress", "Done"];

const columns = Array.from(document.querySelectorAll(".column"));
columns.forEach(column => {
    const title = document.createElement("h2");
    title.textContent = titles[columns.indexOf(column)];
    column.appendChild(title)
    column.appendChild(addForm.addLinkCard())
})

const links = Array.from(document.querySelectorAll(".link"));
for (let i =0; i < links.length; i++) {
    links[i].addEventListener("click", (event) => {
        event.preventDefault();
        if (columns[i].lastChild.classList.contains("inputForm")) {
            return
        }else{
            columns[i].appendChild(addForm.addInputText())
            const krest = document.querySelector(".boxCard")
            krest.appendChild(addForm.addIconDelete()).addEventListener("click", (event) => {
            event.preventDefault();
            instr.deleteCard(event)
            })
            const button = document.querySelector(".button")
            const input = document.querySelector(".input")
            button.addEventListener("click", (event) => {
                event.target.parentElement.parentElement.remove()
                event.preventDefault();
                columns[i].appendChild(addForm.addCard(input.value))
                const cards = Array.from(document.querySelectorAll(".cart"));
                console.log(cards)
                for (let j = 0; j < cards.length; j++) {
                    cards[j].draggable = true
                    cards[j].addEventListener("dragstart", (event) => {
                        event.target.classList.add("selected")
                    })
                    cards[j].addEventListener("dragend", (event) => {
                        event.target.classList.remove("selected")
                    })
                    columns[i].addEventListener(`dragover`, (event) => {
                       console.log(event)
                        event.preventDefault();
                        const activeElement = columns[i].querySelector(`.selected`);
                        const currentElement = event.target;
                       
                        const isMoveable = activeElement !== currentElement &&
                          currentElement.classList.contains("cart");
                      
                        
                        if (!isMoveable) {
                          return;
                        }
                      
                       
                        const nextElement = (currentElement === activeElement.nextElementSibling) ? currentElement.nextElementSibling : currentElement;
                      
                        
                        columns[i].insertBefore(activeElement, nextElement);
                      });
                    instr.getCardStorage({"column": i, "card": j })
                    instr.pushCard({"column": i, "card": j }, input.value)
                    cards[j].addEventListener("mouseover", (evt) => {
                        console.log(evt)
                        cards[j].appendChild(addForm.addIconDelete())
                        const icon = cards[j].querySelector(".icon")
                        console.log(icon)
                        icon.addEventListener("click", (event) => {
                            event.preventDefault();
                            instr.deleteCard(event)
                            instr.removeCardStorage({"column": i, "card": j })
                        })
                        })

                    cards[j].addEventListener("mouseout", () => {
                        cards[j].querySelector(".icon").remove()
                        })
                            
                }       
            })
            
       


        }    
            
    
    })
        
}





    


 