window.addEventListener("load", (event) => {
  selectConsoleListener();
});

const selectConsoleListener = () => {
  const consoles = document.getElementsByClassName("console");
  const sixteen = document.getElementById("1688-console");
  const crossfire = document.getElementById("crossfire-console");
  for (let item of consoles) {
    item.addEventListener("click", () => {
      resetDisplayConsole();
      if (item.id === "crossfire") {
        crossfire.classList.add("show");
      } else if (item.id === "1688") {
        console.log(sixteen);
        sixteen.classList.add("show");
      }
    });
  }
};

const resetDisplayConsole = () => {
  console.log("here");
  const show = document.getElementsByClassName("show");
  if (show.length > 0) {
    for (let item of show) {
      console.log(show);
      item.classList.remove("show");
    }
  }
};
