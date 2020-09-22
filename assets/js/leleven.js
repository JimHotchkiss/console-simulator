window.addEventListener("load", (event) => {
  handlePowerButton();
});

const handlePowerButton = () => {
  const powerButton = document.getElementById("power-button");
  powerButton.addEventListener("click", () => {
    testIris();
    powerButton.classList.toggle("on");
  });
};

const testIris = () => {
  const irisDiv = document.getElementsByClassName("iris-plug-div");
  for (let item of irisDiv) {
    item.classList.toggle("on");
  }
};
