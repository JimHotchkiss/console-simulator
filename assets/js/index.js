window.addEventListener("load", (event) => {
  selectConsoleListener();
});

const selectConsoleListener = () => {
  const consoles = document.getElementsByClassName("console");
  for (let item of consoles) {
    item.addEventListener("click", () => {
      if (item.id === "l11") {
        const lightCableDiv = document.getElementById("lightcable-div");
        resetDisplayConsole();
        lightCableDiv.classList.add("show");
        const currentConsole = document.getElementById(item.id + "-console");
        currentConsole.classList.add("show");
      } else {
        const currentConsole = document.getElementById(item.id + "-console");
        resetDisplayConsole();
        currentConsole.classList.add("show");
      }
    });
  }
};

const resetDisplayConsole = () => {
  const lightCableDiv = document.getElementById("lightcable-div");
  lightCableDiv.classList.remove("show");
  const show = document.getElementsByClassName("show");
  if (show.length > 0) {
    for (let item of show) {
      item.classList.remove("show");
    }
  }
};
