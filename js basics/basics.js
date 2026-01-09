//reusable function(spellname)

function castSpell(spellName) {
  console.log("Casting " + spellName);
}
//arrow function
let cast = (spellName) => console.log("Casting " + spellName);

castSpell("Fireball");
cast("pranita");

//let,var,const
var heroName = "Aria";
let heroLevel = 5;
const heroHealth = 100;

console.log(heroName, heroLevel, heroHealth);

let level=10;
console.log(level,typeof level);

let spell = "Fireball"; 
console.log(spell,typeof spell);

let isAlive = true;
console.log(isAlive,typeof isAlive);

let inventory = ["potion", "scroll"];
console.log(inventory,typeof inventory);

let hero = { name: "Aria", class: "Mage" };
console.log(hero,typeof hero);

//arithmetic operator

let attack1=30;
let attack2=20;
let attack3=50;

let totalDamage=attack1 + attack2 + attack3;
console.log("Total Damage", + totalDamage);
 
//Logical Operators

let mana = 50;
let spellCost = 30;
let isPositive = true;

let canCastSpell=(mana>spellCost) && isPositive;
console.log("can cast spell", canCastSpell);

//comparison operator

let HeroLevel = 10;
let enemyLevel = 12;

console.log(HeroLevel > enemyLevel);   
console.log(HeroLevel < enemyLevel);   
console.log(HeroLevel == enemyLevel);  

//if–else: Check Hero Health

let health=50;
if(health>0){
console.log("Alive");
}
else{
  console.log("Defeated");
}

//for Loop: Simulate 5 Rounds of Attack
//Run attack 5 times

for(let round=1;round<=5;round++){
  console.log("Attack Round", +round);
}

//Try a while loop that continues until mana is 0.

let Mana=50;
let SpellCost=10;

while(Mana>0){
  console.log("casting spell.mana Left", Mana);
  Mana = Mana-SpellCost;
}

console.log("Out of Mana");