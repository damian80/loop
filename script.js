// podpinamy pod przycisk BUTTON nasluchiwanie na CLICK
// tworzymy zmienna const dla przycisku BUTTON
const btn = document.querySelector('button');
// tworzymy zmienna let dla numerow
let number = 1;
// tworzymy zmienna const dla funkcji ktora nazwiemy addElement
const addElement = function () {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.textContent = number;
    // zwiekszamy o jeden ++
    number++;

}
// tworzymy nasluchiwanie
btn.addEventListener('click', addElement)