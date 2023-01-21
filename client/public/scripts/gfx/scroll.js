window.addEventListener(
  "scroll",
  () => {
    console.log(
      "scrollY: ",
      window.pageYOffset,
      ", offsetH: ",
      document.body.offsetHeight,
      ", innerH: ",
      window.innerHeight
    );
    const scrollVal =
      window.scrollY /
      (document.body.offsetHeight - window.innerHeight == 0
        ? 1
        : document.body.offsetHeight - window.innerHeight);
    console.log("scroll: ", scrollVal);
    document.body.style.setProperty("--scroll", scrollVal + "");
  },
  false
);
