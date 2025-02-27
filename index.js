const mainElement = document.querySelector("main#main");
if (mainElement) {
  // Remove the element from the DOM
  mainElement.remove();
}

const newHeader = document.createElement("h1");
newHeader.textContent = "YOUR NAME is the champion";
document.body.appendChild(newHeader);

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);