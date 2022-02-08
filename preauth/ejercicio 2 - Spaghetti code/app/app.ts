import {GildedRose, Item} from "./gilded-rose";

let item : Item = new Item('Aged Brie',10,10);
let items = [] as Array<Item>;
items.push(item);
let gildedRose : GildedRose = new GildedRose(items);
items = gildedRose.updateQuality();
console.log(items);