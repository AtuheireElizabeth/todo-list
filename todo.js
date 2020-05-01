const inputElement = document.getElementById("inputText");
const addBtn = document.getElementById ("saveBtn");
const toDoListElement = document.getElementById ("list")

// When a user clicks the save btn, capture the input text in the form and store it as a list item variable
const toDoList = [];
addBtn.addEventListener ("click", (e) => {
    e.preventDefault()
    const inputElementValue = inputElement.value;
    if (inputElementValue === "")
    {   alert ("Please enter a task to do");}
    else 
    { 
        const listItemElement = document.createElement ("li");
        listItemElement.innerHTML = inputElementValue;
        listItemElement.classList.add(["list-group-item"])
        
        //When a user clicks: the "✕" btn the list item is deleted & the "✓" btn the list item is displayed with a  ̶S̶t̶r̶i̶k̶e̶-̶t̶h̶r̶o̶u̶g̶h̶ 
        const deleteBtn = document.createElement ("button")
        deleteBtn.classList.add("btn","btn-danger","btn-sm","float-right","ml-1")
        deleteBtn.innerHTML = "✕"
        deleteBtn.addEventListener ("click", (e) => { 
        e.preventDefault()
        listItemElement.remove()
        })

        const doneBtn = document.createElement ("button")
        doneBtn.classList.add("btn","btn-success","btn-sm","float-right")
        doneBtn.innerHTML = "✓"
        doneBtn.addEventListener ("click", (e) => { 
        e.preventDefault()
        listItemElement.style.textDecoration = "line-through";
         
        // Trial & Error Testing:
        // listItemElement.strike();
        // listItemElement.str.strike();
        // listItemElement.document.str.strike()
        // listItemElement.innerText.strike();
        // listItemElement.innerText = strikeThrough(this.value)
        // listItemElement.innerText = text-decoration (line-through)
        })

    listItemElement.appendChild(deleteBtn)
    listItemElement.appendChild(doneBtn)
    toDoListElement.appendChild(listItemElement);
    toDoList.push (listItemElement);
    console.log(toDoList)
    inputElement.value = "";
    }
});
console.log(toDoList)