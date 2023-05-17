import mobileMenu from "./toggleMobileMenu";

export default function navBarResize() {
  console.log("Resizing");
  let screenWidth = window.screen.width;

  if(menuBar.style.flexDirection === "column") {
    mobileMenu.closeMobileMenu();
    return;
  }

  if (screenWidth < 600) {
    siteName.style.fontSize = "1.2rem";
    siteLogo.style.height = "2rem";
    siteLogo.style.width = "2rem";
    menuBar.style.display = "none";
    menuIcon.style.display = "flex";
  } else {
    siteName.style.fontSize = "1.5rem";
    siteLogo.style.height = "2.75rem";
    siteLogo.style.width = "2.75rem";
    menuBar.style.display = "flex";
    menuIcon.style.display = "none";
  }
}



