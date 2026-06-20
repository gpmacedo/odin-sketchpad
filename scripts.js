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
    container.innerHTML = gridSize;
  }
});
