window.addEventListener("load", (event) => {
  handleFootPedal();
  handleShaveInsertSelect();
  loadShaverInserts();
  handleShaverInsertInformation();
  handleErrorCodesListener();
  handleHandpieceToggleListener();
});

const shavers = [
  {
    name: "Select Shaver Insert",
    pn: "part number",
    increment: "increment",
    fwd_low_default: "fwd low default",
    fwd_low_min: "fwd low min",
    fwd_low_max: "fwd low max",
    fwd_high_default: "fwd high default",
    fwd_high_min: "fwd high min",
    fwd_high_max: "fwd high max",
    revs_low_default: "revs low default",
    revs_low_max: "revs low max",
    revs_low_min: "revs low min",
    revs_high_default: "revs high default",
    revs_high_max: "revs high max",
    osc_default: "osc default",
    osc_max: "osc max",
    osc_min: "osc min",
  },
  {
    name: "5.0mm AUGER BUR",
    pn: "0375450500",
    increment: "400",
    fwd_low_default: "2000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "8000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "2000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "8000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1400",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.5mm COUGAR",
    pn: "0375531000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.5mm RESECTOR",
    pn: "0375532000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.5mm AGG PLUS",
    pn: "0375534000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.5mm TOMCAT",
    pn: "0375535000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm COUGAR",
    pn: "0375541000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm RESECTOR",
    pn: "0375542000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm DOUBLE BITE",
    pn: "0375543000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm AGG PLUS",
    pn: "0375544000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm TOMCAT",
    pn: "0375545000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm SCALLOPED",
    pn: "0375546000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm SLTTD WHISKR",
    pn: "0375548000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm WHISKER",
    pn: "0375549000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0mm COUGAR",
    pn: "0375551000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0mm RESECTOR",
    pn: "0375552000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0mm AGG PLUS",
    pn: "0375554000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0mm TOMCAT",
    pn: "0375555000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0mm SLTTD WHISKR",
    pn: "0375558000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5mm RESECTOR",
    pn: "0375562000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5mm AGG PLUS",
    pn: "0375564000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5mm TOMCAT",
    pn: "0375565000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5mm SCALLOPED",
    pn: "0375566000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "2.5mm SJ FULL RAD",
    pn: "0375627000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "2.5mm SJ AGG CUTTR",
    pn: "0375628000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.5mm TOMCAT SJ",
    pn: "0375636000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.5mm SJ FULL RAD",
    pn: "0375637000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.5mm SJ AGG CUTTR",
    pn: "0375638000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "2.0 SJ HD ABRSN BR",
    pn: "0375641000",
    increment: "300",
    fwd_low_default: "1800",
    fwd_low_min: "900",
    fwd_low_max: "3000",
    fwd_high_default: "1800",
    fwd_high_min: "900",
    fwd_high_max: "3000",
    rev_low_default: "1800",
    rev_low_min: "900",
    rev_low_max: "3000",
    rev_high_default: "1800",
    rev_high_min: "900",
    rev_high_max: "3000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.0 SJ HD ABRSN BR",
    pn: "0375647000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.0 UHD ABRSN BUR",
    pn: "0375648000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.5mm END CUTTER",
    pn: "0375737000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm END CUTTER",
    pn: "0375747000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0mm END CUTTER",
    pn: "0375757000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "1.5 SUBCHONDRL DRL",
    pn: "0375832000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm TRUE END",
    pn: "0375884000",
    increment: "350",
    fwd_low_default: "2500",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "5000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "2500",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "5000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "3.5 ROUND BUR-6FL",
    pn: "0375930000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 ROUND BUR-6FL",
    pn: "0375940000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 ROUND BUR-12FL",
    pn: "0375940012",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 UNHDED RND BUR",
    pn: "0375940200",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 BRL BUR-6FL",
    pn: "0375941000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 BRL BUR-12FL",
    pn: "0375941012",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 UNHDED BRL BUR",
    pn: "0375941200",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0mm SLAP BUR",
    pn: "0375941500",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 FLAME BUR-8FL",
    pn: "0375944000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5 ROUND BUR-6FL",
    pn: "0375950000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5 ROUND BUR-12FL",
    pn: "0375950012",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0 ROUND BUR-6FL",
    pn: "0375950100",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0 ROUND BUR-12FL",
    pn: "0375950112",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5 UNHDED RND BUR",
    pn: "0375950200",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5 BRL BUR-6FL",
    pn: "0375951000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5 BRL BUR-12FL",
    pn: "0375951012",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0 BRL BUR-6FL",
    pn: "0375951100",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0 BRL BUR-12FL",
    pn: "0375951112",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5 UNHDED BRL BUR",
    pn: "0375951200",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5mm EGG BUR",
    pn: "0375952000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5 BRL BUR-6FL LH",
    pn: "0375953000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5 BRL BUR-12FL LH",
    pn: "0375953012",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.5 FLAME BUR-8FL",
    pn: "0375954000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.5 ANGLD RSCTR",
    pn: "0380542150",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.5 ANG DBL BITE",
    pn: "0380543150",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 ANGLD AGG PLUS",
    pn: "0380544100",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "2100",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.5 ANGLD AGG PLUS",
    pn: "0380544150",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "2100",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 ANGLED TOMCAT",
    pn: "0380545100",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "2100",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.5 ANGLED TOMCAT",
    pn: "0380545150",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0 ANGLD RSCTR",
    pn: "0380552100",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "2100",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0 ANGLD AGG PLUS",
    pn: "0380554100",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "2100",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "5.0 ANGLED TOMCAT",
    pn: "0380555100",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "2100",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 LG HIP AGG PLS",
    pn: "0385544000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 LG ANG HIP AGG",
    pn: "0385544100",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 LG HIP TOMCAT",
    pn: "0385545000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "6000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "6000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 LG ANG HIP TC",
    pn: "0385545100",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "3000",
    fwd_high_min: "900",
    fwd_high_max: "6000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "3000",
    rev_high_min: "900",
    rev_high_max: "6000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 HIP BRL BUR8FL",
    pn: "0385941000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 HIP PR BUR8FL",
    pn: "0385943000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "4.0 HIP PR BUR8FL",
    pn: "0385943000",
    increment: "300",
    fwd_low_default: "3000",
    fwd_low_min: "900",
    fwd_low_max: "6000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "3000",
    rev_low_min: "900",
    rev_low_max: "6000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "Default - Formula Blades",
    pn: "03********",
    increment: "300",
    fwd_low_default: "1800",
    fwd_low_min: "900",
    fwd_low_max: "3000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "1800",
    rev_low_min: "900",
    rev_low_max: "3000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "Default - Cutter",
    pn: "03755*****,03757*****,03758*****",
    increment: "300",
    fwd_low_default: "1800",
    fwd_low_min: "900",
    fwd_low_max: "3000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "1800",
    rev_low_min: "900",
    rev_low_max: "3000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
  {
    name: "Default - Bur",
    pn: "03759*****",
    increment: "300",
    fwd_low_default: "1800",
    fwd_low_min: "900",
    fwd_low_max: "3000",
    fwd_high_default: "9000",
    fwd_high_min: "900",
    fwd_high_max: "12000",
    rev_low_default: "1800",
    rev_low_min: "900",
    rev_low_max: "3000",
    rev_high_default: "9000",
    rev_high_min: "900",
    rev_high_max: "12000",
    osc_default: "1800",
    osc_min: "900",
    osc_max: "3000",
  },
];

const errorsA = [
  {
    error_id: "A1",
    description: "Vessel Seal no vessel detected",
    troubleshoot: "Not available in Crossfire2",
  },
  {
    error_id: "A2",
    description: "Vessel Seal incomplete seal",
    troubleshoot: "Not available in Crossfire2",
  },
  {
    error_id: "A3",
    description: "Vessel Seal incomplete seal due to user interruption",
    troubleshoot: "Not available in Crossfire2",
  },
  {
    error_id: "A4",
    description: "MC Board communication timeout fault",
    troubleshoot: "Reseat MC Board. Replace Motor Control Board",
  },
  {
    error_id: "A5",
    description: "MC Board divide by zero fault",
    troubleshoot: "Reseat MC Board. Replace Motor Control Board",
  },
  {
    error_id: "A6",
    description: "RF Board communication timeout fault",
    troubleshoot: "Replace Power (RF) Board",
  },
  {
    error_id: "A7",
    description: "RF Board RF over current fault",
    troubleshoot: "Replace Power (RF) Board",
  },
  {
    error_id: "A8",
    description: "RF Board RF over current fault",
    troubleshoot: "Replace Power (RF) Board",
  },
  {
    error_id: "A9",
    description: "RF Board motor overcurrent fault",
    troubleshoot: "Replace Power (RF) Board",
  },
  {
    error_id: "A10",
    description: "RF Board motor overvoltage fault",
    troubleshoot: "Replace Power (RF) Board",
  },
  {
    error_id: "A11",
    description: "Power (RF) Board over temperature fault",
    troubleshoot:
      "Verify fan operation. Reseat heat sinks. Remove CrossFire2 unit from poorly ventilated areas. (e.g. tower with other consoles on top of CrossFire2). Replace Power (RF) Board",
  },
  {
    error_id: "A12",
    description: "RF Board watchdog fault",
    troubleshoot: "Replace Power (RF)Board",
  },
  {
    error_id: "A13",
    description: "RF Board watchdog fault",
    troubleshoot: "Replace Power (RF)Board",
  },
  {
    error_id: "A14",
    description: "MC Board uninitialized fault",
    troubleshoot: "Replace Motor Control Board",
  },
  {
    error_id: "A15",
    description: "MC Board power supply voltage monitor fault",
    troubleshoot: "Replace Motor Control Board",
  },
  {
    error_id: "A16",
    description: "MC Board invalid port fault",
    troubleshoot: "Replace Motor Control Board",
  },
];

const errorsE = [
  {
    error_id: "E1",
    description: "SFB Connect Error",
    troubleshoot:
      "Verify SFB connections. Use a known good cable. Use a known good SFB device (pump/SDC/etc). Replace Motor Control Board",
  },
  {
    error_id: "E2",
    description: "MC Board FPGA Initialization lockdown",
    troubleshoot: "Replace Motor Control Board",
  },
  {
    error_id: "E3",
    description: "MC Board FPGA Programming lockdown",
    troubleshoot: "Replace Motor Control Board",
  },
  {
    error_id: "E4",
    description: "MC Board FPGA address test lockdown",
    troubleshoot: "Replace Motor Control Board",
  },
  {
    error_id: "E5",
    description: "MC Board FPGA data test lockdown",
    troubleshoot: "Replace Motor Control Board",
  },
];

const errorsP = [
  {
    error_id: "P1",
    description: "Handpiece disposable not recognized",
    troubleshoot:
      "Use a known good handpiece/disposable. Verify Receptacle Board connection. Verify Handpiece connection. Replace receptacle board",
  },
  {
    error_id: "P2",
    description: "Unknown disposable",
    troubleshoot:
      "Use a known good handpiece/disposable. Verify Receptacle Board connection. Verify Handpiece connection. Replace receptacle board",
  },
  {
    error_id: "P3",
    description: "RFID communication Time out",
    troubleshoot:
      "Use a known good handpiece/disposable. Verify Receptacle Board connection. Verify Handpiece connection. Replace receptacle board",
  },
  {
    error_id: "P4",
    description: "Handpiece disposable expired",
    troubleshoot:
      "Use a known good handpiece/disposable. Verify Receptacle Board connection. Verify Handpiece connection. Replace receptacle board",
  },
  {
    error_id: "P5",
    description: "Handpiece disposable not compatible",
    troubleshoot:
      "Use a known good handpiece/disposable. Verify Receptacle Board connection. Verify Handpiece connection. Replace receptacle board",
  },
];

const errorsW = [
  {
    error_id: "W1",
    description: "Handpiece disposable expired warning",
    troubleshoot:
      "Verify the disposable timestamp using another console. Replace receptacle board. Check the real time clock using aserial terminal. Check main board battery voltage. Replace battery or board",
  },
  {
    error_id: "W2",
    description: "Invalid preference file",
    troubleshoot:
      "Use a known good preference file. Use the same preference file on a known good console. Replace front board.Replace MC Board",
  },
  {
    error_id: "W3",
    description: "Memory allocation error loading preference file",
    troubleshoot:
      "Use a known good preference file. Use the same preference file on a known good console. Replace front board.Replace MC Board",
  },
  {
    error_id: "W4",
    description: "Preference file not found",
    troubleshoot:
      "Use a known good preference file. Use the same preference file on a known good console. Replace front board.Replace MC Board",
  },
  {
    error_id: "W5",
    description: "USB Inserted while console is in use",
    troubleshoot:
      "Remove USBdrive. Remove SERFAS probe and shaver. Remove MC board",
  },
];

const loadShaverInserts = () => {
  const standardSelect = document.getElementById("standard-select");
  for (let shaver of shavers) {
    const optionDiv = document.createElement("option");
    optionDiv.setAttribute("class", "insert-select");
    optionDiv.setAttribute("value", shaver.name);
    optionDiv.innerText = shaver.name;
    standardSelect.appendChild(optionDiv);
  }
};

const handleFootPedal = () => {
  const footPedal = document.getElementById("ftswitch-div");
  footPedal.addEventListener("click", () => {
    const overLay = document.getElementById("modal-overlay");
    const modal = document.getElementById("modal");
  });
};

const showCrsFrTextModal = (obj) => {
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

const handleShaveInsertSelect = () => {
  const selectElement = document.querySelector("#standard-select");
  selectElement.addEventListener("change", (elementSelected) => {
    selectedShaver = elementSelected.currentTarget.value;
    updateShaverTitle(selectedShaver);
  });
};

const updateShaverTitle = (selectedShaver) => {
  const shaverTitle = document.getElementById("shaver-readout-title");
  shaverTitle.innerText = selectedShaver;
  updateShaverRpm(selectedShaver);
};

const updateShaverRpm = (selectedShaver) => {
  const hcDiv = document.getElementById("hc-div");
  const ftPedalDiv = document.getElementById("footpedal-div");
  const directionImgDiv = document.getElementById("direction-img-div");
  const controlOptDiv = document.getElementById("control-option-div");
  const directionDiv = document.getElementById("direction-div");

  for (let shaver of shavers) {
    if (shaver.name === selectedShaver) {
      console.log(shaver.name, selectedShaver);
      const rpmDiv = document.getElementById("rpm-div");
      rpmDiv.innerText = shaver.fwd_low_default;
    }
  }
  hcDiv.innerText = "HC";
  ftPedalDiv.innerText = "FP";
  controlOptDiv.innerText = "VAR";
  directionDiv.innerText = "F";
  directionImgDiv.classList.add("show-img");
};

const handleErrorCodesListener = () => {
  const overLay = document.getElementById("modal-overlay");
  const modal = document.getElementById("modal");
  const errorCodes = document.getElementById("error-codes");
  errorCodes.addEventListener("click", () => {
    const modalBody = document.getElementById("modal-body");
    const modalTitle = document.getElementById("modal-title");
    modalTitle.innerText = "Crossfire2 Error Codes";
    modalBody.innerText = "";
    modal.classList.add("crossfire-errors");
    overLay.classList.add("crossfire-errors");
    showErrorCodes();
  });
};

const showErrorCodes = () => {
  const modalBody = document.getElementById("modal-body");
  const errorADiv = document.createElement("div");
  errorADiv.setAttribute("class", "error-modal-div");
  const errorTitleDiv = document.createElement("div");
  errorTitleDiv.setAttribute("class", "error-title-div");
  errorTitleDiv.innerText = "Category A - Activation Errors";
  const errorADetailsDiv = document.createElement("div");
  errorADetailsDiv.setAttribute("class", "error-details-div");

  errorsA.map((error) => {
    const errorIdDiv = document.createElement("div");
    errorIdDiv.setAttribute("class", "error-id-div");
    const errorIdTitle = document.createElement("div");
    errorIdTitle.setAttribute("class", "error-id-title");
    errorIdTitle.innerText = "Error id:";
    const errorIdText = document.createElement("div");
    errorIdText.setAttribute("class", "error-id-text");
    errorIdText.innerText = error.error_id;
    errorIdDiv.appendChild(errorIdTitle);
    errorIdDiv.appendChild(errorIdText);
    errorADetailsDiv.appendChild(errorIdDiv);
    const errorDescriptionDiv = document.createElement("div");
    errorDescriptionDiv.setAttribute("class", "error-description-div");
    const errorDescriptionTitle = document.createElement("div");
    errorDescriptionTitle.setAttribute("class", "error-description-title");
    errorDescriptionTitle.innerText = "Description:";
    const errorDescriptionText = document.createElement("div");
    errorDescriptionText.setAttribute("class", "error-description-text");
    errorDescriptionTitle.innerText = "Description:";
    errorDescriptionText.innerText = error.description;
    errorDescriptionDiv.appendChild(errorDescriptionTitle);
    errorDescriptionDiv.appendChild(errorDescriptionText);
    errorADetailsDiv.appendChild(errorDescriptionDiv);
    const errorTroublshootDiv = document.createElement("div");
    errorTroublshootDiv.setAttribute("class", "error-troubleshoot-div");
    const errorTroublshootTitle = document.createElement("div");
    errorTroublshootTitle.setAttribute("class", "error-troubleshoot-title");
    errorTroublshootTitle.innerText = "Troubleshoot:";
    const errorTroublshootText = document.createElement("div");
    errorTroublshootText.setAttribute("class", "error-troubleshoot-text");
    errorTroublshootText.innerText = error.troubleshoot;
    errorTroublshootDiv.appendChild(errorTroublshootTitle);
    errorTroublshootDiv.appendChild(errorTroublshootText);
    errorADetailsDiv.appendChild(errorTroublshootDiv);
  });
  const errorEDiv = document.createElement("div");
  errorEDiv.setAttribute("class", "error-modal-div");
  const errorETitleDiv = document.createElement("div");
  errorETitleDiv.setAttribute("class", "error-title-div");
  errorETitleDiv.setAttribute("id", "error-e-title-div");
  errorETitleDiv.innerText = "Category E - System-level Errors";
  const errorEDetailsDiv = document.createElement("div");
  errorEDetailsDiv.setAttribute("class", "error-details-div");
  errorsE.map((error) => {
    const errorIdDiv = document.createElement("div");
    errorIdDiv.setAttribute("class", "error-id-div");
    const errorIdTitle = document.createElement("div");
    errorIdTitle.setAttribute("class", "error-id-title");
    errorIdTitle.innerText = "Error id:";
    const errorIdText = document.createElement("div");
    errorIdText.setAttribute("class", "error-id-text");
    errorIdText.innerText = error.error_id;
    errorIdDiv.appendChild(errorIdTitle);
    errorIdDiv.appendChild(errorIdText);
    errorEDetailsDiv.appendChild(errorIdDiv);
    const errorDescriptionDiv = document.createElement("div");
    errorDescriptionDiv.setAttribute("class", "error-description-div");
    const errorDescriptionTitle = document.createElement("div");
    errorDescriptionTitle.setAttribute("class", "error-description-title");
    errorDescriptionTitle.innerText = "Description:";
    const errorDescriptionText = document.createElement("div");
    errorDescriptionText.setAttribute("class", "error-description-text");
    errorDescriptionTitle.innerText = "Description:";
    errorDescriptionText.innerText = error.description;
    errorDescriptionDiv.appendChild(errorDescriptionTitle);
    errorDescriptionDiv.appendChild(errorDescriptionText);
    errorEDetailsDiv.appendChild(errorDescriptionDiv);
    const errorTroublshootDiv = document.createElement("div");
    errorTroublshootDiv.setAttribute("class", "error-troubleshoot-div");
    const errorTroublshootTitle = document.createElement("div");
    errorTroublshootTitle.setAttribute("class", "error-troubleshoot-title");
    errorTroublshootTitle.innerText = "Troubleshoot:";
    const errorTroublshootText = document.createElement("div");
    errorTroublshootText.setAttribute("class", "error-troubleshoot-text");
    errorTroublshootText.innerText = error.troubleshoot;
    errorTroublshootDiv.appendChild(errorTroublshootTitle);
    errorTroublshootDiv.appendChild(errorTroublshootText);
    errorEDetailsDiv.appendChild(errorTroublshootDiv);
  });

  const errorPDiv = document.createElement("div");
  errorPDiv.setAttribute("class", "error-modal-div");
  const errorPTitleDiv = document.createElement("div");
  errorPTitleDiv.setAttribute("class", "error-title-div");
  errorPTitleDiv.setAttribute("id", "error-p-title-div");
  errorPTitleDiv.innerText = "Category P - Probe Errors";
  const errorPDetailsDiv = document.createElement("div");
  errorPDetailsDiv.setAttribute("class", "error-details-div");
  errorsP.map((error) => {
    const errorIdDiv = document.createElement("div");
    errorIdDiv.setAttribute("class", "error-id-div");
    const errorIdTitle = document.createElement("div");
    errorIdTitle.setAttribute("class", "error-id-title");
    errorIdTitle.innerText = "Error id:";
    const errorIdText = document.createElement("div");
    errorIdText.setAttribute("class", "error-id-text");
    errorIdText.innerText = error.error_id;
    errorIdDiv.appendChild(errorIdTitle);
    errorIdDiv.appendChild(errorIdText);
    errorPDetailsDiv.appendChild(errorIdDiv);
    const errorDescriptionDiv = document.createElement("div");
    errorDescriptionDiv.setAttribute("class", "error-description-div");
    const errorDescriptionTitle = document.createElement("div");
    errorDescriptionTitle.setAttribute("class", "error-description-title");
    errorDescriptionTitle.innerText = "Description:";
    const errorDescriptionText = document.createElement("div");
    errorDescriptionText.setAttribute("class", "error-description-text");
    errorDescriptionTitle.innerText = "Description:";
    errorDescriptionText.innerText = error.description;
    errorDescriptionDiv.appendChild(errorDescriptionTitle);
    errorDescriptionDiv.appendChild(errorDescriptionText);
    errorPDetailsDiv.appendChild(errorDescriptionDiv);
    const errorTroublshootDiv = document.createElement("div");
    errorTroublshootDiv.setAttribute("class", "error-troubleshoot-div");
    const errorTroublshootTitle = document.createElement("div");
    errorTroublshootTitle.setAttribute("class", "error-troubleshoot-title");
    errorTroublshootTitle.innerText = "Troubleshoot:";
    const errorTroublshootText = document.createElement("div");
    errorTroublshootText.setAttribute("class", "error-troubleshoot-text");
    errorTroublshootText.innerText = error.troubleshoot;
    errorTroublshootDiv.appendChild(errorTroublshootTitle);
    errorTroublshootDiv.appendChild(errorTroublshootText);
    errorPDetailsDiv.appendChild(errorTroublshootDiv);
  });

  const errorWDiv = document.createElement("div");
  errorWDiv.setAttribute("class", "error-modal-div");
  const errorWTitleDiv = document.createElement("div");
  errorWTitleDiv.setAttribute("class", "error-title-div");
  errorWTitleDiv.setAttribute("id", "error-p-title-div");
  errorWTitleDiv.innerText = "Category W - Warning Errors";
  const errorWDetailsDiv = document.createElement("div");
  errorWDetailsDiv.setAttribute("class", "error-details-div");
  errorsW.map((error) => {
    const errorIdDiv = document.createElement("div");
    errorIdDiv.setAttribute("class", "error-id-div");
    const errorIdTitle = document.createElement("div");
    errorIdTitle.setAttribute("class", "error-id-title");
    errorIdTitle.innerText = "Error id:";
    const errorIdText = document.createElement("div");
    errorIdText.setAttribute("class", "error-id-text");
    errorIdText.innerText = error.error_id;
    errorIdDiv.appendChild(errorIdTitle);
    errorIdDiv.appendChild(errorIdText);
    errorWDetailsDiv.appendChild(errorIdDiv);
    const errorDescriptionDiv = document.createElement("div");
    errorDescriptionDiv.setAttribute("class", "error-description-div");
    const errorDescriptionTitle = document.createElement("div");
    errorDescriptionTitle.setAttribute("class", "error-description-title");
    errorDescriptionTitle.innerText = "Description:";
    const errorDescriptionText = document.createElement("div");
    errorDescriptionText.setAttribute("class", "error-description-text");
    errorDescriptionTitle.innerText = "Description:";
    errorDescriptionText.innerText = error.description;
    errorDescriptionDiv.appendChild(errorDescriptionTitle);
    errorDescriptionDiv.appendChild(errorDescriptionText);
    errorWDetailsDiv.appendChild(errorDescriptionDiv);
    const errorTroublshootDiv = document.createElement("div");
    errorTroublshootDiv.setAttribute("class", "error-troubleshoot-div");
    const errorTroublshootTitle = document.createElement("div");
    errorTroublshootTitle.setAttribute("class", "error-troubleshoot-title");
    errorTroublshootTitle.innerText = "Troubleshoot:";
    const errorTroublshootText = document.createElement("div");
    errorTroublshootText.setAttribute("class", "error-troubleshoot-text");
    errorTroublshootText.innerText = error.troubleshoot;
    errorTroublshootDiv.appendChild(errorTroublshootTitle);
    errorTroublshootDiv.appendChild(errorTroublshootText);
    errorWDetailsDiv.appendChild(errorTroublshootDiv);
  });

  errorWDiv.appendChild(errorWTitleDiv);
  errorWDiv.appendChild(errorWDetailsDiv);

  errorPDiv.appendChild(errorPTitleDiv);
  errorPDiv.appendChild(errorPDetailsDiv);

  errorEDiv.appendChild(errorETitleDiv);
  errorEDiv.appendChild(errorEDetailsDiv);

  errorADiv.appendChild(errorTitleDiv);
  errorADiv.appendChild(errorADetailsDiv);

  modalBody.appendChild(errorADiv);
  modalBody.appendChild(errorEDiv);
  modalBody.appendChild(errorPDiv);
  modalBody.appendChild(errorWDiv);
};

const handleShaverInsertInformation = () => {
  const shaverReadoutTitle = document.getElementById("shaver-readout-title");
  shaverReadoutTitle.addEventListener("click", () => {
    const overLay = document.getElementById("modal-overlay");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerText = "";
    const modalTitle = document.getElementById("modal-title");

    for (let shaver of shavers) {
      if (shaver.name === shaverReadoutTitle.innerHTML) {
        modalTitle.innerText = shaver.name;
        const pnDiv = document.createElement("div");
        pnDiv.setAttribute("class", "shaver-modal-div");
        const pnTitle = document.createElement("h3");
        pnTitle.setAttribute("class", "shaver-modal-title");
        pnTitle.innerText = "Part Number:";
        const pnTextDiv = document.createElement("div");
        pnTextDiv.setAttribute("class", "shaver-modal-text-div");
        const pnText = document.createElement("p");
        pnTitle.setAttribute("class", "shaver-modal-text");
        pnText.innerText = shaver.pn;
        pnTextDiv.appendChild(pnText);
        pnDiv.appendChild(pnTitle);
        pnDiv.appendChild(pnTextDiv);

        const incrementDiv = document.createElement("div");
        incrementDiv.setAttribute("class", "shaver-modal-div");
        const incrementTitle = document.createElement("h3");
        incrementTitle.setAttribute("class", "shaver-modal-title");
        incrementTitle.innerText = "Increment:";
        const incrementTextDiv = document.createElement("div");
        incrementTextDiv.setAttribute(
          "class",
          "shaver-modal-increment-text-div"
        );
        const incrementText = document.createElement("p");
        incrementText.setAttribute("class", "shaver-modal-text");
        incrementText.innerText = shaver.increment;
        incrementTextDiv.appendChild(incrementText);
        incrementDiv.appendChild(incrementTitle);
        incrementDiv.appendChild(incrementTextDiv);

        const fwdLowDefaultDiv = document.createElement("div");
        fwdLowDefaultDiv.setAttribute("class", "shaver-modal-div");
        const fwdLowDefaultTitle = document.createElement("h3");
        fwdLowDefaultTitle.setAttribute("class", "shaver-modal-title");
        fwdLowDefaultTitle.innerText = "Foward Low Default:";
        const fwdLowDefaultTextDiv = document.createElement("div");
        fwdLowDefaultTextDiv.setAttribute("class", "shaver-modal-text-div");
        const fwdLowDefaultText = document.createElement("p");
        fwdLowDefaultText.setAttribute("class", "shaver-modal-text");
        fwdLowDefaultText.innerText = shaver.fwd_low_default;
        fwdLowDefaultTextDiv.appendChild(fwdLowDefaultText);
        fwdLowDefaultDiv.appendChild(fwdLowDefaultTitle);
        fwdLowDefaultDiv.appendChild(fwdLowDefaultTextDiv);

        const fwdLowMinDiv = document.createElement("div");
        fwdLowMinDiv.setAttribute("class", "shaver-modal-div");
        const fwdLowMinTitle = document.createElement("h3");
        fwdLowMinTitle.setAttribute("class", "shaver-modal-title");
        fwdLowMinTitle.innerText = "Foward Low Min:";
        const fwdLowMinTextDiv = document.createElement("div");
        fwdLowMinTextDiv.setAttribute("class", "shaver-modal-text-div");
        const fwdLowMinText = document.createElement("p");
        fwdLowMinText.setAttribute("class", "shaver-modal-text");
        fwdLowMinText.innerText = shaver.fwd_low_min;
        fwdLowMinTextDiv.appendChild(fwdLowMinText);
        fwdLowMinDiv.appendChild(fwdLowMinTitle);
        fwdLowMinDiv.appendChild(fwdLowMinTextDiv);

        const fwdLowMaxDiv = document.createElement("div");
        fwdLowMaxDiv.setAttribute("class", "shaver-modal-div");
        const fwdLowMaxTitle = document.createElement("h3");
        fwdLowMaxTitle.setAttribute("class", "shaver-modal-title");
        fwdLowMaxTitle.innerText = "Foward Low Max:";
        const fwdLowMaxTextDiv = document.createElement("div");
        fwdLowMaxTextDiv.setAttribute("class", "shaver-modal-text-div");
        const fwdLowMaxText = document.createElement("p");
        fwdLowMaxText.setAttribute("class", "shaver-modal-text");
        fwdLowMaxText.innerText = shaver.fwd_low_max;
        fwdLowMaxTextDiv.appendChild(fwdLowMaxText);
        fwdLowMaxDiv.appendChild(fwdLowMaxTitle);
        fwdLowMaxDiv.appendChild(fwdLowMaxTextDiv);

        const fwdHighDefaultDiv = document.createElement("div");
        fwdHighDefaultDiv.setAttribute("class", "shaver-modal-div");
        const fwdHighDefaultTitle = document.createElement("h3");
        fwdHighDefaultTitle.setAttribute("class", "shaver-modal-title");
        fwdHighDefaultTitle.innerText = "Foward High Default:";
        const fwdHighDefaultTextDiv = document.createElement("div");
        fwdHighDefaultTextDiv.setAttribute("class", "shaver-modal-text-div");
        const fwdHighDefaultText = document.createElement("p");
        fwdHighDefaultText.setAttribute("class", "shaver-modal-text");
        fwdHighDefaultText.innerText = shaver.fwd_high_default;
        fwdHighDefaultTextDiv.appendChild(fwdHighDefaultText);
        fwdHighDefaultDiv.appendChild(fwdHighDefaultTitle);
        fwdHighDefaultDiv.appendChild(fwdHighDefaultTextDiv);

        const fwdHighMinDiv = document.createElement("div");
        fwdHighMinDiv.setAttribute("class", "shaver-modal-div");
        const fwdHighMinTitle = document.createElement("h3");
        fwdHighMinTitle.setAttribute("class", "shaver-modal-title");
        fwdHighMinTitle.innerText = "Foward High Min:";
        const fwdHighMinTextDiv = document.createElement("div");
        fwdHighMinTextDiv.setAttribute("class", "shaver-modal-text-div");
        const fwdHighMinText = document.createElement("p");
        fwdHighMinText.setAttribute("class", "shaver-modal-text");
        fwdHighMinText.innerText = shaver.fwd_high_min;
        fwdHighMinTextDiv.appendChild(fwdHighMinText);
        fwdHighMinDiv.appendChild(fwdHighMinTitle);
        fwdHighMinDiv.appendChild(fwdHighMinTextDiv);

        const fwdHighMaxDiv = document.createElement("div");
        fwdHighMaxDiv.setAttribute("class", "shaver-modal-div");
        const fwdHighMaxTitle = document.createElement("h3");
        fwdHighMaxTitle.setAttribute("class", "shaver-modal-title");
        fwdHighMaxTitle.innerText = "Foward High Max:";
        const fwdHighMaxTextDiv = document.createElement("div");
        fwdHighMaxTextDiv.setAttribute("class", "shaver-modal-text-div");
        const fwdHighMaxText = document.createElement("p");
        fwdHighMaxText.setAttribute("class", "shaver-modal-text");
        fwdHighMaxText.innerText = shaver.fwd_high_max;
        fwdHighMaxTextDiv.appendChild(fwdHighMaxText);
        fwdHighMaxDiv.appendChild(fwdHighMaxTitle);
        fwdHighMaxDiv.appendChild(fwdHighMaxTextDiv);

        const revLowDefaultDiv = document.createElement("div");
        revLowDefaultDiv.setAttribute("class", "shaver-modal-div");
        const revLowDefaultTitle = document.createElement("h3");
        revLowDefaultTitle.setAttribute("class", "shaver-modal-title");
        revLowDefaultTitle.innerText = "Reverse Low Default:";
        const revLowDefaultTextDiv = document.createElement("div");
        revLowDefaultTextDiv.setAttribute("class", "shaver-modal-text-div");
        const revLowDefaultText = document.createElement("p");
        revLowDefaultText.setAttribute("class", "shaver-modal-text");
        revLowDefaultText.innerText = shaver.rev_low_default;
        revLowDefaultTextDiv.appendChild(revLowDefaultText);
        revLowDefaultDiv.appendChild(revLowDefaultTitle);
        revLowDefaultDiv.appendChild(revLowDefaultTextDiv);

        const revLowMinDiv = document.createElement("div");
        revLowMinDiv.setAttribute("class", "shaver-modal-div");
        const revLowMinTitle = document.createElement("h3");
        revLowMinTitle.setAttribute("class", "shaver-modal-title");
        revLowMinTitle.innerText = "Reverse Low Min:";
        const revLowMinTextDiv = document.createElement("div");
        revLowMinTextDiv.setAttribute("class", "shaver-modal-text-div");
        const revLowMinText = document.createElement("p");
        revLowMinText.setAttribute("class", "shaver-modal-text");
        revLowMinText.innerText = shaver.rev_low_min;
        revLowMinTextDiv.appendChild(revLowMinText);
        revLowMinDiv.appendChild(revLowMinTitle);
        revLowMinDiv.appendChild(revLowMinTextDiv);

        const revLowMaxDiv = document.createElement("div");
        revLowMaxDiv.setAttribute("class", "shaver-modal-div");
        const revLowMaxTitle = document.createElement("h3");
        revLowMaxTitle.setAttribute("class", "shaver-modal-title");
        revLowMaxTitle.innerText = "Reverse Low Max:";
        const revLowMaxTextDiv = document.createElement("div");
        revLowMaxTextDiv.setAttribute("class", "shaver-modal-text-div");
        const revLowMaxText = document.createElement("p");
        revLowMaxText.setAttribute("class", "shaver-modal-text");
        revLowMaxText.innerText = shaver.rev_low_max;
        revLowMaxTextDiv.appendChild(revLowMaxText);
        revLowMaxDiv.appendChild(revLowMaxTitle);
        revLowMaxDiv.appendChild(revLowMaxTextDiv);

        const revHighDefaultDiv = document.createElement("div");
        revHighDefaultDiv.setAttribute("class", "shaver-modal-div");
        const revHighDefaultTitle = document.createElement("h3");
        revHighDefaultTitle.setAttribute("class", "shaver-modal-title");
        revHighDefaultTitle.innerText = "Reverse High Default:";
        const revHighDefaultTextDiv = document.createElement("div");
        revHighDefaultTextDiv.setAttribute("class", "shaver-modal-text-div");
        const revHighDefaultText = document.createElement("p");
        revHighDefaultText.setAttribute("class", "shaver-modal-text");
        revHighDefaultText.innerText = shaver.rev_high_default;
        revHighDefaultTextDiv.appendChild(revHighDefaultText);
        revHighDefaultDiv.appendChild(revHighDefaultTitle);
        revHighDefaultDiv.appendChild(revHighDefaultTextDiv);

        const revHighMinDiv = document.createElement("div");
        revHighMinDiv.setAttribute("class", "shaver-modal-div");
        const revHighMinTitle = document.createElement("h3");
        revHighMinTitle.setAttribute("class", "shaver-modal-title");
        revHighMinTitle.innerText = "Reverse High Min:";
        const revHighMinTextDiv = document.createElement("div");
        revHighMinTextDiv.setAttribute("class", "shaver-modal-text-div");
        const revHighMinText = document.createElement("p");
        revHighMinText.setAttribute("class", "shaver-modal-text");
        revHighMinText.innerText = shaver.rev_high_min;
        revHighMinTextDiv.appendChild(revHighMinText);
        revHighMinDiv.appendChild(revHighMinTitle);
        revHighMinDiv.appendChild(revHighMinTextDiv);

        const revHighMaxDiv = document.createElement("div");
        revHighMaxDiv.setAttribute("class", "shaver-modal-div");
        const revHighMaxTitle = document.createElement("h3");
        revHighMaxTitle.setAttribute("class", "shaver-modal-title");
        revHighMaxTitle.innerText = "Reverse High Max:";
        const revHighMaxTextDiv = document.createElement("div");
        revHighMaxTextDiv.setAttribute("class", "shaver-modal-text-div");
        const revHighMaxText = document.createElement("p");
        revHighMaxText.setAttribute("class", "shaver-modal-text");
        revHighMaxText.innerText = shaver.rev_high_max;
        revHighMaxTextDiv.appendChild(revHighMaxText);
        revHighMaxDiv.appendChild(revHighMaxTitle);
        revHighMaxDiv.appendChild(revHighMaxTextDiv);

        const oscDefaultDiv = document.createElement("div");
        oscDefaultDiv.setAttribute("class", "shaver-modal-div");
        const oscDefaultTitle = document.createElement("h3");
        oscDefaultTitle.setAttribute("class", "shaver-modal-title");
        oscDefaultTitle.innerText = "Oscillate Default:";
        const oscDefaultTextDiv = document.createElement("div");
        oscDefaultTextDiv.setAttribute("class", "shaver-modal-text-div");
        const oscDefaultText = document.createElement("p");
        oscDefaultText.setAttribute("class", "shaver-modal-text");
        oscDefaultText.innerText = shaver.osc_default;
        oscDefaultTextDiv.appendChild(oscDefaultText);
        oscDefaultDiv.appendChild(oscDefaultTitle);
        oscDefaultDiv.appendChild(oscDefaultTextDiv);

        const oscMinDiv = document.createElement("div");
        oscMinDiv.setAttribute("class", "shaver-modal-div");
        const oscMinTitle = document.createElement("h3");
        oscMinTitle.setAttribute("class", "shaver-modal-title");
        oscMinTitle.innerText = "Oscillate Min:";
        const oscMinTextDiv = document.createElement("div");
        oscMinTextDiv.setAttribute("class", "shaver-modal-text-div");
        const oscMinText = document.createElement("p");
        oscMinText.setAttribute("class", "shaver-modal-text");
        oscMinText.innerText = shaver.osc_min;
        oscMinTextDiv.appendChild(oscMinText);
        oscMinDiv.appendChild(oscMinTitle);
        oscMinDiv.appendChild(oscMinTextDiv);

        const oscMaxDiv = document.createElement("div");
        oscMaxDiv.setAttribute("class", "shaver-modal-div");
        const oscMaxTitle = document.createElement("h3");
        oscMaxTitle.setAttribute("class", "shaver-modal-title");
        oscMaxTitle.innerText = "Oscillate Max:";
        const oscMaxTextDiv = document.createElement("div");
        oscMaxTextDiv.setAttribute("class", "shaver-modal-text-div");
        const oscMaxText = document.createElement("p");
        oscMaxText.setAttribute("class", "shaver-modal-text");
        oscMaxText.innerText = shaver.osc_max;
        oscMaxTextDiv.appendChild(oscMaxText);
        oscMaxDiv.appendChild(oscMaxTitle);
        oscMaxDiv.appendChild(oscMaxTextDiv);

        modalBody.appendChild(pnDiv);
        modalBody.appendChild(incrementDiv);
        modalBody.appendChild(fwdLowDefaultDiv);
        modalBody.appendChild(fwdLowMinDiv);
        modalBody.appendChild(fwdLowMaxDiv);
        modalBody.appendChild(fwdHighDefaultDiv);
        modalBody.appendChild(fwdHighMinDiv);
        modalBody.appendChild(fwdHighMaxDiv);
        modalBody.appendChild(revLowDefaultDiv);
        modalBody.appendChild(revLowMinDiv);
        modalBody.appendChild(revLowMaxDiv);
        modalBody.appendChild(revHighDefaultDiv);
        modalBody.appendChild(revHighMinDiv);
        modalBody.appendChild(revHighMaxDiv);
        modalBody.appendChild(oscDefaultDiv);
        modalBody.appendChild(oscMinDiv);
        modalBody.appendChild(oscMaxDiv);
      }
    }

    modal.classList.add("crossfire-active");
    overLay.classList.add("crossfire-active");
  });
};

const handleHandpieceToggleListener = () => {
  const selectorCircle = document.getElementById("selector-circle");
  const shaverContainer = document.getElementById("shaver-container");
  const serfasContainer = document.getElementById("serfas-container");
  const shaverLeftScreen = document.getElementById("shaver-left-screen");
  const serfasRightScreen = document.getElementById("serfas-right-screen");

  selectorCircle.addEventListener("click", () => {
    shaverLeftScreen.classList.toggle("shaver-left-show");
    serfasRightScreen.classList.toggle("serfas-right-show");
    shaverContainer.classList.toggle("shaver-container-hide");
    serfasContainer.classList.toggle("serfas-container-hide");
  });
};

// const handleSerfasToggleListener = () => {
//   const rfImg = document.getElementById("rf-img");
//   const shaverContainer = document.getElementById("shaver-container");
//   const serfasContainer = document.getElementById("serfas-container");
//   const shaverLeftScreen = document.getElementById("shaver-left-screen");
//   const serfasRightScreen = document.getElementById("serfas-right-screen");
//   rfImg.addEventListener("click", () => {
//     shaverLeftScreen.classList.toggle("shaver-left-show");
//     serfasRightScreen.classList.toggle("serfas-right-show");
//     shaverContainer.classList.toggle("shaver-container-hide");
//     serfasContainer.classList.toggle("serfas-container-hide");
//   });
// };

// const handlerShaverToggleListener = () => {
//   const shaverContainer = document.getElementById("shaver-container");
//   const serfasContainer = document.getElementById("serfas-container");
//   const shaverLeftScreen = document.getElementById("shaver-left-screen");
//   const serfasRightScreen = document.getElementById("serfas-right-screen");
//   const shaverImg = document.getElementById("shaver-img");
//   shaverImg.addEventListener("click", () => {
//     shaverLeftScreen.classList.toggle("shaver-left-show");
//     serfasRightScreen.classList.toggle("serfas-right-show");
//     shaverContainer.classList.toggle("shaver-container-hide");
//     serfasContainer.classList.toggle("serfas-container-hide");
//   });
// };
