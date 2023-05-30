import HOTSLogo from "../HOTSLogo.jpg";

import cardFactory from "./cardFactory";
import gameState from "../gameState/gameState";
import startGame from "../gameState/gameStart"; 

const toggleGameState = (option) => {
  if (gameState[option]) {
    gameState[option] = false;
  } else gameState[option] = true;

  console.log(gameState[option]);
};

const displayMainMenu = () => {
  // HOTS MONOPOLY
  //  New Game
  //  Load Game
  //  Options
  console.log("Main Menu");
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  const menuContainer = cardFactory.container("mainMenu");

  const menuTitle = cardFactory.title("Main Menu");
  const menuNew = cardFactory.button("New Game", displayNewGameMenu);
  const menuLoad = cardFactory.button("Load Game", displayLoadGameMenu);
  const menuOptions = cardFactory.button("Options", displayGameOptions);

  mainContainer.appendChild(menuContainer);
  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(cardFactory.separator());
  menuContainer.appendChild(menuNew);
  menuContainer.appendChild(menuLoad);
  menuContainer.appendChild(menuOptions);
};

const displayNewGameMenu = () => {
  // NEW GAME
  //  Player # : 1-4
  //  AI : No, 1, 2
  //  Game Speed : Standard, Fast
  //  Free Parking : Just Parking, Bonus Pot
  //  Housing Supply : Limited, Unlimited
  //  Auction Unsold Property : Yes, No
  console.log("New Game");
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  const menu = cardFactory.container("newMenu");

  const title = cardFactory.title("New Game");
  const players = cardFactory.labelDropPair("Players", [1, 2, 3, 4], 1);
  const AI = cardFactory.labelDropPair("AI", ["None", 1, 2], 0);

  const speed = cardFactory.labelTogglePair(
    "Fast Game",
    () => toggleGameState("isSpeedGame"),
    false
  );
  const parking = cardFactory.labelTogglePair(
    "Corner Keep Bonus",
    () => toggleGameState("isFreeParkingBonus"),
    false
  );
  const housing = cardFactory.labelTogglePair(
    "Building Limited",
    () => toggleGameState("isHousingLimited"),
    true
  );

  const auction = cardFactory.labelTogglePair(
    "Auction Passed Recruits",
    () => toggleGameState("isUnsoldPropertyAuctioned"),
    false
  )

  const start = cardFactory.button("START", startGame);

  mainContainer.appendChild(menu);
  menu.appendChild(cardFactory.backButton(displayMainMenu));

  menu.appendChild(title);
  menu.appendChild(cardFactory.separator());

  menu.appendChild(players);
  menu.appendChild(AI);
  menu.appendChild(housing);
  menu.appendChild(speed);
  menu.appendChild(parking);
  menu.appendChild(auction);
  menu.appendChild(cardFactory.separator());

  menu.appendChild(start);
};

const displayLoadGameMenu = () => {
  // LOAD GAME
  // Load
  // Delete
  // List of saved games
  // Radio button select to load/delete
  console.log("Load Game");
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  const menu = cardFactory.container("loadMenu");

  const title = cardFactory.title("Load Game");

  mainContainer.appendChild(menu);
  menu.appendChild(cardFactory.backButton(displayMainMenu));

  menu.appendChild(title);
  menu.appendChild(cardFactory.separator());

  menu.appendChild(cardFactory.subTitle("COMING SOON"));
};

const displayGameOptions = () => {
  console.log("Game Options");

  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  const menu = cardFactory.container("optionsMenu");

  const title = cardFactory.title("Options");

  mainContainer.appendChild(menu);
  menu.appendChild(cardFactory.backButton(displayMainMenu));

  menu.appendChild(title);
  menu.appendChild(cardFactory.separator());

  menu.appendChild(cardFactory.subTitle("COMING SOON"));
};

export default displayMainMenu;
