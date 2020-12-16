window.addEventListener("load", (event) => {
  selectConsoleListener()
  homeBtnEventListener()
})

const homeBtnEventListener = () => {
  const homeIcon = document.getElementById("round-img-div")
  homeIcon.addEventListener("click", () => {
    location.replace("index.html")
  })
}

const selectConsoleListener = () => {
  const consoles = document.getElementsByClassName("console")
  const consolesDiv = document.getElementById("consoles-div")
  for (let item of consoles) {
    item.addEventListener("click", () => {
      if (item.id === "l11") {
        const lightCableDiv = document.getElementById("lightcable-div")
        resetDisplayConsole()
        lightCableDiv.classList.add("show-lightcable")
        const currentConsole = document.getElementById(item.id + "-console")
        currentConsole.classList.add("show-console")
        // consolesDiv.classList.add("consoles-hide");
      } else {
        const currentConsole = document.getElementById(item.id + "-console")
        resetDisplayConsole()
        currentConsole.classList.add("show-console")
        // consolesDiv.classList.add("consoles-hide");
      }
    })
  }
}

const resetDisplayConsole = () => {
  const lightCableDiv = document.getElementById("lightcable-div")
  lightCableDiv.classList.remove("show-lightcable")
  const show = document.getElementsByClassName("show-console")
  if (show.length > 0) {
    for (let item of show) {
      item.classList.remove("show-console")
    }
  }
}
