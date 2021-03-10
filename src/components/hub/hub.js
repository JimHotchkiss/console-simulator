class Hub {
  static hubButtonEventListener() {
    const hubBtn = document.getElementById("hub-btn")
    if (hubBtn !== null) {
      hubBtn.addEventListener("click", () => {
        Hub.renderGuiDiv()
      })
    }
  }

  static renderGuiDiv() {
    const body = HomePage.body()
    const guiDiv = document.createElement("div")
    guiDiv.setAttribute("class", "gui-div")
    console.log(body, guiDiv)
    body.appendChild(guiDiv)
  }
}
