const container = document.querySelector('#container');

for (let index = 0; index < 16*16; index++) {
    const box = document.createElement('div');
    box.style.cssText = 'width: 50px;height: 50px;border: black 2px solid;'
    container.appendChild(box);
}