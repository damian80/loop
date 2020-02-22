// podpinamy pod przycisk BUTTON nasluchiwanie na CLICK
// tworzymy zmienna const dla przycisku BUTTON
const btn = document.querySelector("button");
// tworzymy zmienna let dla numerow
let number = 1;
let activeNumber = 1;
// tworzymy zmienna const dla funkcji ktora nazwiemy addElement
const addElement = function() {
  const div = document.createElement("div");
  div.textContent = number;
  // zwiekszamy o jeden ++

  // podpinamy klase .circle z "%modulo(remainder operator)"

  if (activeNumber == 5) {
    activeNumber = 0;
    div.classList.add("circle");
  }
  document.body.appendChild(div);
  number++;
  activeNumber++;
};

// tworzymy nasluchiwanie
btn.addEventListener("click", addElement);
