const inputElement = document.getElementById("inputText");
const addBtn = document.getElementById ("saveBtn");
const toDoListElement = document.getElementById ("list")

// When a user clicks the save btn, capture the input text in the form and store it as a list item variable
const itemList = [];
addBtn.addEventListener("click", (e) => {
  const inputElementValue = inputElement.value;
  if (inputElementValue === "") {
    alert("Please enter a todo before submiting");
        if (itemList.length < 3) {
          const listItemElement = document.createElement("li");
          listItemElement.innerHTML = inputElementValue;
          todoItemsElement.appendChild(listItemElement);
          itemList.push(listItemElement);
          inputElement.value = "";
        } else {
          alert("You can't have more than 3 todos.");
        
        //When a user clicks: the "✕" btn the list item is deleted & the "✓" btn the list item is displayed with a  ̶S̶t̶r̶i̶k̶e̶-̶t̶h̶r̶o̶u̶g̶h̶ 
        const eraseBtn = document.createElement ("button")
        eraseBtn.classList.add("btn","btn-danger","btn-sm","float-right","ml-1")
        eraseBtn.innerHTML = "✕"
        eraseBtn.addEventListener ("click", (e) => { 
        e.preventDefault()
        listItemElement.remove()
        })

        const finishBtn = document.createElement ("button")
        finishBtn.classList.add("btn","btn-success","btn-sm","float-right")
        finishBtn.innerHTML = "✓"
        finishBtn.addEventListener ("click", (e) => { 
        e.preventDefault()
        listItemElement.style.textDecoration = "line-through";
        })

    listItemElement.appendChild(deleteBtn)
    listItemElement.appendChild(doneBtn)
    toDoListElement.appendChild(listItemElement);
    toDoList.push (listItemElement);
    console.log(toDoList)
    inputElement.value = "";
    }
};
console.log(toDoList)
