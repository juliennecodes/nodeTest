// const {expect, test} = require("@jest/globals");
const{inventory, addToInventory, underFive, fiveDollarGifts } = require("./gifts.js");

// test("item is added to inventory", () =>{
//   //given
//   let lipbalm = inventory.get("Rosebud Salve in Tin");
//
//   //when
//   addToInventory.set(lipbalm);
//
//   //then
//   //how do you test for side effect functions?
//   //check that the length increased?
//   expect(addToInventory.set(lipbalm)).toBe
//
// });

// test("item is under five dollars", () => {
//   //given
//   let resistanceBands = inventory.get("Three Level Resistance Bands");
//
//   //when
//   underFive(resistanceBands);
//
//   //then
//   expect(underFive(resistanceBands)).toBe(true);
//
// });
//
// test("item is over five dollars", () => {
//   //given
//   let lipbalm = inventory.get("Rosebud Salve in Tin");
//
//   //when
//   underFive(lipbalm);
//
//   //then
//   expect(underFive(lipbalm)).toBe(false);
//
// });

test("get all items under five dollars", ()=> {
  //given
  //inventory

  //when
  fiveDollarGifts(inventory);

  //then
  //is this too specific? how do you test for implementation?
  expect(fiveDollarGifts(inventory)).toBe({"Beer Mat Coaster Games": {name: "Beer Mat Coaster Games", price: 3} , "Three Level Resistance Bands": {name: "Three Level Resistance Bands", price: 5}});
    // expect(fiveDollarGifts(inventory)).toBe({"Beer Mat Coaster Games" => {name: "Beer Mat Coaster Games", price: 3} , "Three Level Resistance Bands" => {name: "Three Level Resistance Bands", price: 5}});
    //this was what was expected but it says parsing error?

})
