import "./gameBoardStyle.css";
import gameState from "../gameState/gameState";
import gameBoard from "../gameBoard/gameBoard";
import propertyCards from "../gameBoard/propertyCards";

import bannerBruiser from "./banners/bruiser.jpg";
import bannerBoss from "./banners/boss.png";
import bannerCursed from "./banners/cursed.jpg";
import bannerDragon from "./banners/dragon.jpg";
import bannerHanamura from "./banners/hanamura.jpg";
import bannerInfernal from "./banners/infernal.jpg";
import bannerMines from "./banners/mines.jpg";
import bannerTowers from "./banners/towers.jpg";
import bannerVolskaya from "./banners/volskaya.jpg";
import bannerWarhead from "./banners/warhead.jpg";

const bossBanners = [];
const bruiserBanners = [];

const propertyBanners = [
  bannerBruiser,
  bannerBoss,
  bannerMines,
  bannerHanamura,
  bannerCursed,
  bannerVolskaya,
  bannerDragon,
  bannerWarhead,
  bannerInfernal,
  bannerTowers,
];

const propertySpace = (property) => {
  const container = document.createElement("div");
  container.id = `propertySpace${property.space}`;
  container.classList.add("gameBoardSpace", "gameBoardProperty");
  container.style.backgroundImage = propertyBanners[property.group];

  const avatar = document.createElement("div");
  avatar.classList.add("gameBoardPropertyAvatar");

  return container;
};

const chanceSpace = () => {
  const container = document.createElement("div");
  container.classList.add("gameBoardSpace", "gameBoardChance");
  return container;
};

const chestSpace = () => {
  const container = document.createElement("div");
  container.classList.add("gameBoardSpace", "gameBoardChest");
  return container;
};

// Index of the entire 40-space board of where each property goes in order of propertyCards
// First two are utilities, then the 4 railroads, then all the other properties after that
const propertySpaces = [
  12, 28, 5, 15, 25, 35, 1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26,
  27, 29, 31, 32, 34, 37, 39,
];


const displayGameBoard = () => {
  const mainContainer = document.getElementById("mainContainer");
  const gameBoardMainContainer = document.createElement("div");
  gameBoardMainContainer.id = "gameBoardMainContainer";
  //15 x 15 grid ; 13 x 13 Gameboard with 1 square border

  const topRow = document.createElement("div");
  topRow.classList.add("gameBoardRow");
  const midRow = document.createElement("div");
  midRow.classList.add("gameBoardMidRow");
  const leftCol = document.createElement("div");
  leftCol.classList.add("gameBoardLeftCol");
  const center = document.createElement("div");
  center.id = "gameBoardCenterContainer";
  const rightCol = document.createElement("div");
  rightCol.classList.add("gameBoardRightCol");
  const botRow = document.createElement("div");
  botRow.classList.add("gameBoardRow");

  const parking = document.createElement("div");
  parking.classList.add("gameBoardCorner");
  parking.id = "gameBoardParking";

  const goToJail = document.createElement("div");
  goToJail.classList.add("gameBoardCorner");
  goToJail.id = "gameBoardGoToJail";

  const go = document.createElement("div");
  go.classList.add("gameBoardCorner");
  go.id = "gameBoardGo";

  const jail = document.createElement("div");
  jail.classList.add("gameBoardCorner");
  jail.id = "gameBoardJail";

  const incomeTax = document.createElement("div");
  incomeTax.classList.add("gameBoardSpace");
  incomeTax.id = "gameBoardIncomeTax";

  const luxuryTax = document.createElement("div");
  luxuryTax.classList.add("gameBoardSpace");
  luxuryTax.id = "gameBoardLuxuryTax";

  gameBoardMainContainer.appendChild(topRow);
  gameBoardMainContainer.appendChild(midRow);
  midRow.appendChild(leftCol);
  midRow.appendChild(center);
  midRow.appendChild(rightCol);
  gameBoardMainContainer.appendChild(botRow);

  topRow.appendChild(parking);
  topRow.appendChild(propertySpace(propertyCards[17]));
  topRow.appendChild(chanceSpace());
  topRow.appendChild(propertySpace(propertyCards[18]));
  topRow.appendChild(propertySpace(propertyCards[19]));
  topRow.appendChild(propertySpace(propertyCards[4]));
  topRow.appendChild(propertySpace(propertyCards[20]));
  topRow.appendChild(propertySpace(propertyCards[21]));
  topRow.appendChild(propertySpace(propertyCards[22]));
  topRow.appendChild(propertySpace(propertyCards[1]));
  topRow.appendChild(goToJail);

  leftCol.appendChild(propertySpace(propertyCards[16]));
  leftCol.appendChild(propertySpace(propertyCards[15]));
  leftCol.appendChild(chestSpace());
  leftCol.appendChild(propertySpace(propertyCards[14]));
  leftCol.appendChild(propertySpace(propertyCards[3]));
  leftCol.appendChild(propertySpace(propertyCards[13]));
  leftCol.appendChild(propertySpace(propertyCards[12]));
  leftCol.appendChild(propertySpace(propertyCards[0]));
  leftCol.appendChild(propertySpace(propertyCards[11]));

  rightCol.appendChild(propertySpace(propertyCards[23]));
  rightCol.appendChild(propertySpace(propertyCards[24]));
  rightCol.appendChild(chestSpace());
  rightCol.appendChild(propertySpace(propertyCards[25]));
  rightCol.appendChild(propertySpace(propertyCards[5]));
  rightCol.appendChild(chanceSpace());
  rightCol.appendChild(propertySpace(propertyCards[26]));
  rightCol.appendChild(luxuryTax);
  rightCol.appendChild(propertySpace(propertyCards[27]));

  botRow.appendChild(jail);
  botRow.appendChild(propertySpace(propertyCards[10]));
  botRow.appendChild(propertySpace(propertyCards[9]));
  botRow.appendChild(chanceSpace());
  botRow.appendChild(propertySpace(propertyCards[8]));
  botRow.appendChild(propertySpace(propertyCards[2]));
  botRow.appendChild(incomeTax);
  botRow.appendChild(propertySpace(propertyCards[7]));
  botRow.appendChild(chestSpace());
  botRow.appendChild(propertySpace(propertyCards[6]));
  botRow.appendChild(go);

  mainContainer.appendChild(gameBoardMainContainer);

};

const displayPlayerPositions = () => {};

const displayPropertyOwners = () => {};

/////////////////////
// GAME ANIMATIONS //
/////////////////////

const animatePlayerMovement = (player, destination) => {};

const animatePlayerPurchase = (player, property) => {};

const animateDiceRoll = (result) => {};

export default displayGameBoard;
