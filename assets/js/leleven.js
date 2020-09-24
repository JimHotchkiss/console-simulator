window.addEventListener("load", (event) => {
  handlePowerButton();
  handleNavButton();
  setHomeIconSelected();
});

const setHomeIconSelected = () => {
  const l11HomeBtn = document.getElementById("l11-home-btn");
  l11HomeBtn.classList.toggle("active");
};

const handlePowerButton = () => {
  const powerButton = document.getElementById("power-button");
  const uiContainer = document.getElementById("ui-container");
  powerButton.addEventListener("click", () => {
    // testIris();
    // testLightToggle();

    powerButton.classList.toggle("on");
    uiContainer.classList.toggle("power-on");
  });
};

const testLightToggle = () => {
  const lightcableDiv = document.getElementById("lightcord-div");
  lightcableDiv.classList.toggle("light-on");
  const lightcableImg = document.getElementById("lightcord-img");
  lightcableImg.classList.toggle("light-on-img");
  const powerBtnDiv = document.getElementById("powerBtn-div");
  console.log(powerBtnDiv);
  powerBtnDiv.classList.toggle("powerBtn-on");
};

const testIris = () => {
  const irisDiv = document.getElementsByClassName("iris-plug-div");
  for (let item of irisDiv) {
    item.classList.toggle("on");
  }
};

const handleNavButton = () => {
  const navBtnDivs = document.getElementsByClassName("l11-nav-button");
  for (let item of navBtnDivs) {
    item.addEventListener("click", (itemClicked) => {
      resetNavButtons(navBtnDivs);
      itemClicked.currentTarget.classList.toggle("active");
    });
  }
};

const resetNavButtons = (navBtnDivs) => {
  for (let item of navBtnDivs) {
    if (item.classList.value === "l11-nav-button active") {
      item.classList.remove("active");
    }
  }
};
