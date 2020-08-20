window.addEventListener("load", (event) => {
  selectConsoleListener();
});

const selectConsoleListener = () => {
  const roundImgDiv = document.getElementById("round-img-div");
  roundImgDiv.addEventListener("click", () => {
    const simulator = document.getElementById("simulator");
    simulator.classList.add("show");
  });
};
