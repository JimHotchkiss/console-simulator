window.addEventListener("load", (event) => {
  addButtonListener();
  addArrowListener();
  document.getElementById("home-nav-button").className = "nav-buttons-clicked";
  openModalListener();
  closeModalListener();
});

// Modal
// const spyToggleBtn = document.querySelectorAll(`[data-modal-target]`);
// const spyCloseToggleBtn = document.querySelectorAll("[data-modal-close]");

const openModalListener = () => {
  const spyToggleBtn = document.getElementById("spy-toggle-div");
  spyToggleBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    openModal(modal);
  });
};

const closeModalListener = () => {
  const modalCloseBtn = document.getElementById("modal-close");
  modalCloseBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    closeModal(modal);
  });
};

const openModal = (modal) => {
  const overLay = document.getElementById("modal-overlay");
  if (modal == null) return;
  modal.classList.add("active");
  overLay.classList.add("active");
};

const closeModal = (modal) => {
  const overLay = document.getElementById("modal-overlay");
  if (modal == null) return;
  modal.classList.remove("active");
  overLay.classList.remove("active");
};

const addButtonListener = () => {
  const navBtns = document.getElementsByClassName("nav-buttons");
  const aimContainer = document.getElementById("aim-container");
  for (let item of navBtns) {
    item.addEventListener("click", () => {
      if (item.id === "aim-nav-button") {
        aimContainer.id = "aim-container-active";
        changeHomeScreen();
      } else if (item.id === "home-nav-button") {
        aimContainer.id = "aim-container";
        const homeScreen = document.getElementById("home-screen");
        homeScreen.style.display = "";
      } else {
        changeHomeScreen();
      }

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
      if (event.currentTarget.id === "left-arrow") {
        plusSlides(-1);
      } else {
        plusSlides(1);
      }
    });
  }
};

const changeHomeScreen = () => {
  const homeScreen = document.getElementById("home-screen");
  homeScreen.style.display = "none";
};

// Carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("specialty-slides");
  let dots = document.getElementsByClassName("dot");
  const defaultSpecialty = document.getElementById("specialty-default");
  if (defaultSpecialty !== null) {
    defaultSpecialty.style.display = "none";
  }

  const defaultDot = document.getElementById("default-dot");
  if (defaultDot !== null) {
    defaultDot.id = "";
  }

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " active";
}
