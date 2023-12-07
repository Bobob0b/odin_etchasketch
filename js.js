const container = document.querySelector(".container");
const btnResize = document.querySelector("#resize");

window.addEventListener("load", (e) => {
    // create all the divs
    resize(16);

});

btnResize.addEventListener("click", (e) => {
    let newSize = prompt("Choose a grid size between 1 and 100.");
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize > 100 || newSize < 1) {
        alert("Not allowed! Try again");
        return;
    }
    clearFields();
    resize(newSize);
});


function clearFields() {
    const fields = Array.from(document.querySelectorAll(".fields"));
    fields.forEach((field) => {
        field.remove();
    })

};

function resize(size) {
    let numberOfDivs = size * size;
    let widthOfDivs = 650 / size; // max width divided by size
    for (let i = 0; i <= numberOfDivs - 1; i++) {
        let newChild = document.createElement("div");
        newChild.setAttribute("class", "fields field" + i);
        newChild.style.width = widthOfDivs + "px";
        newChild.style.height = widthOfDivs + "px";
        container.appendChild(newChild);
    }
};