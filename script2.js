let includeIt = document.querySelector("#hot");
let textArea = document.querySelector("#add");
let newArray = [];

let container = document.querySelector(".container");

includeIt.addEventListener("click", (e) => {
  e.preventDefault();

  let div = document.createElement("div");
  let p = document.createElement("p")
  p.textContent = textArea.value;
  div.append(p)

  newArray.push(div);

  console.log(newArray);

  newArray.map((elem) => {
    container.append(elem);
  });
});
