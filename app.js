const formElement = document.querySelector("#form");
const formInput = document.querySelector('input[name="tasks"]');

// make variable to append new list item
const results = document.querySelector("#results");

// allows us to make a strikethrough
const finishedTask = document.querySelectorAll("li");

// form delegation for when click on ul
results.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    };
    
    if (e.target.tagName === "LI") {
        //e.target.parentElement.strike(); but classList and toggle dont work
        finishedTask.classList.toggle("completed");
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
    
    //create remove button for new submissions
    const removeBtn = document.createElement("button");

    // create remove button for li
    removeBtn.innerText = "Remove Task";
    
    // append to the li element
    results.appendChild(removeBtn)
    
});
