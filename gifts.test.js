// const {expect, test} = require("@jest/globals");
const{coaster, resistanceBands, inventory, addToInventory, withinPriceRange, underFive, fiveDollarGifts } = require("./gifts.js");

test("item is under five dollars", () => {
  //given
  let resistanceBands = inventory.get("Three Level Resistance Bands");

  //when
  withinPriceRange(resistanceBands, 5);

  //then
  expect(withinPriceRange(resistanceBands, 5)).toBe(true);
});

// -----------------------------------------------------------------------------
test("item is over five dollars", () => {
  //given
  let lipbalm = inventory.get("Rosebud Salve in Tin");

  //when
  withinPriceRange(lipbalm, 5);

  //then
  expect(withinPriceRange(lipbalm, 5)).toBe(false);
});
// -----------------------------------------------------------------------------
test("function will return an array that contains items under five dollars", () => {


  fiveDollarGifts(inventory);

  expect(fiveDollarGifts(inventory)).toContain({"Beer Mat Coaster Games": coaster}, {"Three Level Resistance Bands": resistanceBands});

})
// -----------------------------------------------------------------------------

//QUESTIONS
//how do you test for side effect functions?
//check that the length increased?

//is this too specific? how do you test for implementation in this case?
// expect(fiveDollarGifts(inventory)).toBe({"Beer Mat Coaster Games": {name: "Beer Mat Coaster Games", price: 3} , "Three Level Resistance Bands": {name: "Three Level Resistance Bands", price: 5}});

// expect(fiveDollarGifts(inventory)).toBe({"Beer Mat Coaster Games" => {name: "Beer Mat Coaster Games", price: 3} , "Three Level Resistance Bands" => {name: "Three Level Resistance Bands", price: 5}});
//how do I represent a map object, even if the result and expect match up, it shows an error because : shows up as =>
//when I type => instead, it says parsing error

//you can't do property names in toBe...?
// expect(fiveDollarGifts(inventory)).toContain({resistanceBands.name: resistanceBands}); //returns parsing error

//what are the terms?
//expect(x).y(z), are there official terms for x,y,z

//you can only do one toBe checks? or can you do multiples and I just don't know how?

// expect(fiveDollarGifts(inventory)).toContain({"Beer Mat Coaster Games": coaster}, {"Three Level Resistance Bands": resistanceBands});
//how come this only shows the coaster as the expected when I have the resistanceBands specified as well?
//because they have to be in a group?
//I put them in an array for the resistanceBands to show up but a map is not an array? so it creates an error
