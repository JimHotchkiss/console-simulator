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
