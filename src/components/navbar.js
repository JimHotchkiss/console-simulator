class Navbar {
  static renderNavbar() {
    const navbar = document.createElement("div")
    navbar.setAttribute("class", "navbar")
    navbar.setAttribute("id", "navbar")
    Navbar.renderConsoleBtn(navbar)
    return navbar
  }

  static renderConsoleBtn(navbar) {
    const consoleBtn = document.createElement("div")
    consoleBtn.setAttribute("class", "console-btn")
    consoleBtn.setAttribute("id", "hub-btn")
    consoleBtn.innerText = "HUB"
    navbar.appendChild(consoleBtn)
    Hub.hubButtonEventListener()
  }
}
