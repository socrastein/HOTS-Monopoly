import hauntedMines from "../gameDisplay/banners/mines.jpg";
import hanamura from "../gameDisplay/banners/hanamura.jpg";
import towers from "../gameDisplay/banners/towers.jpg";
import volskaya from "../gameDisplay/banners/volskaya.jpg";
import dragonshire from "../gameDisplay/banners/dragon.jpg";
import warhead from "../gameDisplay/banners/warhead.jpg";
import infernal from "../gameDisplay/banners/infernal.jpg";
import cursed from "../gameDisplay/banners/cursed.jpg";

import erik from "../gameDisplay/banners/erik.jpg";
import murky from "../gameDisplay/banners/murky.jpg";
import hanzo from "../gameDisplay/banners/hanzo.jpg";
import genji from "../gameDisplay/banners/genji.jpg";
import dva from "../gameDisplay/banners/dva.jpg";
import sylvanas from "../gameDisplay/banners/sylvanas.jpg";
import arthas from "../gameDisplay/banners/arthas.jpg";
import illidan from "../gameDisplay/banners/illidan.jpg";
import tracer from "../gameDisplay/banners/tracer.jpg";
import mei from "../gameDisplay/banners/mei.jpg";
import zarya from "../gameDisplay/banners/zarya.jpg";
import chromie from "../gameDisplay/banners/chromie.jpg";
import alex from "../gameDisplay/banners/alexstrasza.jpg";
import deathwing from "../gameDisplay/banners/deathwing.jpg";
import raynor from "../gameDisplay/banners/raynor.jpg";
import nova from "../gameDisplay/banners/nova.jpg";
import hammer from "../gameDisplay/banners/hammer.jpg";
import imperius from "../gameDisplay/banners/imperius.jpg";
import valla from "../gameDisplay/banners/valla.jpg";
import diablo from "../gameDisplay/banners/diablo.jpg";
import orphea from "../gameDisplay/banners/orphea.jpg";
import liming from "../gameDisplay/banners/liming.jpg";

const utilityRent = (diceTotal, ownBoth = false) => {
  let multiplier;
  if (ownBoth) {
    multiplier = 10;
  } else multiplier = 4;

  return diceTotal * multiplier;
};

const railroadRent = (numberOwned) => {
  let rent;
  if (numberOwned == 1) rent = 25;
  if (numberOwned == 2) rent = 50;
  if (numberOwned == 3) rent = 100;
  if (numberOwned == 4) rent = 200;
  return rent;
};

const propertyCards = [
  // Rent array index represents:
  // 0 houses
  // 1 house ... with 5 houses representing a hotel
  {//0
    space: 12,
    group: 0,
    groupName: "Bruiser Camp",
    name: "Utility 1",
    owner: "Bank",
    price: 150,
    rent: utilityRent,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//1
    space: 28,
    group: 0,
    groupName: "Bruiser Camp",
    name: "Utility 2",
    owner: "Bank",
    price: 150,
    rent: utilityRent,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//2
    space: 5,
    group: 1,
    groupName: "Boss Camp",
    name: "Rail 1",
    owner: "Bank",
    price: 200,
    rent: railroadRent,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//3
    space: 15,
    group: 1,
    groupName: "Boss Camp",
    name: "Rail 2",
    owner: "Bank",
    price: 200,
    rent: railroadRent,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//4
    space: 25,
    group: 1,
    groupName: "Boss Camp",
    name: "Rail 3",
    owner: "Bank",
    price: 200,
    rent: railroadRent,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//5
    space: 35,
    group: 1,
    groupName: "Boss Camp",
    name: "Rail 4",
    owner: "Bank",
    price: 200,
    rent: railroadRent,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//6
    space: 1,
    group: 2,
    groupName: "Haunted Mines",
    groupBanner: hauntedMines,
    name: "Erik the Red",
    banner: erik,
    owner: "Bank",
    price: 60,
    houses: 0,
    rentRange: [2, 10, 30, 90, 160, 250],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 50,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//7
    space: 3,
    group: 2,
    groupName: "Haunted Mines",
    groupBanner: hauntedMines,
    name: "Murky",
    banner: murky,
    owner: "Bank",
    price: 60,
    houses: 0,
    rentRange: [4, 20, 60, 180, 320, 450],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 50,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//8
    space: 6,
    group: 3,
    groupName: "Hanamura Temple",
    groupBanner: hanamura,
    name: "Hanzo",
    banner: hanzo,
    owner: "Bank",
    price: 100,
    houses: 0,
    rentRange: [6, 30, 90, 270, 400, 550],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 50,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//9
    space: 8,
    group: 3,
    groupName: "Hanamura Temple",
    groupBanner: hanamura,
    name: "Genji",
    banner: genji,
    owner: "Bank",
    price: 100,
    houses: 0,
    rentRange: [6, 30, 90, 270, 400, 550],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 50,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//10
    space: 9,
    group: 3,
    groupName: "Hanamura Temple",
    groupBanner: hanamura,
    name: "D.Va",
    banner: dva,
    owner: "Bank",
    price: 120,
    houses: 0,
    rentRange: [8, 40, 100, 300, 450, 600],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 50,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//11
    space: 11,
    group: 4,
    groupName: "Towers of Doom",
    groupBanner: towers,
    name: "Sylvanas",
    banner: sylvanas,
    owner: "Bank",
    price: 140,
    houses: 0,
    rentRange: [10, 50, 150, 450, 625, 750],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 100,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//12
    space: 13,
    group: 4,
    groupName: "Towers of Doom",
    groupBanner: towers,
    name: "Arthas",
    banner: arthas,
    owner: "Bank",
    price: 140,
    houses: 0,
    rentRange: [10, 50, 150, 450, 625, 750],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 100,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//13
    space: 14,
    group: 4,
    groupName: "Towers of Doom",
    groupBanner: towers,
    name: "Illidan",
    banner: illidan,
    owner: "Bank",
    price: 160,
    houses: 0,
    rentRange: [12, 60, 180, 500, 700, 900],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 100,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//14
    space: 16,
    group: 5,
    groupName: "Volskaya Foundry",
    groupBanner: volskaya,
    name: "Tracer",
    banner: tracer,
    owner: "Bank",
    price: 180,
    houses: 0,
    rentRange: [14, 70, 200, 550, 750, 950],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 100,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//15
    space: 18,
    group: 5,
    groupName: "Volskaya Foundry",
    groupBanner: volskaya,
    name: "Mei",
    banner: mei,
    owner: "Bank",
    price: 180,
    houses: 0,
    rentRange: [14, 70, 200, 550, 750, 950],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 100,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//16
    space: 19,
    group: 5,
    groupName: "Volskaya Foundry",
    groupBanner: volskaya,
    name: "Zarya",
    banner: zarya,
    owner: "Bank",
    price: 200,
    houses: 0,
    rentRange: [16, 80, 220, 600, 800, 1000],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 100,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//17
    space: 21,
    group: 6,
    groupName: "Dragon Shire",
    groupBanner: dragonshire,
    name: "Chromie",
    banner: chromie,
    owner: "Bank",
    price: 220,
    houses: 0,
    rentRange: [18, 90, 250, 700, 875, 1050],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 150,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//18
    space: 23,
    group: 6,
    groupName: "Dragon Shire",
    groupBanner: dragonshire,
    name: "Alexstraza",
    banner: alex,
    owner: "Bank",
    price: 220,
    houses: 0,
    rentRange: [18, 90, 250, 700, 875, 1050],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 150,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//19
    space: 24,
    group: 6,
    groupName: "Dragon Shire",
    groupBanner: dragonshire,
    name: "Deathwing",
    banner: deathwing,
    owner: "Bank",
    price: 240,
    houses: 0,
    rentRange: [20, 100, 300, 750, 925, 1100],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 150,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//20
    space: 26,
    group: 7,
    groupName: "Warhead Junction",
    groupBanner: warhead,
    name: "Raynor",
    banner: raynor,
    owner: "Bank",
    price: 260,
    houses: 150,
    rentRange: [22, 110, 330, 800, 975, 1150],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 150,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//21
    space: 27,
    group: 7,
    groupName: "Warhead Junction",
    groupBanner: warhead,
    name: "Nova",
    banner: nova,
    owner: "Bank",
    price: 260,
    houses: 150,
    rentRange: [22, 110, 330, 800, 975, 1150],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 150,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//22
    space: 29,
    group: 7,
    groupName: "Warhead Junction",
    groupBanner: warhead,
    name: "Sgt. Hammer",
    banner: hammer,
    owner: "Bank",
    price: 280,
    houses: 150,
    rentRange: [24, 120, 360, 850, 1025, 1200],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 150,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//23
    space: 31,
    group: 8,
    groupName: "Infernal Shrines",
    groupBanner: infernal,
    name: "Imperius",
    banner: imperius,
    owner: "Bank",
    price: 300,
    houses: 0,
    rentRange: [0, 0, 0, 0, 0, 0],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 200,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//24
    space: 32,
    group: 8,
    groupName: "Infernal Shrines",
    groupBanner: infernal,
    name: "Valla",
    banner: valla,
    owner: "Bank",
    price: 300,
    houses: 0,
    rentRange: [26, 130, 390, 900, 1100, 1275],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 200,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//25
    space: 34,
    group: 8,
    groupName: "Infernal Shrines",
    groupBanner: infernal,
    name: "Diablo",
    banner: diablo,
    owner: "Bank",
    price: 320,
    houses: 0,
    rentRange: [28, 150, 450, 1000, 1200, 1400],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 200,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//26
    space: 37,
    group: 9,
    groupName: "Cursed Hollow",
    groupBanner: cursed,
    name: "Orphea",
    banner: orphea,
    owner: "Bank",
    price: 350,
    houses: 0,
    rentRange: [35, 175, 500, 1100, 1300, 1500],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 200,
    get mortgage() {
      return this.price / 2;
    },
  },
  {//27
    space: 39,
    group: 9,
    groupName: "Cursed Hollow",
    groupBanner: cursed,
    name: "Li-Ming",
    banner: liming,
    owner: "Bank",
    price: 400,
    houses: 0,
    rentRange: [50, 200, 600, 1400, 1700, 2000],
    get rent() {
      return this.rentRange[houses];
    },
    houseCost: 200,
    get mortgage() {
      return this.price / 2;
    },
  },
];

export default propertyCards;
