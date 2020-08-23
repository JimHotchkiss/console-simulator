window.addEventListener("load", (event) => {
  selectConsoleListener();
});

const selectConsoleListener = () => {
  const consoles = document.getElementsByClassName("console");
  for (let item of consoles) {
    item.addEventListener("click", () => {
      console.log(item);
      const currentConsole = document.getElementById(item.id + "-console");
      console.log(currentConsole);
      resetDisplayConsole();
      currentConsole.classList.add("show");
    });
  }
};

const resetDisplayConsole = () => {
  const show = document.getElementsByClassName("show");
  if (show.length > 0) {
    for (let item of show) {
      item.classList.remove("show");
    }
  }
};
