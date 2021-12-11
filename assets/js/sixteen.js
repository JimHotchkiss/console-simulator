window.addEventListener("load", (event) => {
  addButtonListener()
  addArrowListener()
  document.getElementById("home-nav-button").className = "nav-buttons-clicked"
  openModalListener()
  closeModalListener()
  closeModalWithOverlayListener()
})

const modalText = [
  {
    id: "spy",
    title: "SPY Mode Requirements",
    body: [
      {
        condition:
          "A 1688 Camera Head is connected to the camera console" +
          " " +
          "(must be model 1688210105, 1688610122, or 1688710105)",
      },
      {
        condition:
          "The Laparoscopy or Standard surgical specialty is selected on the camera console",
      },
      {
        condition:
          "The camera console is connected to the L11 LED Light Source (using a USB 3.0 A-to-B cable provided with the light source)",
      },
      {
        condition:
          "The light source is connected to an AIM SafeLight cable (0233-050-300)",
      },
      {
        condition:
          "A SafeLight scope adapter is connected to the SafeLight cable (see the cable user manual for compatible adapter part numbers)",
      },
      { condition: "Light output is activated from the light source" },
      {
        condition:
          "Neither the White Balance screen or the camera head button configuration screen are present on the display monitor",
      },
    ],
    // "SPY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "autolight",
    title: "AUTOLIGHT Information",
    body:
      "Autolight automatically adjust light settings on the light source to meet optimal light output",
  },
  {
    id: "crsfr-ftswitch",
    title: "Crossfire2 Foot Switch",
    body:
      "Footswitch Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "standard",
    title: "Specialty: Standard",
    body:
      "Standard specialty Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "arthroscopy",
    title: "Specialty: Arthroscopy",
    body:
      "Arthroscopy specialty Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "cystoscopy",
    title: "Specialty: Cystoscopy",
    body:
      "Cystoscopy specialty Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "hysteroscopy",
    title: "Specialty: Hysteroscopy",
    body:
      "Hysteroscopy specialty Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "laparoscopy",
    title: "Specialty: Laparoscopy",
    body:
      "Laparoscopy specialty Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "laser",
    title: "Specialty: Laser",
    body:
      "Laser specialty Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "microscope",
    title: "Specialty: Microscope",
    body:
      "Microscope specialty Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
]

const openModalListener = () => {
  const modal = document.getElementById("modal")
  const dataSelect = document.querySelectorAll("[data-modal]")
  dataSelect.forEach((dataModal) => {
    dataModal.addEventListener("click", () => {
      const modalSubject = dataModal.dataset.modal
      loadModalBodyText(modalSubject)
      openModal(modal)
    })
  })
}

const loadModalBodyText = (modalSubject) => {
  const modalBody = document.getElementById("modal-body")
  modalBody.innerText = ""
  const modalTitle = document.getElementById("modal-title")
  modalText.map((obj) => {
    if (modalSubject === obj.id) {
      if (obj.id === "spy") {
        toggleSpyBtn()
        modalTitle.innerText = obj.title
        obj.body.map((item, i) => {
          const ul = document.createElement("ul")
          const li = document.createElement("li")
          li.setAttribute("class", "spy-li")
          li.innerText = i + 1 + "." + " " + item.condition
          ul.appendChild(li)
          modalBody.appendChild(ul)
        })
      } else {
        modalTitle.innerText = obj.title
        modalBody.innerText = obj.body
      }
    }
  })
}

const toggleSpyBtn = () => {
  // console.log("spy btn")
}
const closeModalListener = () => {
  const modalCloseBtn = document.getElementById("modal-close")
  modalCloseBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal")
    closeModal(modal)
  })
}

const closeModalWithOverlayListener = () => {
  const overLay = document.getElementById("modal-overlay")
  overLay.addEventListener("click", () => {
    const modal = document.getElementById("modal")
    closeModal(modal)
  })
}

const openModal = () => {
  const overLay = document.getElementById("modal-overlay")
  const modal = document.getElementById("modal")

  modal.classList.add("active")
  overLay.classList.add("active")
}

const closeModal = (modal) => {
  const overLay = document.getElementById("modal-overlay")
  if (modal.classList.value === "modal crossfire-active") {
    modal.classList.remove("crossfire-active")
    overLay.classList.remove("crossfire-active")
  } else if (modal.classList.value === "modal crossfire-errors") {
    modal.classList.remove("crossfire-errors")
    overLay.classList.remove("crossfire-errors")
  } else {
    modal.classList.remove("active")
    overLay.classList.remove("active")
  }
}

const addButtonListener = () => {
  const navBtns = document.getElementsByClassName("nav-buttons")
  const aimContainer = document.getElementById("aim-container")
  const settingsContainer = document.getElementById("settings-container")
  const settingsAutoLight = document.getElementById("settings-autolight")
  for (let item of navBtns) {
    item.addEventListener("click", (currentEvent) => {
      if (item.id === "aim-nav-button") {
        hideHomeScreen()
        settingsContainer.classList.remove("show")
        settingsAutoLight.classList.remove("show")
        aimContainer.classList.add("active")
      } else if (item.id === "home-nav-button") {
        aimContainer.classList.remove("active")
        settingsContainer.classList.remove("show")
        settingsAutoLight.classList.remove("show")
        const homeScreen = document.getElementById("home-screen")
        homeScreen.style.display = ""
      } else {
        hideHomeScreen()
        aimContainer.classList.remove("active")
        settingsAutoLight.classList.add("show")
        settingsContainer.classList.add("show")
      }

      resetBtnBorder(currentEvent)
      const btn = currentEvent.currentTarget
      setBtnBorder(btn)
    })
  }
}

const resetBtnBorder = () => {
  const navBtns = document.getElementsByClassName("nav-buttons-clicked")
  if (navBtns !== null) {
    for (let item of navBtns) {
      item.className = "nav-buttons"
    }
  }
}
const setBtnBorder = (btn) => {
  btn.className = "nav-buttons-clicked"
}

const addArrowListener = () => {
  const arrowBtns = document.getElementsByClassName("arrow-div")
  for (let item of arrowBtns) {
    item.addEventListener("click", () => {
      if (event.currentTarget.id === "left-arrow") {
        plusSlides(-1)
      } else {
        plusSlides(1)
      }
    })
  }
}

const hideHomeScreen = () => {
  const homeScreen = document.getElementById("home-screen")
  homeScreen.style.display = "none"
}

// Carousel

let slideIndex = 1
// showSlides(slideIndex)

function plusSlides(n) {
  console.log(slideIndex)
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  // console.log(n)
  let i
  let slides = document.getElementsByClassName("specialty-slides")
  // console.log(slides)
  let dots = document.getElementsByClassName("dot")
  console.log(dots)
  const defaultSpecialty = document.getElementById("specialty-default")
  if (defaultSpecialty !== null) {
    defaultSpecialty.style.display = "none"
  }

  const defaultDot = document.getElementById("default-dot")
  if (defaultDot !== null) {
    defaultDot.id = ""
  }

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"

  dots[slideIndex - 1].className += " active"
}
