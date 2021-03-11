class Hub {
  static hubButtonEventListener() {
    const hubBtn = document.getElementById("hub-btn")
    if (hubBtn !== null) {
      hubBtn.addEventListener("click", () => {
        Hub.clearGuiContainer()
      })
    }
  }

  static clearGuiContainer() {
    const guiDiv = document.getElementById("gui-div")
    if (guiDiv) {
      guiDiv.parentNode.removeChild(guiDiv)
    }
    Hub.renderGuiContainer()
  }

  static guiContainer() {
    return document.getElementById("gui-div")
  }

  static renderGuiContainer() {
    const body = HomePage.body()
    const guiDiv = document.createElement("div")
    guiDiv.setAttribute("class", "gui-container")
    guiDiv.setAttribute("id", "gui-div")
    body.appendChild(guiDiv)
    HubHomePage.renderHubHome()
  }
}
