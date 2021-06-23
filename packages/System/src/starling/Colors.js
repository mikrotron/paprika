import TokenColor from "../TokenColor";

export const black = TokenColor({
  name: "black",
  default: "#3f3d3c",
  value: [
    "#3f3d3c",
    "#575757",
    "#717171",
    "#8a8a8a",
    "#a4a4a4",
    "#bdbdbd",
    "#d7d7d7",
    "#f0f0f0",
    "#f7f7f7",
    "#fcfcfc",
    "#a4a4a4",
    "#000000"
  ]
});

export const white = TokenColor({
  name: "white",
  default: "#ffffff",
  value: ["#ffffff"]
});

export const blue = TokenColor({
  name: "blue",
  default: "#276cf5",
  value: [
    "#276cf5",
    "#004a94",
    "#0063c5",
    "#3396f9",
    "#66b0fa",
    "#99cbfc",
    "#cce5fd",
    "#e5f1fe"
  ]
});

export const creme = TokenColor({
  name: "creme",
  default: "#e6e3df",
  value: ["#a39889", "#b9b1a6", "#d0cac2", "#f1f0ed", "#fcfcfc"]
});

export const green = TokenColor({
  name: "green",
  default: "#42996d",
  value: [
    "#337554",
    "#23523a",
    "#5db187",
    "#80c1a0",
    "#a2d2ba",
    "#c4e3d3",
    "#e7f3ed"
  ]
});

export const orange = TokenColor({
  name: "orange",
  default: "#de4d33",
  value: [
    "#bf371f",
    "#932b18",
    "#671e11",
    "#e07764",
    "#e99c8e",
    "#f1c1b9",
    "#fae7e3",
    "#e99c8e",
    "#e1624b"
  ]
});

export const purple = TokenColor({
  name: "purple",
  default: "#785cba",
  value: [
    "#5f449f",
    "#4a347c",
    "#9884c5",
    "#b5a7d5",
    "#d2c9e6",
    "#efecf6",
    "#fbfafd"
  ]
});

export const yellow = TokenColor({
  name: "yellow",
  default: "#eaba51",
  value: [
    "#e5a823",
    "#be8a17",
    "#916911",
    "#63480c",
    "#eccb82",
    "#f3ddae",
    "#f9f0db"
  ]
});

export const eggplant = TokenColor({
  name: "eggplant",
  default: "#2e143d",
  value: ["#4b2164", "#682e8b", "#853AB1"]
});

export const chart = TokenColor({
  name: "chart",
  default: "#cd3c44",
  value: [
    "#cd3c44",
    "#cb8133",
    "#eaba51",
    "#79a551",
    "#299a7a",
    "#8c6d68",
    "#ec848f",
    "#b9668f",
    "#785cba",
    "#2b82bf",
    "#7ec0cc",
    "#d1cbc2"
  ]
});

export const mix = TokenColor({
  name: "mix",
  default: "",
  value: ["#000000", "#f0f0f0", "#f0a117", "#cfcfcf"],
  alias: [
    { blackPure: "#000000" },
    { offWhite: "#f0f0f0" },
    { gold: "#f0a117" },
    { silver: "#cfcfcf" }
  ]
});
