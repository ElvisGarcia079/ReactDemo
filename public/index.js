// The DOM happens

// I need a variable called main heading

// .main-heading
// #main-heading
// style
// color 


let mainHeading = document.querySelector("#main-heading");
mainHeading.innerHTML = "Intro to the DOM in Javascript";

let newButtonElement = document.createElement("input");
newButtonElement.id = "btn";
newButtonElement.value = "Click for Attendance";
newButtonElement.type = "button";

document.body.appendChild(newButtonElement);


newButtonElement.addEventListener("click", function() {
    mainHeading.innerHTML = "Attendance Submitted";
});

