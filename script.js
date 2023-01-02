const size = 800;
let row = 16;

const container = document.querySelector("#container");

createBoxes();

function createBoxes() {
    for (let index = 0; index < row * row; index++) {
        const box = document.createElement("div");
        box.style.cssText = `width: ${size / row - 2}px;height: ${size / row - 2}px;
        border: black 1px solid;background-color: black;`;
    
        box.onmouseover = function () {
            box.style.backgroundColor = "white";
        };
        box.onmousedown = function () {
            box.style.backgroundColor = "white";
        };
    
        container.appendChild(box);
    } 
}

const button = document.querySelector("#button");
button.addEventListener("click", () => {
	row = prompt("enter new row/column value(max 100):");
	if (row > 100) row = 100;
	console.log("clicked");
    container.innerHTML = '';
    createBoxes();
});

