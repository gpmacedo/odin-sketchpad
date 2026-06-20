const container = document.querySelector(".grid-container");
const btn = document.querySelector(".create-new");

for (let i = 0; i < 16 * 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("square");
  container.appendChild(grid);
}

btn.addEventListener("click", () => {
  const gridSize = prompt("Escolha o tamanho da grid", "1-100");
  if (gridSize < 1 || gridSize > 100) {
    alert("O valor da grid deve estar entre 1 e 100");
  } else {
    container.innerHTML = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
      const grid = document.createElement("div");
      grid.classList.add("square");
      container.appendChild(grid);
    }
    let squareList = document.querySelectorAll(".square");
    squareList.forEach((square) => {
      square.style.width = `calc(100vw/${gridSize})`;
      square.style.height = square.style.width;
      colorOnHover(square);
    });
  }
});

const allSquares = document.querySelectorAll(".square");

function colorOnHover(square) {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "grey";
  });
}
allSquares.forEach((square) => {
  colorOnHover(square);
});
