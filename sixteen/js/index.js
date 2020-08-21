window.addEventListener("load", (event) => {
  selectConsoleListener();
});

const selectConsoleListener = () => {
  const roundImgDiv = document.getElementById("1688");
  roundImgDiv.addEventListener("click", () => {
    const simulator = document.getElementById("simulator");
    simulator.classList.toggle("show");
  });
};
