const formElement = document.querySelector("#form");
const formInput = document.querySelector('input[name="tasks"]');

// make variable to append new list item
const results = document.querySelector("#results");

// click event and annyoumous function for clicking submit
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit clicked");

    // save value get back from the function below 
    const newListItem = populateList(formInput.value);

    //appends to the section element (but why appendChild?)
    results.appendChild(newListItem);
});

// function to gather input from form
function populateList(text) {

    //create an element to store text
    const listItem = document.createElement('h3');

    // set the text of newly created element from input
    listItem.innerText = text;

    // make sure return created element
    return listItem;
    
}
