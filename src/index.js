import "./style.css";
import HOTSBackground from "./components/HOTSBackground.jpg";
import favicon from "../icons/logo.svg"; //TODO: Change to favicon icon you want

// IMPORTING IMAGES:
// import myImage from './my-image.png'

// IMPORTING MODULES:
// import myFunction from './module'
import loadFooter from "./components/X_footer/footer";
import loadNavBar from "./components/X_navBar/navBar";
import onResize from "./components/X_navBar/navBarResize";
import loadingScreen from "./components/X_loadingScreen/loadingScreen";
import {
  loadScrollButton,
  scrollFunction,
} from "./components/X_navBar/scrollToTop";
import mobileMenu from "./components/X_navBar/toggleMobileMenu";


import startGame from "./components/gameState/gameStart";
import displayStartMenu from "./components/gameDisplay/menuStart";
import displayGameBoard from "./components/gameDisplay/displayGameBoard";
import displayDetails from "./components/gameDisplay/displaySpaceDetails";
// Loading screen overlay to allow main elements and script to load before displaying
// If there isn't much to load, it'll be fast enough you won't see the loading screen at all
loadingScreen.loadingScreenStart();

// CONSTANT ELEMENTS

// EVENT LISTENERS
// For displaying mobile menu when screen < 500px wide
// window.addEventListener("resize", onResize);
document.getElementById("favicon").href = favicon;

// RUN FUNCTIONS TO LOAD CONTENT:

// For loading menu items in the upper right of site header

// loadNavBar();
// onResize(); // + in a hamburger menu for mobile/smaller screens

// If you want a scroll to top button that appears in bottom right when scrolled down a bit
// loadScrollButton();
// window.onscroll = () => {
//   scrollFunction();
// };


startGame();
// displayStartMenu();
// displayGameBoard();
// displayDetails("propertySpace27");


// Make sure this comes after the main body content is loaded so it's at the end of the document
// loadFooter();
loadingScreen.loadingScreenEnd();
