const form = document.querySelector('form');

//adding buttom here

const EnterButtom = document.getElementById("enter");

EnterButtom.addEventListener("click", () =>{

} )// 

const listItem2 = document.createElement("li");
listItem2.innerText = "querySelectorAll() - select all elements that match a query";

const listItem3 = document.createElement("li");
listItem3.innerText = "convertToSpaceMonkey() - use your space monkey ray-gun to convert all elements to space-monkeys";

// appendChild
const list = document.querySelector('.list');

list.appendChild(listItem1); 
list.appendChild(listItem2); 
list.appendChild(listItem3); 

//remove Child
list.removeChild(list.lastChild);