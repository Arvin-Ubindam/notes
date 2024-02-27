let dialog = document.querySelector("#dialog");
let dialog2 = document.querySelector("#dialog2");
let dialog3 = document.querySelector("#dialog3");
let dialog4 = document.querySelector("#dialog4");
let button = document.querySelector("#button");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");

let isOpen = false;
let isOpen2 = false;
let isOpen3 = false;
let isOpen4 = false;

button.addEventListener("click", () => {
  if (isOpen === false) {
    dialog.show();
    isOpen = true;
  } else {
    dialog.close();
    isOpen = false;
  }
});

button2.addEventListener("click", () => {
  if (isOpen2 === false) {
    dialog2.show();
    isOpen2 = true;
  } else {
    dialog2.close();
    isOpen2 = false;
  }
});

button3.addEventListener("click", () => {
  if (isOpen3 === false) {
    dialog3.show();
    isOpen3 = true;
  } else {
    dialog3.close();
    isOpen3 = false;
  }
});

button4.addEventListener("click", () => {
  if (isOpen4 === false) {
    dialog1.show();
    isOpen4 = true;
  } else {
    dialog1.close();
    isOpen4 = false;
  }
});

