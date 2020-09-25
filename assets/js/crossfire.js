window.addEventListener("load", (event) => {
  handleFootPedal();
});

const shavers = [
  { name: "4.0 XL DMND BUR" },
  { name: "5.5 XL DMND BUR" },
  { name: "5.0mm AUGER BUR" },
  { name: "3.5mm COUGAR" },
  { name: "3.5mm RESECTOR" },
  { name: "3.5mm AGG PLUS" },
  { name: "3.5mm TOMCAT" },
  { name: "4.0mm COUGAR" },
  { name: "4.0mm RESECTOR" },
  { name: "4.0mm DOUBLE BITE" },
  { name: "4.0mm AGG PLUS" },
  { name: "4.0mm TOMCAT" },
  { name: "4.0mm SCALLOPED" },
  { name: "4.0mm SLTTD WHISKR" },
  { name: "4.0mm WHISKER" },
  { name: "5.0mm COUGAR" },
  { name: "5.0mm RESECTOR" },
  { name: "5.0mm AGG PLUS" },
  { name: "5.0mm TOMCAT" },
  { name: "5.0mm SLTTD WHISKR" },
  { name: "5.5mm RESECTOR" },
  { name: "5.5mm AGG PLUS" },
  { name: "5.5mm TOMCAT" },
  { name: "5.5mm SCALLOPED" },
  { name: "2.5mm SJ FULL RAD" },
  { name: "2.5mm SJ AGG CUTTR" },
  { name: "3.5mm TOMCAT SJ" },
  { name: "3.5mm SJ FULL RAD" },
  { name: "3.5mm SJ AGG CUTTR" },
  { name: "2.0 SJ HD ABRSN BR" },
  { name: "3.0 SJ HD ABRSN BR" },
  { name: "3.0 UHD ABRSN BUR" },
  { name: "3.5mm END CUTTER" },
  { name: "4.0mm END CUTTER" },
  { name: "5.0mm END CUTTER" },
  { name: "1.5 SUBCHONDRL DRL" },
  { name: "4.0mm TRUE END" },
  { name: "3.5 ROUND BUR-6FL" },
  { name: "4.0 ROUND BUR-6FL" },
  { name: "4.0 ROUND BUR-12FL" },
  { name: "4.0 UNHDED RND BUR" },
  { name: "4.0 BRL BUR-6FL" },
  { name: "4.0 BRL BUR-12FL" },
  { name: "4.0 UNHDED BRL BUR" },
  { name: "4.0mm SLAP BUR" },
  { name: "4.0 FLAME BUR-8FL" },
  { name: "5.5 ROUND BUR-6FL" },
  { name: "5.5 ROUND BUR-12FL" },
  { name: "5.0 ROUND BUR-6FL" },
  { name: "5.0 ROUND BUR-12FL" },
  { name: "5.5 UNHDED RND BUR" },
  { name: "5.5 BRL BUR-6FL" },
  { name: "5.5 BRL BUR-12FL" },
  { name: "5.0 BRL BUR-6FL" },
  { name: "5.0 BRL BUR-12FL" },
  { name: "5.5 UNHDED BRL BUR" },
  { name: "5.5mm EGG BUR" },
  { name: "5.5 BRL BUR-6FL LH" },
  { name: "5.5 BRL BUR12FL LH" },
  { name: "5.5 FLAME BUR-8FL" },
  { name: "3.5 PP SB RESECTOR" },
  { name: "3.5 PP DB RESECTOR" },
  { name: "3.5 PP SB AGGPLUS" },
  { name: "3.5 PP DB AGGPLUS" },
  { name: "3.5 PP SB TOMCAT" },
  { name: "3.5 PP DB TOMCAT" },
  { name: "4.5 ANGLD RSCTR" },
  { name: "4.0 PP SB RESECTOR" },
  { name: "4.0 PP DB RESECTOR" },
  { name: "4.5 ANG DBL BITE" },
  { name: "4.0 ANGLD AGG PLUS" },
  { name: "4.5 ANGLD AGG PLUS" },
  { name: "4.0 PP SB AGGPLUS" },
  { name: "4.0 PP DB AGGPLUS" },
  { name: "4.0 ANGLED TOMCAT" },
  { name: "4.5 ANGLED TOMCAT" },
  { name: "4.0 PP SB TOMCAT" },
  { name: "4.0 PP DB TOMCAT" },
  { name: "5.0 ANGLD RSCTR" },
  { name: "5.0 ANGLD AGG PLUS" },
  { name: "5.0 ANGLED TOMCAT" },
  { name: "4.0 AGG PLS-XL" },
  { name: "4.0 ANG AGG PLUS-X" },
  { name: "4.0 TOMCAT-XL" },
  { name: "4.0 ANG TOMCAT-XL" },
  { name: "5.0 RESECTOR-XL" },
  { name: "5.0mm AGG PLUS-XL" },
  { name: "5.5mm RESECTOR-XL" },
  { name: "4.0 BRL BUR-XL 8FL" },
  { name: "4.0 PR BUR-XL 8FL" },
  { name: "5.5 RND BUR-XL 8FL" },
  { name: "5.5 BRL BUR-XL 8FL" },
  { name: "5.5 PR BUR-XL 8FL" },
  { name: "5.0mm PR BUR-XL8FL" },
  { name: "3.5mm XFX RESECTOR" },
  { name: "3.5mm XFX AGG PLUS" },
  { name: "3.5mm XFX TOMCAT" },
  { name: "4.0mm XFX RESECTOR" },
  { name: "4.0mm XFX AGG PLUS" },
  { name: "4.0mm XFX TOMCAT" },
  { name: "5.0mm XFX RESECTOR" },
  { name: "5.0mm XFX AGG PLUS" },
  { name: "5.0mm XFX TOMCAT" },
  { name: "5.5mm XFX RESECTOR" },
  { name: "5.5mm XFX AGG PLUS" },
  { name: "5.5mm XFX TOMCAT" },
];

// constants

const handleFootPedal = () => {
  const footPedal = document.getElementById("ftswitch-div");
  footPedal.addEventListener("click", () => {
    openModalListener();
  });
};

const showCrsFrTextModal = (obj) => {
  console.log(obj);
  const modalTitle = document.getElementById("modal-title");
  const modalBodyDescription = document.getElementById(
    "modal-body-description"
  );
  const ftSwitchImg = document.createElement("div");
  ftSwitchImg.setAttribute("class", "modal-ftstch-img-div");

  modalBodyDescription.appendChild(ftSwitchImg);
  modalTitle.innerText = obj.title;
  modalBodyDescription.innerText = obj.body;
  modalBodyDescription.appendChild(ftSwitchImg);
};

// const listShavers = () => {
//   for (let item of shavers) {
//     console.log(item.name);
//   }
// };
