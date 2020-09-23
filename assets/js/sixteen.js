window.addEventListener("load", (event) => {
  addButtonListener();
  addArrowListener();
  document.getElementById("home-nav-button").className = "nav-buttons-clicked";
  openModalListener();
  closeModalListener();
});

const modalText = [
  {
    id: "spy",
    title: "SPY Mode Requirements",
    body:
      "SPY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    // {
    //   title: "Light Sourse",
    //   pn: "0220230300",
    //   description: "L11 LED Light Source with Advanced Imaging Modality",
    // },
  },
  {
    id: "autolight",
    title: "AUTOLIGHT Information",
    body:
      "Autolight automatically adjust light settings on the light source to meet optimal light output",
  },
];

const openModalListener = () => {
  const modal = document.getElementById("modal");
  const dataSelect = document.querySelectorAll("[data-modal]");

  dataSelect.forEach((dataModal) => {
    dataModal.addEventListener("click", () => {
      const modalSubject = dataModal.dataset.modal;
      loadModalBodyText(modalSubject);
      openModal(modal);
    });
  });
};

const loadModalBodyText = (modalSubject) => {
  const modalBody = document.getElementById("modal-body");
  const modalTitleText = document.getElementById("modal-title-text");
  const modalTitle = document.getElementById("modal-title");
  const modalPnText = document.getElementById("modal-pn-text");
  const modalBodyText = document.getElementById("modal-body-description-text");
  modalText.map((obj) => {
    if (modalSubject === obj.id) {
      modalTitle.innerText = obj.title;
      modalBody.innerText = obj.body;
      // modalTitleText.innerText = obj.body.title + " : ";
      // modalPnText.innerText = obj.body.pn;
      // modalBodyText.innerText = obj.body.description;
    }
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
  const settingsContainer = document.getElementById("settings-container");
  const settingsAutoLight = document.getElementById("settings-autolight");
  for (let item of navBtns) {
    item.addEventListener("click", () => {
      if (item.id === "aim-nav-button") {
        hideHomeScreen();
        settingsContainer.classList.remove("show");
        settingsAutoLight.classList.remove("show");
        aimContainer.classList.add("active");
      } else if (item.id === "home-nav-button") {
        aimContainer.classList.remove("active");
        settingsContainer.classList.remove("show");
        settingsAutoLight.classList.remove("show");
        const homeScreen = document.getElementById("home-screen");
        homeScreen.style.display = "";
      } else {
        hideHomeScreen();
        aimContainer.classList.remove("active");
        settingsAutoLight.classList.add("show");
        settingsContainer.classList.add("show");
      }

      resetBtnBorder(clickedItem);
      const btn = clickedItem.currentTarget;
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

const hideHomeScreen = () => {
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
