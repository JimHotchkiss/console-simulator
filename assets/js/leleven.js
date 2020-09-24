window.addEventListener("load", (event) => {
  handlePowerButton();
  handleNavButton();
  setHomeIconSelected();
  handleLightCable();
  handleLightSourceToggle();
});

const handleLightSourceToggle = () => {
  const powerBtn = document.getElementById("powerBtn-div");
  powerBtn.addEventListener("click", () => {
    if (checkLightCordPlug() === true) {
      console.log(checkLightCordPlug());
      powerBtn.classList.toggle("powerBtn-div-on");
    } else {
      console.log(checkLightCordPlug());
      alert("Remeber to connect a lightcable");
    }
  });
};

const checkLightCordPlug = () => {
  const lightcordDiv = document.getElementById("lightcord-div");
  if (lightcordDiv.classList.value === "lightcord-div light-on") return true;
};

const handleLightCable = () => {
  const powerBtn = document.getElementById("power-button");

  const lightCableDiv = document.getElementById("lightcable-div");
  lightCableDiv.addEventListener("click", () => {
    console.log(powerBtn.classList.value);
    if (powerBtn.classList.value !== "power-button-div on") {
      console.log(powerBtn.classList.value);
      alert("Be sure to power on the L11!");
    } else {
      const lightcableDiv = document.getElementById("lightcord-div");
      lightcableDiv.classList.toggle("light-on");
      const lightcableImg = document.getElementById("lightcord-img");
      lightcableImg.classList.toggle("light-on-img");
      lightToggle();
    }
  });
};

const setHomeIconSelected = () => {
  const l11HomeBtn = document.getElementById("l11-home-btn");
  l11HomeBtn.classList.toggle("active");
};

const handlePowerButton = () => {
  const powerBtnDiv = document.getElementById("powerBtn-div");
  const lightcablediv = document.getElementById("lightcord-div");
  const powerButton = document.getElementById("power-button");
  const uiContainer = document.getElementById("ui-container");
  powerButton.addEventListener("click", () => {
    if (lightcablediv.classList.value === "lightcord-div light-on") {
      lightcablediv.classList.toggle("light-on");
      powerBtnDiv.classList.toggle("powerBtn-on");
    }
    powerButton.classList.toggle("on");
    uiContainer.classList.toggle("power-on");
  });
};

const lightToggle = () => {
  const powerBtnDiv = document.getElementById("powerBtn-div");
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
