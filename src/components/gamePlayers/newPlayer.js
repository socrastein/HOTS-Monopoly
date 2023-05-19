const rollDice = (speed = no) => {
  let numDice;
  speed ? numDice = 3 : numDice = 2;

  let results = [];
  for(i=0; i < numDice.length; i++){
    let result = Math.floor(Math.random() * 6) + 1;
    results.push(result);
  }
  return results;
}

const newPlayer = (name, avatar, token) => {
  let player;

  player.rollDice = rollDice;
  player.location = 0;
  player.move = (spaces) => {
    player.location =+ spaces;

    if(player.location > 39){
      player.location = player.location - 40;
    }

    if(player.location < 0){
      player.location = player.location + 40;
    }
  };
  
  player.name = name;
  player.avatar = avatar;
  player.token = token;

  player.money = 1500;
  player.properties = [];
  
  player.isBankrupt = false;
  player.isInJail = false;

  return player;
}