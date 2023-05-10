import xSVG from "./x.svg";
import menuSVG from "./menu.svg";

const openMobileMenu = () => {
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon");
  console.log("Opening mobile menu");
  menuIcon.src = xSVG; // Change to X icon for closing menu

  menuBar.style.display = "flex";
  menuBar.style.backgroundColor = "rgb(var(--white-smoke)";
  menuBar.style.flexDirection = "column";
  menuBar.style.height = "100vh";
  menuBar.style.width = "100vw";
  menuBar.style.zIndex = "500";
  menuBar.style.position = "absolute";
  menuBar.style.top = "0";
  menuBar.style.left = "0";
  menuBar.style.justifyContent = "center";

  menuIcon.removeEventListener("click", openMobileMenu);
  menuIcon.addEventListener("click", closeMobileMenu);
};

const closeMobileMenu = () => {
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon");
  console.log("Closing mobile menu");
  menuIcon.src = menuSVG; // Change to hamburger menu icon for opening menu

  menuBar.style.display = "none";
  menuBar.style.flexDirection = "row";
  menuBar.style.position = "static";
  menuBar.style.height = "auto";
  menuBar.style.width = "auto";
  menuBar.style.zIndex = "0";
  menuBar.style.position = "static";
  menuBar.style.justifyContent = "flex-end";

  menuIcon.removeEventListener("click", closeMobileMenu);
  menuIcon.addEventListener("click", openMobileMenu);
};

export default {
  openMobileMenu,
  closeMobileMenu,
};
