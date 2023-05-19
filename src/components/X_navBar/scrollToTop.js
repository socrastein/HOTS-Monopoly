import arrowSVG from "./arrow.svg";

import mobileMenuObject from "./toggleMobileMenu";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function loadScrollButton() {
  const mainContainer = document.getElementById("mainContainer");
  if (document.getElementById("scrollToTopButton")) {
    return;
  }
  let button = document.createElement("div");
 
  button.id = "scrollToTopButton";

  // CSS styling, change how it looks here
  button.style.display = "none";
  button.style.backgroundImage = 'url('+arrowSVG+')' // ^ icon for button
  button.style.backgroundColor = "rgba(255,255,255,.5)";
  button.style.backgroundPosition = "center";
  button.style.backgroundRepeat = "no-repeat";
  button.style.width = "min(15vw, 60px)";
  button.style.aspectRatio = "1";
  button.style.position = "fixed";
  button.style.bottom = "2vh";
  button.style.right = "3vw";
  button.style.transform = "rotate(-90deg)";
  button.style.borderRadius = "50%";

  button.addEventListener("click", scrollToTop);
  mainContainer.appendChild(button);
}

export function scrollFunction() {
  const scrollToTopButton = document.getElementById("scrollToTopButton");
  const screenHeightScrollDistance = screen.height * 2;
  if (
    document.body.scrollTop > screenHeightScrollDistance ||
    document.documentElement.scrollTop > screenHeightScrollDistance
  ) {
    scrollToTopButton.style.display = "inline";
    scrollToTopButton.classList.remove("fadeOut");
    scrollToTopButton.classList.add("fadeIn");
    scrollToTopButton.disabled = false;
    if (menuBar.style.flexDirection === "column") {
      // If mobile menu bar is open
      mobileMenuObject.closeMenuBar();
    }
  } else {
    scrollToTopButton.classList.remove("fadeIn");
    scrollToTopButton.classList.add("fadeOut");
    scrollToTopButton.disabled = true;
  }
}
