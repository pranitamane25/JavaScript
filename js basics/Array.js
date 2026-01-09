// Objects and Arrays

//Create an Object weapon

let weapon={ name: "Sword",
  damage: 50,
  type: "Melee"
};
//access objects
console.log(weapon.name);
console.log(weapon.damage);
console.log(weapon.type);

//Create an Array inventory & Push Items

let inventory = []
inventory.push("position");
inventory.push("scroll");
inventory.push("ring");

console.log("weapon details :");
console.log(weapon.name,weapon.damage,weapon.type);

console.log("inventory iteams:");


for(let item of inventory){
    console.log(item);
}