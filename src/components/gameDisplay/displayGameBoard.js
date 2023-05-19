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

const propertyColors = [
  'rgba(0,0,0,.25)',          //bruiser
  'rgba(0,0,0,.25)',          //boss
  'rgba(50,5,0,.75)',         //haunted mines
  'rgba(255,150,255,.75)',    //hanamura
  'rgba( 0, 75, 75,.75)',     //towers of doom
  'rgba( 50, 155, 255,.75)',       //volskaya
  'rgba( 200, 0, 0,.75)',     //
  'rgba( 200, 150, 0,.75)',   //
  'rgba( 255, 125, 0,.75)',   //
  'rgba(100, 0, 165,.75)'     //
];

const propertySpace = (property, flip = false) => {
  const container = document.createElement("div");
  container.id = `propertySpace${property.space}`;
  container.classList.add("gameBoardSpace", "gameBoardProperty");
  let color = propertyColors[property.group];
  container.style.backgroundImage = `linear-gradient(
    rgba(0,0,0,1),
    ${color}
  )`;


  const avatar = document.createElement("div");
  avatar.classList.add("gameBoardPropertyAvatar");

  const tag = document.createElement("div");
  tag.classList.add("gameBoardPropertyTag");
  tag.textContent = `❤︎ ${property.price}`;

  if(flip){
    container.appendChild(tag)
    container.appendChild(avatar)
  } else {
    container.appendChild(avatar);
    container.appendChild(tag)
  }

  return container;
};

const chanceSpace = (flip = false) => {
  const container = document.createElement("div");
  container.classList.add("gameBoardSpace", "gameBoardChance");

  const avatar = document.createElement("div");
  avatar.classList.add("gameBoardPropertyAvatar");
  container.appendChild(avatar);

  const tag = document.createElement("div");
  tag.classList.add("gameBoardPropertyTag");
  tag.textContent = `Magic`;

  if(flip){
    container.appendChild(tag)
    container.appendChild(avatar)
  } else {
    container.appendChild(avatar);
    container.appendChild(tag)
  }

  return container;
};

const chestSpace = (flip = false) => {
  const container = document.createElement("div");
  container.classList.add("gameBoardSpace", "gameBoardChest");

  const avatar = document.createElement("div");
  avatar.classList.add("gameBoardPropertyAvatar");
  container.appendChild(avatar);

  const tag = document.createElement("div");
  tag.classList.add("gameBoardPropertyTag");
  tag.textContent = `Tech`;

  if(flip){
    container.appendChild(tag)
    container.appendChild(avatar)
  } else {
    container.appendChild(avatar);
    container.appendChild(tag)
  }

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
  topRow.classList.add("gameBoardTopRow");
  const midRow = document.createElement("div");
  midRow.classList.add("gameBoardMidRow");
  const leftCol = document.createElement("div");
  leftCol.classList.add("gameBoardLeftCol");
  const center = document.createElement("div");
  center.id = "gameBoardCenterContainer";
  const rightCol = document.createElement("div");
  rightCol.classList.add("gameBoardRightCol");
  const botRow = document.createElement("div");
  botRow.classList.add("gameBoardBotRow");

  const parking = document.createElement("div");
  parking.classList.add("gameBoardCorner");
  parking.id = "gameBoardParking";

  const parkingTag1 = document.createElement("div");
  parkingTag1.textContent = "SAFE";
  parkingTag1.classList.add("cornerTag");
  parking.appendChild(parkingTag1)

  const parkingTag2 = document.createElement("div");
  parkingTag2.textContent = "KEEP";
  parkingTag2.classList.add("cornerTag");
  parking.appendChild(parkingTag2)
  
  const goToJail = document.createElement("div");
  goToJail.classList.add("gameBoardCorner");
  goToJail.id = "gameBoardGoToJail";

  const goToJailTag1 = document.createElement("div");
  goToJailTag1.textContent = "GO TO";
  goToJailTag1.classList.add("cornerTag");
  goToJail.appendChild(goToJailTag1);

  const goToJailTag2 = document.createElement("div");
  goToJailTag2.textContent = "SLAUGHTER";
  goToJailTag2.classList.add("cornerTag");
  goToJail.appendChild(goToJailTag2);

  const go = document.createElement("div");
  go.classList.add("gameBoardCorner");
  go.id = "gameBoardGo";

  const goTag1 = document.createElement("div");
  goTag1.textContent = "HOME";
  goTag1.classList.add("cornerTag");
  go.appendChild(goTag1)

  const goTag2 = document.createElement("div");
  goTag2.textContent = "BASE";
  goTag2.classList.add("cornerTag");
  go.appendChild(goTag2)

  const jail = document.createElement("div");
  jail.classList.add("gameBoardCorner");
  jail.id = "gameBoardJail";

  const jailTag1 = document.createElement("div");
  jailTag1.textContent = "SLAUGHTER"
  jailTag1.classList.add("cornerTag");
  jail.appendChild(jailTag1);

  const jailTag2 = document.createElement("div");
  jailTag2.textContent = "HOUSE"
  jailTag2.classList.add("cornerTag");
  jail.appendChild(jailTag2);

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
  topRow.appendChild(propertySpace(propertyCards[17], true));
  topRow.appendChild(chanceSpace(true));
  topRow.appendChild(propertySpace(propertyCards[18], true));
  topRow.appendChild(propertySpace(propertyCards[19], true));
  topRow.appendChild(propertySpace(propertyCards[4], true));
  topRow.appendChild(propertySpace(propertyCards[20], true));
  topRow.appendChild(propertySpace(propertyCards[21], true));
  topRow.appendChild(propertySpace(propertyCards[1], true));
  topRow.appendChild(propertySpace(propertyCards[22], true));
  topRow.appendChild(goToJail);

  leftCol.appendChild(propertySpace(propertyCards[16], true));
  leftCol.appendChild(propertySpace(propertyCards[15], true));
  leftCol.appendChild(chestSpace(true));
  leftCol.appendChild(propertySpace(propertyCards[14], true));
  leftCol.appendChild(propertySpace(propertyCards[3], true));
  leftCol.appendChild(propertySpace(propertyCards[13], true));
  leftCol.appendChild(propertySpace(propertyCards[12], true));
  leftCol.appendChild(propertySpace(propertyCards[0], true));
  leftCol.appendChild(propertySpace(propertyCards[11], true));

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
