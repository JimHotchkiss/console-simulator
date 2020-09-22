window.addEventListener("load", (event) => {
  handlePowerButton();
});

const handlePowerButton = () => {
  const powerButton = document.getElementById("power-button");
  powerButton.addEventListener("click", () => {
    powerButton.classList.toggle("on");
  });
};
