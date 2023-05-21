import "./gameBoardCardDetails.css";
import propertyCards from "../gameBoard/propertyCards";
import hauntedMines from "./banners/mines.jpg";
import hanamura from "./banners/hanamura.jpg";
import towers from "./banners/towers.jpg";
import volskaya from "./banners/volskaya.jpg";
import dragonshire from "./banners/dragon.jpg";
import warhead from "./banners/warhead.jpg";
import infernal from "./banners/infernal.jpg";
import cursed from "./banners/cursed.jpg";

const groupBanners = [
  hauntedMines,
  hanamura,
  towers,
  volskaya,
  dragonshire,
  warhead,
  infernal,
  cursed,
];

import erik from "./banners/erik.jpg";
import murky from "./banners/murky.jpg";
import hanzo from "./banners/hanzo.jpg";
import genji from "./banners/genji.jpg";
import dva from "./banners/dva.jpg";
import sylvanas from "./banners/sylvanas.jpg";
import arthas from "./banners/arthas.jpg";
import illidan from "./banners/illidan.jpg";
import tracer from "./banners/tracer.jpg";
import mei from "./banners/mei.jpg";
import zarya from "./banners/zarya.jpg";
import chromie from "./banners/chromie.jpg";
import alex from "./banners/alexstrasza.jpg";
import deathwing from "./banners/deathwing.jpg";
import raynor from "./banners/raynor.jpg";
import nova from "./banners/nova.jpg";
import hammer from "./banners/hammer.jpg";
import imperius from "./banners/imperius.jpg";
import valla from "./banners/valla.jpg";
import diablo from "./banners/diablo.jpg";
import orphea from "./banners/orphea.jpg";
import liming from "./banners/liming.jpg";

const heroBanners = [
  erik,
  murky,
  hanzo,
  genji,
  dva,
  sylvanas,
  arthas,
  illidan,
  tracer,
  mei,
  zarya,
  chromie,
  alex,
  deathwing,
  raynor,
  nova,
  hammer,
  imperius,
  valla,
  diablo,
  orphea,
  liming,
];

const createCardLabel = (name, label = "", value) => {
  let container = document.createElement("div");
  container.id = `card${name}Container`;
  container.classList.add("cardValueContainer");

  let labelDiv = document.createElement("div");
  labelDiv.classList.add("cardValueLabel");
  labelDiv.textContent = label;

  let valueDiv = document.createElement("div");
  valueDiv.classList.add("cardValueContent");
  valueDiv.id = `card${name}Value`;
  valueDiv.textContent = value;

  container.appendChild(labelDiv);
  container.appendChild(valueDiv);

  return container;
};

const towerLabels = [
  "1 Tower:",
  "2 Towers:",
  "3 Towers:",
  "4 Towers:",
  "1 Fortress:",
];

const bossLabels = [
  "1 Boss Camp:",
  "2 Boss Camps:",
  "3 Boss Camps:",
  "4 Boss Camps:",
];

const propertyColors = [
  "rgba(0,0,0,.25)", //bruiser
  "rgba(0,0,0,.25)", //boss
  "rgba(50,5,0,.75)", //haunted mines
  "rgba(255,150,255,.75)", //hanamura
  "rgba( 0, 75, 75,.75)", //towers of doom
  "rgba( 50, 155, 255,.75)", //volskaya
  "rgba( 200, 0, 0,.75)", //dragon shire
  "rgba( 200, 150, 0,.75)", //warhead junction
  "rgba( 255, 125, 0,.75)", //infernal shrines
  "rgba(100, 0, 165,.75)", //cursed hollow
];

const finePrintProperty = `Sacrificed heroes can be recruited again 
for the sacrifice value +10%`;

const displayProperty = (property) => {
  const centerContainer = document.getElementById("gameBoardCenterContainer");
  let cardDetailsContainer = document.getElementById("cardDetailsContainer");
  if (!cardDetailsContainer) {
    cardDetailsContainer = document.createElement("div");
  } else {
    cardDetailsContainer.innerHTML = "";
  }
  cardDetailsContainer.id = "cardDetailsContainer";
  centerContainer.appendChild(cardDetailsContainer);

  centerContainer.style.backgroundImage = `linear-gradient(
    to right,
    rgba(0,0,0,.75),
    rgba(0,0,0,0)),url(${property.banner}`;


  cardDetailsContainer.style.backgroundImage = `linear-gradient(
    to bottom,
    rgba(0,0,0,0),
    rgba(0,0,0,.8) 25%),
    url(${property.groupBanner})`;

  

  const group = createCardLabel("Group", "", property.groupName);
  group.style.backgroundColor = propertyColors[property.group];
  
  const name = createCardLabel("Name", "", property.name);
  const owner = createCardLabel("Owner", "Owner:", property.owner);
  // const description = createCardLabel('Description', '', property.description)
  const cost = createCardLabel("Cost", "Cost:", property.price);
  const rent = createCardLabel("Rent", "Damage:", property.rentRange[0]);

  const houseRent = document.createElement("div");
  houseRent.id = "cardDetailsHouseRent";
  for (let i = 1; i < 6; i++) {
    houseRent.appendChild(
      createCardLabel(
        `HouseRent${i}`,
        towerLabels[i - 1],
        property.rentRange[i]
      )
    );
    houseRent.lastChild.classList.add("cardHouseRentContainer");
    if(i==4){
      let divide = document.createElement("hr");
      houseRent.appendChild(divide);
    }
  }

  const housePrice = createCardLabel(
    "HouseCost",
    "Tower Cost:",
    property.houseCost
  );
  const mortgage = createCardLabel("Mortgage", "Sacrifice:", property.mortgage);
  const finePrint = createCardLabel("FinePrint", "", finePrintProperty);

  cardDetailsContainer.appendChild(group);
  cardDetailsContainer.appendChild(name);
  cardDetailsContainer.appendChild(owner);
  cardDetailsContainer.appendChild(cost);
  cardDetailsContainer.appendChild(rent);
  cardDetailsContainer.appendChild(houseRent);
  cardDetailsContainer.appendChild(housePrice);
  cardDetailsContainer.appendChild(mortgage);
  cardDetailsContainer.appendChild(finePrint);
};

const displayUtility = (property) => {};

const displayRailroad = (property) => {};

const displayChance = (id) => {};

const displayChest = (id) => {};

const displayTax = (id) => {};

const displayCorner = (id) => {};

const displayDetails = (id) => {
  if (id.includes("property")) {
    let space = id.replace("propertySpace", "");
    console.log(space);
    let property = propertyCards.find((card) => {
      console.log(card);
      if (card.space === Number(space)) {
        return card;
      }
    });
    displayProperty(property);
  }

  if (id.includes("chest")) {
    displayChest(id);
  }

  if (id.includes("chance")) {
    displayChance(id);
  }

  if (id.includes("Income") || id.includes("Luxury")) {
    displayTax(id);
  }

  if (
    id.includes("Go") ||
    id.includes("Jail") ||
    id.includes("Parking") ||
    id.includes("To")
  ) {
    displayCorner(id);
  }
};

export default displayDetails;
