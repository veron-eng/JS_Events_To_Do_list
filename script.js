// const form = document.querySelector('form');
// // const input = document.getElementById('text').placeholder;
// const button = document.getElementById("enter");

// const deleteButton=document.createElement("button");
// const item = document.getElementById('to-do')

const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.getElementById("list");

//delete botton
const deleteFun = function(){
    const listItem = this.parentNode;
    const currentList = listItem.parentNode;
    currentList.removeChild(listItem);
}

//check box
const checkBoxFun = function(event){
    if(event.currentTarget.checked){
        alert('checked');
    }else{
        alert('not checked');
    }
}

enter.addEventListener("click", ()=> {
        const newInput = input.value;
        const listItem = document.createElement("li");
        listItem.innerText = newInput;
    
        // form.addEventListener('submit', event =>{
        //     event.preventDefault();
        // })
        list.appendChild(listItem);

        const deleteButton = document.createElement("button");
        deleteButton.id="delete";
        const deleteButtonText = document.createTextNode("delete");
        deleteButton.appendChild(deleteButtonText);
        listItem.appendChild(deleteButton);

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        listItem.appendChild(checkBox);
        checkBox.addEventListener("edit",checkBoxFun);

        deleteButton.addEventListener('click',deleteFun);
})