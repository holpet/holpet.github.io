import React from "react";

export function employObserver(ref: React.RefObject<HTMLDivElement>) {
  let allLines = ref.current?.querySelectorAll(".observable");

  let options = {
    rootMargin: "0px",
    threshold: 0.2,
  };

  //@ts-ignore
  function setItemsActive(entries) {
    //@ts-ignore
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-loading-line");
      } else {
        entry.target.classList.remove("is-loading-line");
      }
    });
  }

  let observer = new IntersectionObserver(setItemsActive, options);

  allLines?.forEach((line) => {
    observer.observe(line);
  });
}
