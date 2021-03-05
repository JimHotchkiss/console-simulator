class Sidebar {
  static renderSidebar() {
    const body = HomePage.renderBody()
    const sidebar = document.createElement("div")
    sidebar.setAttribute("class", "sidebar")
    // Home image
    const homeDiv = Sidebar.renderHomeDiv()
    // Navbar
    const navbar = Navbar.renderNavbar()
    // Append child
    sidebar.appendChild(homeDiv)
    body.appendChild(sidebar)
    body.appendChild(navbar)
    HomePage.root().appendChild(body)
    Navbar.renderNavbar()
  }

  static renderHomeDiv() {
    const homeDiv = document.createElement("div")
    homeDiv.setAttribute("class", "home-div")
    const homeImgDiv = document.createElement("div")
    homeImgDiv.setAttribute("class", "home-img-div")
    homeDiv.appendChild(homeImgDiv)
    return homeDiv
  }
}
