const newPlayer = (name, avatar, token) => {
  let player;
  
  player.name = name;
  player.avatar = avatar;
  player.token = token;

  player.money = 1500;
  player.properties = [];
  
  player.isBankrupt = false;
  player.isInJail = false;
  player.jailTurns = 3;

}