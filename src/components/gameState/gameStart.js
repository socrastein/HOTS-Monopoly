import gameState from "./gameState";
import menuStart from "../gameDisplay/menuStart";

import newPlayer from "../gamePlayers/newPlayer";
import displayGameBoard from "../gameDisplay/displayGameBoard";
import updateHUD from "../gameDisplay/displayGameHUD";
import tank from "../gameDisplay/icons/tank.png";
import support from "../gameDisplay/icons/support.png";


const startGame = () => {
  console.log("Starting new game");
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  // menuStart(); 
  // Start a game from scratch with the Main Menu

  startFast(); 
  // Start a game with Matt & Summer presets

}

const startFast = () => {
  console.log("Starting game with preset options")
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  let player1 = newPlayer("Matt", "Tank", tank);
  let player2 = newPlayer("Summer", "Support", support)

  gameState[`player1`] = player1;
  gameState[`player2`] = player2;

  displayGameBoard();
  updateHUD();
}

export default startGame;