let includeIt = document.querySelector("#hot");
let textArea = document.querySelector("#add");
let paragraph = document.createElement("p");
let newArray = [];

includeIt.addEventListener("click", (e) => {
  e.preventDefault();
  newArray.push(textArea.value);

  console.log(newArray);
});

paragraph = newArray;

