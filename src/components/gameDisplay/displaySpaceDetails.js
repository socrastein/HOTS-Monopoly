const displayDetails = (event) => {
  let card = document.getElementById(event.target.id);
  if(!card){
    return;
  }
  const centerContainer = document.getElementById("gameBoardCenterContainer");
  const cardDetailsContainer = document.createElement("div");
  cardDetailsContainer.id = "cardDetailsContainer";
  centerContainer.appendChild(cardDetailsContainer);

  const cardGroup = document.createElement("div");
  const cardName = document.createElement("div");
  const cardCost = document.createElement("div");
  const cardRent = document.createElement("div");
  const cardMortage = document.createElement("div");
  const cardHouseCost = document.createElement("div");


}

export default displayDetails;