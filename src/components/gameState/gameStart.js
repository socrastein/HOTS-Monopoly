import gameState from "./gameState";
import displayGameBoard from "../gameDisplay/displayGameBoard";

const startGame = () => {
  console.log("Starting new game");
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";
  displayGameBoard();
}

export default startGame;