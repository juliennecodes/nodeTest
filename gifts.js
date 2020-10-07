class Gift {
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
}

let lipbalm = new Gift("Rosebud Salve in Tin", 9);
let coaster = new Gift("Beer Mat Coaster Games", 3);
let resistanceBands = new Gift("Three Level Resistance Bands", 5);
let cup = new Gift("Monogram Cup", 6);
let strawberryKit = new Gift("Ecocube Strawberry Grow Kit", 10);
let magnets = new Gift("Scrabble Magnet Set", 12);
let notebook = new Gift("Leuchtturm Bullet Journal A5", 24);
let wallet = new Gift("Love and Lore Wallet", 18);
// -----------------------------------------------------------------------------
let inventory = new Map();

function addToInventory(item){
  return inventory.set(item.name, item);
}

addToInventory(lipbalm);
addToInventory(coaster);
addToInventory(resistanceBands);
addToInventory(cup);
addToInventory(strawberryKit);
addToInventory(magnets);
addToInventory(notebook);
addToInventory(wallet);
// -----------------------------------------------------------------------------
function withinPriceRange(item, price){
  return  item.price <= price;
}

function underFive([itemName, item]){
  return item.price <= 5;
}

function fiveDollarGifts(items){
  let gifts = new Map();

  for (const [key, value] of items){
    if(underFive([key, value])) {
      gifts.set(key, value);
    }
  }

  return gifts;
}

module.exports = {coaster, resistanceBands, inventory, addToInventory, withinPriceRange, underFive, fiveDollarGifts };

//QUESTIONS
//doesn't work because filter is exclusively for array?
// return inventory.filter(item => underFive(item));

//why does [key, value] work and not item - referring to item of items
// for (let item of items){
//   if(underFive(item)){
//     gifts.set(item.name, item);
//   }
// }
//VS
// for (const [key, value] of items){
//    if(underFive([key, value])) {
//      gifts.set(key, value)
//    }
//  }

//why doesn't Object.entries work on map objects
//Object.entries(invetory) returns []
