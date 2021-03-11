class HubHomePage {
  static renderHubHome() {
    HubHomePage.renderPatientProfileRow()
    HubHomePage.renderStartCaseRow()
    HubHomePage.renderPrinterMenuRow()
  }

  static renderPatientProfileRow() {
    const guiDiv = document.getElementById("gui-div")
    const patientProfileDiv = document.createElement("div")
    patientProfileDiv.setAttribute("class", "patient-profile-div")
    guiDiv.appendChild(patientProfileDiv)
  }

  static renderStartCaseRow() {
    const guiDiv = Hub.guiContainer()
    const startCaseRowDiv = document.createElement("div")
    startCaseRowDiv.setAttribute("class", "start-case-div")
    startCaseRowDiv.setAttribute("id", "start-case-div")
    guiDiv.appendChild(startCaseRowDiv)
    HubHomePage.renderStartIcon()
  }

  static renderStartIcon() {
    HubHomePage.renderStartIconOuter()
  }

  static renderStartIconOuter() {
    const startCaseRow = document.getElementById("start-case-div")
    const startIconOuter = document.createElement("div")
    startIconOuter.setAttribute("class", "start-icon-outer-div")
    startIconOuter.setAttribute("id", "start-icon-outer-div")
    startCaseRow.appendChild(startIconOuter)
    HubHomePage.renderImgOuterCircle()
    HubHomePage.renderStartText()
  }

  static renderStartText() {
    const startIconOuter = document.getElementById("start-icon-outer-div")
    const startText = document.createElement("div")
    startText.setAttribute("class", "start-text")
    startText.innerText = "Start Case"
    startIconOuter.appendChild(startText)
  }

  static renderImgOuterCircle() {
    const startIconOuter = document.getElementById("start-icon-outer-div")
    const imageOuterCircle = document.createElement("div")
    imageOuterCircle.setAttribute("class", "image-outer-circle")
    imageOuterCircle.setAttribute("id", "image-outer-circle")
    startIconOuter.appendChild(imageOuterCircle)
    HubHomePage.renderImgInnerCircle()
    HubHomePage.bindingStartCaseEventListener()
  }

  static bindingStartCaseEventListener() {
    const startIconOuter = document.getElementById("start-icon-outer-div")
    startIconOuter.addEventListener("click", () => {
      alert("sup")
    })
  }

  static renderImgInnerCircle() {
    const imageOuterCircle = document.getElementById("image-outer-circle")
    const imageInnerCircle = document.createElement("div")
    imageInnerCircle.setAttribute("class", "image-inner-circle")
    imageInnerCircle.setAttribute("id", "image-inner-circle")
    imageOuterCircle.appendChild(imageInnerCircle)
    HubHomePage.renderImageDiv()
  }

  static renderImageDiv() {
    const imgInnerCircle = document.getElementById("image-inner-circle")
    const imageDiv = document.createElement("div")
    imageDiv.setAttribute("class", "image-div")
    imageDiv.setAttribute("id", "image-div")
    imgInnerCircle.appendChild(imageDiv)
  }

  static renderPrinterMenuRow() {
    const guiDiv = Hub.guiContainer()
    const printerMenuDiv = document.createElement("div")
    printerMenuDiv.setAttribute("class", "printer-menu-div")
    guiDiv.appendChild(printerMenuDiv)
  }
}
