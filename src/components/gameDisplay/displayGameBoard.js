import "./gameBoardStyle.css";
import gameState from "../gameState/gameState";
import propertyCards from "../gameBoard/propertyCards";

import bannerBruiser from "./banners/bruiser.jpg";
import bannerBoss from "./banners/boss.jpg";
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
  container.style.backgroundImage = propertyBanners[property.group];

  const avatar = document.createElement("div");
  banner.classList.add("gameBoardPropertyAvatar");

  return container;
};

const chanceSpace = () => {
  const container = document.createElement("div");
  container.classList.add("gameBoardChance");
  return container;
}

const chestSpace = () => {
  const container = document.createElement("div");
  container.classList.add("gameBoardChest");
  return container;
}

const displayGameBoard = () => {
  const gameBoardMainContainer = document.createElement("div");
  gameBoardMainContainer.id = "gameBoardMainContainer";
  //15 x 15 grid ; 13 x 13 Gameboard with 1 square border

  const topRow = document.createElement("div");
  const midRow = document.createElement("div");
  const leftCol = document.createElement("div");
  const center = document.createElement("div");
  const rightCol = document.createElement("div");
  const botRow = document.createElement("div");

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

  
  
  for (i = 0; i < propertyCards.length; i++) {
    let property = propertyCards[i];
  }
  
  
  gameBoardMainContainer.appendChild(topRow);
  gameBoardMainContainer.appendChild(midRow);
  gameBoardMainContainer.appendChild(botRow);
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
