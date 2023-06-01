import gameState from "../gameState/gameState";

const diceRoll = (speed = false) => {
  let numDice;

  if(speed){
    (numDice = 3)
  } else {
    (numDice = 2);
  } 

  let results = [];
  for (let i = 0; i < numDice.length; i++) {
    let result = Math.floor(Math.random() * 6) + 1;
    results.push(result);
  }
  return results;
};

const newPlayer = (name, iconName, iconImage) => {
  let player = {};

  player.rollDice = () => diceRoll(gameState.isSpeedGame);

  player.location = 0;
  player.move = (spaces) => {
    player.location =+ spaces;

    if (player.location > 39) {
      player.location = player.location - 40;
    }

    if (player.location < 0) {
      player.location = player.location + 40;
    }
  };

  player.name = name;
  player.iconName = iconName;
  player.iconImage = iconImage;
  
  player.money = 1500;
  player.properties = [];

  player.isBankrupt = false;
  player.isInJail = false;

  return player;
};

export default newPlayer;
