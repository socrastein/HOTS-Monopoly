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
};


const propertyCards = [
  // Rent array index represents: 
  // 0 houses
  // 1 house ... with 5 houses representing a hotel
  {
    group: 0,
    groupName: "Utilities",
    name: "Utility 1",
    owner: "Bank",
    price: 150,
    rent: utilityRent,
    mortgage: price / 2,
  },
  {
    group: 0,
    groupName: "Utilities",
    name: "Utility 2",
    owner: "Bank",
    price: 150,
    rent: utilityRent,
    mortgage: price / 2,
  },
  {
    group: 1,
    groupName: "Railroads",
    name: "Rail 1",
    owner: "Bank",
    price: 200,
    rent: railroadRent,
    mortgage: price / 2,
  },
  {
    group: 1,
    groupName: "Railroads",
    name: "Rail 2",
    owner: "Bank",
    price: 200,
    rent: railroadRent,
    mortgage: price / 2,
  },
  {
    group: 1,
    groupName: "RailRoads",
    name: "Rail 3",
    owner: "Bank",
    price: 200,
    rent: railroadRent,
    mortgage: price / 2,
  },
  {
    group: 1,
    groupName: "RailRoads",
    name: "Rail 4",
    owner: "Bank",
    price: 200,
    rent: railroadRent,
    mortgage: price / 2,
  },
  {
    group: 2,
    groupName: "Group 1",
    name: "Property 1:1",
    owner: "Bank",
    price: 60,
    houses: 0,
    rentRange: [2, 10, 30, 90, 160, 250],
    rent: rentRange[houses],
    houseCost: 50,
    mortgage: price / 2,
  },
  {
    group: 2,
    groupName: "Group 1",
    name: "Property 1:2",
    owner: "Bank",
    price: 60,
    houses: 0,
    rentRange: [4, 20, 60, 180, 320, 450],
    rent: rentRange[houses],
    houseCost: 50,
    mortgage: price / 2,
  },
  {
    group: 3,
    groupName: "Group 2",
    name: "Property 2:1",
    owner: "Bank",
    price: 100,
    houses: 0,
    rentRange: [6, 30, 90, 270, 400, 550],
    rent: rentRange[houses],
    houseCost: 50,
    mortgage: price / 2,
  },
  {
    group: 3,
    groupName: "Group 2",
    name: "Property 2:2",
    owner: "Bank",
    price: 100,
    houses: 0,
    rentRange: [6, 30, 90, 270, 400, 550],
    rent: rentRange[houses],
    houseCost: 50,
    mortgage: price / 2,
  },
  {
    group: 3,
    groupName: "Group 2",
    name: "Property 2:3",
    owner: "Bank",
    price: 120,
    houses: 0,
    rentRange: [8, 40, 100, 300, 450, 600],
    rent: rentRange[houses],
    houseCost: 50,
    mortgage: price / 2,
  },
  {
    group: 4,
    groupName: "Group 3",
    name: "Property 3:1",
    owner: "Bank",
    price: 140,
    houses: 0,
    rentRange: [10, 50, 150, 450, 625, 750],
    rent: rentRange[houses],
    houseCost: 100,
    mortgage: price / 2,
  },
  {
    group: 4,
    groupName: "Group 3",
    name: "Property 3:2",
    owner: "Bank",
    price: 140,
    houses: 0,
    rentRange: [10, 50, 150, 450, 625, 750],
    rent: rentRange[houses],
    houseCost: 100,
    mortgage: price / 2,
  },
  {
    group: 4,
    groupName: "Group 3",
    name: "Property 3:3",
    owner: "Bank",
    price: 160,
    houses: 0,
    rentRange: [12, 60, 180, 500, 700, 900],
    rent: rentRange[houses],
    houseCost: 100,
    mortgage: price / 2,
  },
  {
    group: 5,
    groupName: "Group 4",
    name: "Property 4:1",
    owner: "Bank",
    price: 180,
    houses: 0,
    rentRange: [14, 70, 200, 550, 750, 950],
    rent: rentRange[houses],
    houseCost: 100,
    mortgage: price / 2,
  },
  {
    group: 5,
    groupName: "Group 4",
    name: "Property 4:2",
    owner: "Bank",
    price: 180,
    houses: 0,
    rentRange: [14, 70, 200, 550, 750, 950],
    rent: rentRange[houses],
    houseCost: 100,
    mortgage: price / 2,
  },
  {
    group: 5,
    groupName: "Group 4",
    name: "Property 4:3",
    owner: "Bank",
    price: 200,
    houses: 0,
    rentRange: [16, 80, 220, 600, 800, 1000],
    rent: rentRange[houses],
    houseCost: 100,
    mortgage: price / 2,
  },
  {
    group: 6,
    groupName: "Group 5",
    name: "Property 5:1",
    owner: "Bank",
    price: 220,
    houses: 0,
    rentRange: [18, 90, 250, 700, 875, 1050],
    rent: rentRange[houses],
    houseCost: 150,
    mortgage: price / 2,
  },
  {
    group: 6,
    groupName: "Group 5",
    name: "Property 5:2",
    owner: "Bank",
    price: 220,
    houses: 0,
    rentRange: [18, 90, 250, 700, 875, 1050],
    rent: rentRange[houses],
    houseCost: 150,
    mortgage: price / 2,
  },
  {
    group: 6,
    groupName: "Group 5",
    name: "Property 5:3",
    owner: "Bank",
    price: 240,
    houses: 0,
    rentRange: [20, 100, 300, 750, 925, 1100],
    rent: rentRange[houses],
    houseCost: 150,
    mortgage: price / 2,
  },
  {
    group: 7,
    groupName: "Group 6",
    name: "Property 6:1",
    owner: "Bank",
    price: 260,
    houses: 150,
    rentRange: [22, 110, 330, 800, 975, 1150],
    rent: rentRange[houses],
    houseCost: 150,
    mortgage: price / 2,
  },
  {
    group: 7,
    groupName: "Group 6",
    name: "Property 6:2",
    owner: "Bank",
    price: 260,
    houses: 150,
    rent: [22, 110, 330, 800, 975, 1150],
    rent: rentRange[houses],
    houseCost: 150,
    mortgage: price / 2,
  },
  {
    group: 7,
    groupName: "Group 6",
    name: "Property 6:3",
    owner: "Bank",
    price: 280,
    houses: 150,
    rentRange: [24, 120, 360, 850, 1025, 1200],
    rent: rentRange[houses],
    houseCost: 150,
    mortgage: price / 2,
  },
  {
    group: 8,
    groupName: "Group 7",
    name: "Property 7:1",
    owner: "Bank",
    price: 300,
    houses: 0,
    rentRange: [0, 0, 0, 0, 0, 0],
    rent: rentRange[houses],
    houseCost: 200,
    mortgage: price / 2,
  },
  {
    group: 8,
    groupName: "Group 7",
    name: "Property 7:2",
    owner: "Bank",
    price: 300,
    houses: 0,
    rentRange: [26, 130, 390, 900, 1100, 1275],
    rent: rentRange[houses],
    houseCost: 200,
    mortgage: price / 2,
  },
  {
    group: 8,
    groupName: "Group 7",
    name: "Property 7:3",
    owner: "Bank",
    price: 320,
    houses: 0,
    rentRange: [28, 150, 450, 1000, 1200, 1400],
    rent: rentRange[houses],
    houseCost: 200,
    mortgage: price / 2,
  },
  {
    group: 9,
    groupName: "Group 8",
    name: "Property 8:1",
    owner: "Bank",
    price: 350,
    houses: 0,
    rentRange: [35, 175, 500, 1100, 1300, 1500],
    rent: rentRange[houses],
    houseCost: 0,
    mortgage: price / 2,
  },
  {
    group: 9,
    groupName: "Group 8",
    name: "Property 8:2",
    owner: "Bank",
    price: 400,
    houses: 0,
    rentRange: [50, 200, 600, 1400, 1700, 2000],
    rent: rentRange[houses],
    houseCost: 0,
    mortgage: price / 2,
  },
];

export default propertyCards;