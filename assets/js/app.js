const btnTop = document.getElementById("btnTop");

btnTop.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
