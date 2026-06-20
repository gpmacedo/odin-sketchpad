for (let i = 0; i < 16 * 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("square");
  document.querySelector(".grid-container").appendChild(grid);
}
