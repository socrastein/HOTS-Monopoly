import gameState from "./gameState";
import updateHUD from "../gameDisplay/displayGameHUD";
import playerSelectMenu from "../gameDisplay/menuPlayerSelect";
import menuStart from "../gameDisplay/menuStart";

const startGame = () => {
  console.log("Starting new game");
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  // menuStart();
  playerSelectMenu(1);
  updateHUD();
}

export default startGame;