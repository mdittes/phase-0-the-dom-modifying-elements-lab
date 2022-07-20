// Write your code here!
const goodbye = document.getElementById("main");
goodbye.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.textContent = "Matt is the champion";