class Header {
  static renderHeader() {
    const headerDiv = document.createElement("div")
    headerDiv.setAttribute("class", "header-div")
    // Stryker Image
    const strykerImgDiv = document.createElement("div")
    strykerImgDiv.setAttribute("class", "stryker-img-div")
    strykerImgDiv.setAttribute("id", "stryker-img-div")

    // Append
    headerDiv.appendChild(strykerImgDiv)
    HomePage.root().appendChild(headerDiv)
  }
}
