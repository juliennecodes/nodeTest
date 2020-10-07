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

let inventory = new Map();
// inventory.set(lipbalm.name, lipbalm);

//to get the object
// inventory.get(lipbalm.name);

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

// function underFive(item){
//   return item.price <= 5;
// }

function underFive([name, item]){
  return item.price <= 5;
}

function underTen(item){
  return item.price <= 10;
}

function underFifteen(item){
  return item.price <= 15;
}

function underTwentyFive(item){
  return item.price <= 25;
}

function fiveDollarGifts(items){
  let gifts = new Map();

  //doesn't work because filter is exclusively for array?
  // return inventory.filter(item => underFive(item));

  //doesn't work because map isn't iterable?
  // for (let item of items){
  //   if(underFive(item)){
  //     return gifts.set(item.name, item);
  //   }
  // }


  // for (const [key, value] of Object.entries(items)){
  //   //why doesn't Object.entries work
  //   console.log(`${key}`);
  //   return gifts.set(key, value);
  //   ERROR - returning inside a loop ends all the function not just the local loop iteration scope
  // }

  for (const [key, value] of items){
    //why does [key, value] work and not item - referring to item of items
    if(underFive([key, value])) {
      gifts.set(key, value)
    }
  }

  return gifts;
}

module.exports = {inventory, underFive, fiveDollarGifts};
//ERROR LOGS
//forgot to export the function and it resulted in the test module not having access to it
//I typed module.export instead of module.exports
