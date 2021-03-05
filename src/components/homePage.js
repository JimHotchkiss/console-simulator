class HomePage {
  constructor() {
    HomePage.renderBody()
    Header.renderHeader()
    Sidebar.renderSidebar()
  }

  static root() {
    return document.getElementById("root")
  }

  static renderBody() {
    const body = document.createElement("div")
    body.setAttribute("class", "body")
    return body
  }
}
