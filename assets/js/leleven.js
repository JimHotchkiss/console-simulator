window.addEventListener("load", (event) => {
  handlePowerButton();
  handleNavButton();
  setHomeIconSelected();
  handleLightCable();
  handleLightSourceToggle();
});

const handleLightSourceToggle = () => {
  const lsToggle = document.getElementById("ls-toggle-div");
  lsToggle.addEventListener("click", () => {
    if (checkLightCordPlug() === true) {
      lightToggle();
    } else {
      alert("Remeber to connect a lightcable");
    }
  });
};

const checkLightCordPlug = () => {
  const lightcordDiv = document.getElementById("lightcord-div");
  if (lightcordDiv.classList.value === "lightcord-div light-on") {
    return true;
  } else {
    return false;
  }
};

const checkLsToggle = () => {
  const lsToggleDiv = document.getElementById("ls-toggle-div");
  if (lsToggleDiv.classList.value === "ls-toggle-div ls-toggle-div-on") {
    return true;
  } else {
    return false;
  }
};

const handleLightCable = () => {
  const powerBtn = document.getElementById("power-button");
  const lightcableDiv = document.getElementById("lightcord-div");
  const lightCableDiv = document.getElementById("lightcable-div");
  const lsToggleDiv = document.getElementById("ls-toggle-div");
  lightCableDiv.addEventListener("click", () => {
    if (powerBtn.classList.value !== "power-button-div on") {
      console.log(powerBtn.classList.value);
      alert("Be sure to power on the L11!");
    } else if (
      lsToggleDiv.classList.value === "ls-toggle-div ls-toggle-div-on"
    ) {
      lightcableDiv.classList.toggle("light-on");
      lightToggle();
    } else {
      lightcableDiv.classList.toggle("light-on");
    }
  });
};

const setHomeIconSelected = () => {
  const l11HomeBtn = document.getElementById("l11-home-btn");
  l11HomeBtn.classList.toggle("active");
};

const handlePowerButton = () => {
  const lightcablediv = document.getElementById("lightcord-div");
  const powerButton = document.getElementById("power-button");
  const uiContainer = document.getElementById("ui-container");
  powerButton.addEventListener("click", () => {
    if (checkLightCordPlug() && checkLsToggle()) {
      lightToggle();
      lightcablediv.classList.toggle("light-on");
    }
    powerButton.classList.toggle("on");
    uiContainer.classList.toggle("power-on");
  });
};

const lightToggle = () => {
  const lsToggleDiv = document.getElementById("ls-toggle-div");
  console.log(lsToggleDiv);
  lsToggleDiv.classList.toggle("ls-toggle-div-on");
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
