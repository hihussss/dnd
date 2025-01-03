import { Field } from "../class/Field";
//import { Storage } from "../class/Storage";
import { DnD } from "../class/drag";


const container = document.querySelector(".container");


const field = new Field(container);
field.createField();

// работа с localStorage
//const storage = new Storage();


  
const dnd = new DnD(container);
dnd.start()





    


 