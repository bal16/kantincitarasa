function navStyler() {
  const nav = document.getElementById("nav");
  const searchBar = document.querySelector(".searchBar");
  const dropdownNav = document.querySelector(".dropdownNav");
  const dropdownNav2 = document.querySelector(".dropdownNav2");
  const navHeight = nav.offsetHeight;
  // console.log(window.scrollY > navHeight)
  if (window.scrollY > navHeight / 3) {
    nav.classList.add("backdrop-blur-md", "bg-opacity-40", "shadow-sm");
    searchBar.classList.add("bg-opacity-50");
    dropdownNav.classList.add("glass", "bg-opacity-70");
    dropdownNav2.classList.add("glass", "bg-opacity-70");
    // dropdownNav.classList.add("bg-opacity-70", "backdrop-blur-xl");
    // dropdownNav2.classList.add("bg-opacity-70", "backdrop-blur-xl");
  } else {
    nav.classList.remove("backdrop-blur-md", "bg-opacity-40", "shadow-sm");
    searchBar.classList.remove("bg-opacity-50");
    dropdownNav.classList.remove("glass", "bg-opacity-70");
    dropdownNav2.classList.remove("glass", "bg-opacity-70");
    // dropdownNav.classList.remove("bg-opacity-70", "backdrop-blur-xl");
    // dropdownNav2.classList.remove("bg-opacity-70", "backdrop-blur-xl");
  }
}
function showToTop() {
  const toTop = document.querySelector("#ToTopButton");
  const toTopSVG = document.querySelector("#toTopSVG");
  // console.log("posisi saat ini: ", window.scrollY)

  if (window.scrollY > 0) {
    toTop.classList.remove("opacity-0", "btn-disabled", "-mt-10");
    toTopSVG.classList.add("-mt-3");
    toTopSVG.classList.remove("-mt-10");
  } else if (window.scrollY <= 0) {
    toTop.classList.add("opacity-0", "btn-disabled");
    toTopSVG.classList.add("-mt-10");
    toTopSVG.classList.remove("-mt-3");
  }
}
window.onscroll = () => {
  navStyler();
  showToTop();
};
