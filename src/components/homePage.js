class HomePage {
  constructor() {
    HomePage.renderBody()
    Header.renderHeader()
    Sidebar.renderSidebar()
  }

  static root() {
    return document.getElementById("root")
  }

  static body() {
    return document.getElementById("body")
  }

  static renderBody() {
    const body = document.createElement("div")
    body.setAttribute("class", "body")
    body.setAttribute("id", "body")
    return body
  }
}
