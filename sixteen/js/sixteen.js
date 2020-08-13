window.addEventListener("load", (event) => {
  addButtonListener();
  addArrowListener();
});

const addButtonListener = () => {
  const navBtns = document.getElementsByClassName("nav-buttons");
  for (let item of navBtns) {
    item.addEventListener("click", () => {
      changeHomeScreen();
      resetBtnBorder();
      const btn = event.currentTarget;
      setBtnBorder(btn);
    });
  }
};

const resetBtnBorder = () => {
  const navBtns = document.getElementsByClassName("nav-buttons-clicked");
  if (navBtns !== null) {
    for (let item of navBtns) {
      item.className = "nav-buttons";
    }
  }
};
const setBtnBorder = (btn) => {
  btn.className = "nav-buttons-clicked";
};

const addArrowListener = () => {
  const arrowBtns = document.getElementsByClassName("arrow-div");
  for (let item of arrowBtns) {
    item.addEventListener("click", () => {
      console.log(event.currentTarget);
    });
  }
};

const changeHomeScreen = () => {
  const homeScreen = document.getElementById("home-screen");
  homeScreen.style.display = "none";
};

// Carousel
