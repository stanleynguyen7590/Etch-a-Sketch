let createRandomNumberColor = () => {
  return Math.floor(Math.random() * (255 - 0) + 0);
};
let createRandomRGBA = () => {
  let rgb = Array.apply(null, Array(3)).map(item => createRandomNumberColor());
  return [...rgb, Math.random()].join(",");
};

let createSquare = (numCol, numRowm, id) => {
  let square = document.createElement("div");
  square.className = "square";
  square.id = id;
  square.style.border = "solid 1px #000";
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = `rgba(${createRandomRGBA()})`;
  });
  return square;
};

let createGridContainer = (numCol, numRow) => {
  let gridContainer = document.createElement("div");
  gridContainer.className = "grid__container";
  gridContainer.style.display = "grid";
  gridContainer.style.width = "70vh";
  gridContainer.style.height = "70vh";
  gridContainer.style.margin = "20px auto";
  gridContainer.style.gridTemplateColumns = `repeat(${numCol},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${numRow},1fr)`;
  gridContainer.style.border = `10px solid rgba(${createRandomRGBA()})`;
  for (let i = 0; i < numRow; i++) {
    for (let j = 0; j < numCol; j++) {
      gridContainer.append(createSquare(numRow, numCol, `r${i + 1}c${j + 1}`));
    }
  }
  return gridContainer;
};

let createButton = () => {
  let buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "center";
  let button = document.createElement("button");
  button.className = "reset__btn";
  button.textContent = "Change Size";
  button.addEventListener("click", () => {
    let size;
    do {
      size = prompt("Enter the size of the grid", "16");
      console.log(typeof size);
      console.log(Number.isInteger(Number(size)));
      if (size < 1 || size > 64 || !Number.isInteger(Number(size))) {
        alert("The size must be an integer between 1 and 64");
      }
    } while (size < 1 || size > 64 || !Number.isInteger(Number(size)));

    document
      .querySelector(".grid__container")
      .replaceWith(createGridContainer(size, size));
  });
  button.style.margin = "10px";
  button.style.height = "40px";
  button.style.width = "100px";

  buttonContainer.append(button);
  return buttonContainer;
};
let textHeader = document.createElement("div");
textHeader.textContent = "Etch-a-Sketch";
textHeader.style.textAlign = "center";
textHeader.style.fontSize = "50px";
textHeader.style.fontFamily = "Helvetica";
document.body.prepend(textHeader);

let buttonContainer = createButton(16, 16);
textHeader.after(buttonContainer);
buttonContainer.after(createGridContainer(16, 16));
