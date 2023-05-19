import "./menuStyle.css";
import HOTSLogo from "../HOTSLogo.jpg";
import toggleOn from "./toggleOn.svg";
import toggleOff from "./toggleOff.svg";

import gameState from "../gameState/gameState";

const filterBlue = "invert(57%) sepia(53%) saturate(5771%) hue-rotate(163deg) brightness(97%) contrast(101%)";
const filterBlack = "invert()";

const createMenuOption = (name) => {
  const container = document.createElement("div");
  container.id = `${name}Container`;
  container.classList.add("menuOptionContainer");

  const text = document.createElement("p");
  text.id = `${name}Text`;
  text.classList.add("menuOptionText");

  container.appendChild(text);

  return container;
};

const toggleButton = (event) => {
  const button = document.getElementById(event.target.id);
  if (button.src == toggleOn) {
    button.src = toggleOff;
    button.style.filter = filterBlack;
  } else {
    button.src = toggleOn;
    button.style.filter = filterBlue;
  }
  console.log(event);
};

const createMenuToggle = (name) => {
  const container = document.createElement("div");
  container.id = `${name}Container`;
  container.classList.add("menuOptionContainer");

  const text = document.createElement("p");
  text.id = `${name}Text`;
  text.classList.add("menuToggleText");

  const toggle = document.createElement("img");
  toggle.id = `${name}Toggle`;
  toggle.classList.add("menuToggleImage");
  toggle.src = toggleOff;
  toggle.addEventListener("click", toggleButton);

  container.appendChild(text);
  container.appendChild(toggle);

  return container;
};

const createMenuCycle = (name) => {
  const container = document.createElement("div");
  container.id = `${name}Container`;
  container.classList.add("menuOptionContainer");

  const text = document.createElement("p");
  text.id = `${name}Text`;
  text.classList.add("menuToggleText");

  const option = document.createElement("p");
  option.id = `${name}Option`;
  option.classList.add("menuCycleOption");

  container.appendChild(text);
  container.appendChild(option);

  return container;
};

const displayStartMenu = () => {
  // HOTS MONOPOLY
  //  New Game
  //  Load Game
  //  Options
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";
  mainContainer.appendChild(menuContainer);

  const menuTitle = createMenuOption("startMenuTitle");
  menuTitle.classList.add("menuTitleContainer", "menuTitle");
  const menuNew = createMenuOption("startMenuNew");
  menuNew.addEventListener("click", displayNewGameMenu);
  const menuLoad = createMenuOption("startMenuLoad");
  menuLoad.addEventListener("click", displayLoadGameMenu);
  const menuOptions = createMenuOption("startMenuOptions");
  menuOptions.addEventListener("click", displayGameOptions);

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuNew);
  menuContainer.appendChild(menuLoad);
  menuContainer.appendChild(menuOptions);

  const titleText = document.getElementById("startMenuTitleText");
  titleText.classList.add("menuTitle");
  const newText = document.getElementById("startMenuNewText");
  const loadText = document.getElementById("startMenuLoadText");
  const optionsText = document.getElementById("startMenuOptionsText");

  titleText.textContent = "MONOPOLY";
  newText.textContent = "New Game";
  loadText.textContent = "Load Game";
  optionsText.textContent = "Options";
};

const displayNewGameMenu = () => {
  console.log("New Game");
  // NEW GAME
  //  Player # : 1-4
  //  AI : No, 1, 2
  //  Game Speed : Standard, Fast
  //  Free Parking : Just Parking, Bonus Pot
  //  Housing Supply : Limited, Unlimited
  //  Auction Unsold Property : Yes, No

  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";
  mainContainer.appendChild(menuContainer);

  const menuTitle = createMenuOption("newGameTitle");
  menuTitle.classList.add("menuTitleContainer", "menuTitle");
  menuTitle.textContent = "New Game";

  const menuPlayers = createMenuCycle("newGamePlayers");
  const menuSpeed = createMenuToggle("newGameSpeed");
  const menuParking = createMenuToggle("newGameParking");
  const menuHousing = createMenuToggle("newGameHousing");
  const menuAuction = createMenuToggle("newGameAuction");
  const menuStart = createMenuOption("newGameStart");

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuPlayers);
  menuContainer.appendChild(menuSpeed);
  menuContainer.appendChild(menuParking);
  menuContainer.appendChild(menuHousing);
  menuContainer.appendChild(menuAuction);
  menuContainer.appendChild(menuStart);

  // Add text for all the buttons in the menu
  const playersText = document.getElementById("newGamePlayersText");
  playersText.textContent = "Players";
  const playersOption = document.getElementById("newGamePlayersOption");
  playersOption.textContent = gameState.numberOfPlayers;
  const speedText = document.getElementById("newGameSpeedText");
  speedText.textContent = "Game Speed";
  const parkingText = document.getElementById("newGameParkingText");
  parkingText.textContent = "Free Parking Bonus";
  const housingText = document.getElementById("newGameHousingText");
  housingText.textContent = "Limited Structures";
  const auctionText = document.getElementById("newGameAuctionText");
  auctionText.textContent = "Auction Property";
  const startText = document.getElementById("newGameStartText");
  startText.textContent = "START GAME";

  // Add click events to each button for changing gameState values
  menuPlayers.addEventListener("click", () => {
    console.log(gameState.numberOfPlayers);
    gameState.numberOfPlayers ++;
    if(gameState.numberOfPlayers > 4){
      gameState.numberOfPlayers = 1;
    }
    playersOption.textContent = gameState.numberOfPlayers;
  });
};

const displayLoadGameMenu = () => {
  console.log("Load Game");

  // LOAD GAME
  // Load
  // Delete
  // List of saved games
  // Radio button select to load/delete
};

const displayGameOptions = () => {
  console.log("Game Options");
};

export default displayStartMenu;
