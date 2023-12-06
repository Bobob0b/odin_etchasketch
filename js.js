window.addEventListener("load", (e) => {
    // create all the divs
    container = document.querySelector(".container");
    numberOfDivs = 16 * 16;
    for (let i = 0; i <= numberOfDivs - 1; i++) {
        let newChild = document.createElement("div");
        newChild.setAttribute("class", "fields field" + i);
        container.appendChild(newChild);
    }
});