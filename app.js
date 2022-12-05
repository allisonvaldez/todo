// creates a form element
const formElement = document.querySelector("#form");

// gathers input from form
const formInput = document.querySelector('input[name="tasks"]');

// make variable to append new list item
const results = document.querySelector("#results");

// allows us to make a strikethrough from the css class
const finishedTask = document.querySelectorAll("li");

//create remove button for new submissions
const removeBtn = document.createElement('button');

// event delegation for when click on ul
results.addEventListener("click", function(e) {

    if (e.target.tagName === "BUTTON") {
        console.log(e.target);
        e.target.parentElement.remove();
    };
    
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    };  
});

// function to gather input from form
function populateList(text) {
    //create an element to store text
    const listItem = document.createElement('li');

    // set the text of newly created element from input
    listItem.innerText = text;
    
    // make sure return created element
    return listItem;
}

// click event and annyoumous function for clicking submit
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit clicked");

    // save value get back from the function below 
    const newListItem = populateList(formInput.value);

    //appends to the ul element (but why appendChild?)
    results.appendChild(newListItem);

    //on click event clear the input
    formInput.value = "";

    /*
    remove should have been event delegation create remove button for new submissions
    */
    const removeBtn = document.createElement("button");

    // create remove button for li
    removeBtn.innerText = "Remove Task";
    
    // append to the li element
    newListItem.appendChild(removeBtn);

});

//save tasks to Localstorage but not working as planned
function addToStorage(tsk) {
    tsk = JSON.parse(localStorage.getItem("results") || "[]");
    const setOfTasks = new Set(tsk);
    setOfTasks.add(tsk);
    localStorage.setItem("task", JSON.stringify([...setOfTasks])); 
}


