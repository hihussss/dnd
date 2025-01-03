import { Field } from "../class/Field";
import { Storage } from "../class/Storage";
import { DnD } from "../class/drag";
// import { DnDMouses } from "../class/Dmouse";

const container = document.querySelector(".container");

// создаем колонки с разметкой и формой, сразу все колонки
const field = new Field(container);
field.createField();

// работа с localStorage
const storage = new Storage();

// const dnd = new DnDMouses(container);
// dnd.start();
  
const dnd = new DnD(container);
dnd.start()





    


 