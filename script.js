const size = 800;
let row = 16;

const container = document.querySelector('#container');

for (let index = 0; index < 16*16; index++) {
    const box = document.createElement('div');
    box.style.cssText = `width: ${size/row}px;height: ${size/row}px;border: black 2px solid;background-color: white;`;

    box.onmouseover = function(){
        box.style.backgroundColor = 'red';
    }

    box.onmouseout = function () {
        box.style.backgroundColor = 'white';
    }

    container.appendChild(box);
}