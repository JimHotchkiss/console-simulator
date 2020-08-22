window.addEventListener("load", (event) => {
  handpieceEventListener();
});

const shavers = [{ name: "4.0 MM AGG PLUS", default_rpm: "1800" }];

const handpieceEventListener = () => {
  const handpiece = document.getElementById("shaver");
  handpiece.addEventListener("click", () => {
    const shaverTitle = document.getElementById("shaver-title-text");
    shaverTitle.innerText = shavers[0].name;
  });
};
