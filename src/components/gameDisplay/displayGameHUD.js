import "./gameHud.css";

import gameState from "../gameState/gameState";
import { propertyColors } from "./displaySpaceDetails";

const createPlayerContainers = () => {
  for (let i = 1; i <= gameState.numberOfPlayers; i++) {
    let container = document.createElement("div");
    container.classList.add("playerHUDContainer");
    container.id = `HUDplayer${i}`;

    let playerName = document.createElement("div");
    playerName.textContent = `Player ${i}`;
    playerName.classList.add("HUDName");
    playerName.id = `HUDplayer${i}Name`;

    let iconFundsContainer = document.createElement("div");
    iconFundsContainer.classList.add("selectIconsContainer");

    let playerIcon = document.createElement("div");
    playerIcon.classList.add("HUDIcon");
    playerIcon.id = `HUDplayer${i}Icon`;

    let playerFunds = document.createElement("div");
    playerFunds.textContent = `1500`;
    playerFunds.classList.add("HUDFunds");
    playerFunds.id = `HUDplayer${i}Funds`;

    iconFundsContainer.appendChild(playerIcon);
    iconFundsContainer.appendChild(playerFunds);

    let playerProperty = document.createElement("div");
    playerProperty.classList.add("HUDProperties");
    playerProperty.id = `HUDplayer${i}Property`;

    container.appendChild(playerName);
    container.appendChild(iconFundsContainer);
    container.appendChild(playerProperty);

    document.body.appendChild(container);
  }
};

const displayPlayerProperties = () => {
  for (let i = 1; i <= gameState.numberOfPlayers; i++) {
    let player = gameState[`player${i}`];
    if (!player) return;

    let nameElement = document.getElementById(`HUDplayer${i}Name`);
    let iconElement = document.getElementById(`HUDplayer${i}Icon`);
    let fundsElement = document.getElementById(`HUDplayer${i}Funds`);
    let propertyElement = document.getElementById(`HUDplayer${i}Property`);

    nameElement.textContent = player.name;
    iconElement.style.backgroundImage = `url(${player.iconImage})`;
    fundsElement.textContent = player.money;
    propertyElement.innerHTML = "";
  }
};

const adjustPlayerFunds = (playerNumber, adjustment) => {
  for (let i = 1; i <= gameState.numberOfPlayers; i++) {}
};

const displayPlayerProperty = (playerNumber) => {
  return;
};

let HUD = false;

const updateHUD = () => {
  if (!HUD) {
    createPlayerContainers();
    HUD = true;
  }
  displayPlayerProperties();
};

export default updateHUD;
