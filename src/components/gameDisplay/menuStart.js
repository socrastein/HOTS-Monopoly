import "./menuStyle.css";
import HOTSLogo from "../HOTSLogo.jpg";

const createMenuOption = (name) => {
  const container = document.createElement("div");
  container.id = `${name}Container`;
  container.classList.add("startMenuOptionContainer");

  const text = document.createElement("p");
  text.id = `${name}Text`;
  text.classList.add("startMenuOptionText");

  container.appendChild(text);

  return container;
};

const displayStartMenu = () => {
  // HOTS MONOPOLY
  //  New Game
  //  Load Game
  //  Options
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = '';

  const menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";
  mainContainer.appendChild(menuContainer);

  const menuTitle = createMenuOption("startMenuTitle");
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
  const titleImage = document.getElementById("startMenuTitleImage");
  const newText = document.getElementById("startMenuNewText");
  const newImage = document.getElementById("startMenuNewImage");
  const loadText = document.getElementById("startMenuLoadText");
  const loadImage = document.getElementById("startMenuLoadImage");
  const optionsText = document.getElementById("startMenuOptionsText");
  const optionsImage = document.getElementById("startMenuOptionsImage");

  titleText.textContent = "MONOPOLY";
  // titleImage.src =
  newText.textContent = "New Game";
  // // newImage.src =
  loadText.textContent = "Load Game";
  // // loadImage.src =
  optionsText.textContent = "Options";
  // // optionsImage.src =
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
  mainContainer.innerHTML = '';

  const menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";
  mainContainer.appendChild(menuContainer);

  const menuTitle = createMenuOption("newGameTitle");
  const menuPlayers = createMenuOption("newGamePlayers");
  const menuSpeed = createMenuOption("newGameSpeed");
  const menuParking = createMenuOption("newGameParking");

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
