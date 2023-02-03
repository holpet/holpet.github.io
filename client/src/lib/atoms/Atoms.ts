import { atom } from "jotai";

export const atomIsClosed = atom(true);
export const atomIsDarkTheme = atom(
  window.localStorage.getItem("dark-theme") !== null
    ? //@ts-ignore
      JSON.parse(window.localStorage.getItem("dark-theme"))
    : true
);
