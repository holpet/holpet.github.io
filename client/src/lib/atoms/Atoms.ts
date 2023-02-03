import { atom } from "jotai";

export const atomIsClosed = atom(true);
export const atomIsDarkTheme = atom(
  window.localStorage.getItem("dark-theme") || true
);
