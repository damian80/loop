// podpinamy pod przycisk BUTTON nasluchiwanie na CLICK
// tworzymy zmienna const dla przycisku BUTTON
const btn = document.querySelector('button');
// tworzymy zmienna const dla funkcji ktora nazwiemy addElement
const addElement = function () {
    const div = document.createElement('div');
    document.body.appendChild(div);

}
// tworzymy nasluchiwanie
btn.addEventListener('click', addElement)