import menuSVG from "./menu.svg";
import logoSVG from "./logo.svg";

import toggleMenu from "./toggleMobileMenu";

const loadSiteTitle = () => {
  let siteTitle = document.createElement("div");
  siteTitle.id = "siteTitle";
  navContainer.appendChild(siteTitle);
};

const loadSiteName = () => {
  let siteName = document.createElement("p");
  siteName.id = "siteName";
  siteName.textContent = "Monopoly";
  // Clicking site name returns you to home page
  siteName.addEventListener("click", () => (location.href = "index.html")); 
  siteTitle.appendChild(siteName);
};

const loadSiteLogo = () => {
  if (typeof logoSVG !== "undefined") {
    let siteLogo = document.createElement("img");
    siteLogo.id = "siteLogo";
    siteLogo.src = logoSVG;
    siteTitle.appendChild(siteLogo);
  }
};

const loadMenuBar = () => {
  let menuBar = document.createElement("div");
  menuBar.id = "menuBar";
  menuBar.classList.add("flexRow");
  navContainer.appendChild(menuBar);
};

let menuItems = [
  { name: "New Game", onClick: () => function1() }, //TODO: FILL IN WITH MENU ITEMS + FUNCTIONS
  { name: "Load Game", onClick: () => function2() },
  { name: "Options", onClick: () => function3() },
];

const loadMenuItems = () => {
  menuItems.forEach((item) => {
    let menuItem = document.createElement("p");
    menuItem.textContent = item.name;
    menuItem.onclick = item.onClick;
    menuItem.classList.add("menuItem");
    menuBar.appendChild(menuItem);
  });
};

const loadMenuIcon = () => {
  let menuIcon = document.createElement("img");
  menuIcon.src = menuSVG;
  menuIcon.id = "menuIcon";
  menuIcon.addEventListener("click", toggleMenu.openMobileMenu);
  navContainer.appendChild(menuIcon);
};

export default function loadNavBar() {
  let mainContainer = document.getElementById("mainContainer");
  let navContainer = document.createElement("div");

  navContainer.id = "navContainer";
  navContainer.classList.add("flexRow", "spacedApart");
  mainContainer.appendChild(navContainer);

  // MenuBar holds a list of items/links that you can specify just below in menuItems
  // These sit on the right side of the header if the screen is large enough, and are nested
  // within a mobile hamburger menu when the screen is small

  loadSiteTitle();
  loadSiteLogo();
  loadSiteName();
  loadMenuBar();
  loadMenuItems();
  loadMenuIcon();
}
