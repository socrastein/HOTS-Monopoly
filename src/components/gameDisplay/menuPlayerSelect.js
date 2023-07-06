import "./menuPlayerSelect.css";

import gameState from "../gameState/gameState";
import cardFactory from "./cardFactory";
import newPlayer from "../gamePlayers/newPlayer";
import displayGameBoard from "./displayGameBoard";
import updateHUD from "./displayGameHUD";

import tank from "./icons/tank.png";
import bruiser from "./icons/bruiser.png";
import melee from "./icons/melee.png";
import range from "./icons/range.png";
import healer from "./icons/healer.png";
import support from "./icons/support.png";

const heroImages = [tank, bruiser, melee, range, healer, support];

const heroNames = [
  "Tank",
  "Bruiser",
  "Melee Assassin",
  "Ranged Assassin",
  "Healer",
  "Support",
];

const playerSelectMenu = (playerNumber) => {
  let n = playerNumber;
  const players = gameState.numberOfPlayers;
  const mainContainer = document.getElementById("mainContainer");
  // mainContainer.className = "playerSelectMainContainer";
  mainContainer.innerHTML = "";

  const container = cardFactory.container("playerSelectMenu");
  const title = cardFactory.title(`Player ${n}`);
  const getName = cardFactory.labelInputPair("Name");

  const selectIcons = document.createElement("div");
  selectIcons.classList.add("selectIconsContainer");

  const selected = cardFactory.subTitle("Choose an icon");
  selected.id = "playerIconSelected";

  let selectedIcon = undefined;

  for (let i = 0; i < heroImages.length; i++) {
    let heroImage = heroImages[i];
    let heroName = heroNames[i];

    let element = document.createElement("div");
    element.classList.add("playerIcon");
    if (gameState.chosenIcons.includes(heroName)) {
      element.classList.add("playerIconChosen");
    }
    element.id = `playerSelectIcon${heroName.replace(" ", "")}`;
    element.style.backgroundImage = `url(${heroImage})`;
    element.addEventListener("click", (event) => {
      if (event.target.className.includes("playerIconChosen")) {
        return;
      }
      if(selectedIcon) selectedIcon.classList.remove("playerIconSelected");
      selected.textContent = heroName;
      selectedIcon = event.target;
      selectedIcon.classList.add("playerIconSelected");
      console.log(selectedIcon);
    });

    selectIcons.appendChild(element);
  }

  const confirm = cardFactory.button("NEXT", () => {
    setPlayerSelections(n, selectedIcon);
    updateHUD();
  });

  mainContainer.appendChild(container);
  container.appendChild(title);
  container.appendChild(getName);
  container.appendChild(selectIcons);
  container.appendChild(selected);
  container.appendChild(confirm);
};

const setPlayerSelections = (playerNumber, selectedIcon) => {
  let name = document.getElementById("cardInputName").value;
  if (selectedIcon === undefined || name === "") {
    return;
  }
  
  let iconName = document.getElementById("playerIconSelected").textContent;
  gameState.chosenIcons.push(iconName);

  let i = heroNames.findIndex((hero) => {
    return hero === iconName;
  });
  let image = heroImages[i];

  console.log(image);

  let player = newPlayer(name, iconName, image);
  gameState[`player${playerNumber}`] = player;

  if(playerNumber < gameState.numberOfPlayers){
    playerSelectMenu(playerNumber + 1);
  } else {
    displayGameBoard();
    updateHUD();
    console.log(gameState.numberOfPlayers);
  }
};

export default playerSelectMenu;
