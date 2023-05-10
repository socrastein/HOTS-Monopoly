import "./style.css";
import favicon from '../icons/logo.svg' //TODO: Change to favicon icon you want

// IMPORTING IMAGES:
// import myImage from './my-image.png'



// IMPORTING MODULES:
// import myFunction from './module'
import loadFooter from "./components/footer/footer";
// TODO: change menu item names and onClick() functions in components/navbar/navBar.js
import loadNavBar from "./components/navbar/navBar";
import onResize from "./components/navbar/navBarResize";
import loadingScreen from "./components/loadingScreen/loadingScreen";
import {loadScrollButton, scrollFunction} from "./components/navbar/scrollToTop";
import mobileMenu from "./components/navbar/toggleMobileMenu";

// Loading screen overlay to allow main elements and script to load before displaying
// If there isn't much to load, it'll be fast enough you won't see the loading screen at all
loadingScreen.loadingScreenStart();


// CONSTANT ELEMENTS

// EVENT LISTENERS
// For displaying mobile menu when screen < 500px wide
window.addEventListener("resize", onResize);
document.getElementById("favicon").href = favicon;

// RUN FUNCTIONS TO LOAD CONTENT:
console.log("Testing");

// For loading menu items in the upper right of site header

loadNavBar(); 
onResize(); // + in a hamburger menu for mobile/smaller screens

// If you want a scroll to top button that appears in bottom right when scrolled down a bit 
loadScrollButton();
window.onscroll = () => {
  scrollFunction();
};

console.log(mobileMenu.menuIsOpen);

// Make sure this comes after the main body content is loaded so it's at the end of the document
loadFooter();
loadingScreen.loadingScreenEnd();
