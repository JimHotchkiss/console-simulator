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
  defaultSpecialty.style.display = "none";
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
  console.log(slides[slideIndex - 1] !== "undefined");
  if (slides[slideIndex - 1] !== "undefined") {
    slides[slideIndex - 1].style.display = "block";
  }

  dots[slideIndex - 1].className += " active";
}
