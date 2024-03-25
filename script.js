const generateRamdonNumber = num => {
    return Math.floor(Math.random() * num)
};
const dragonName = {
    name: ['Red', 'White', 'Blue', 'Green', 'Yellow', 'Platinum', 'Fire', 'Bright', 'Gold', 'Silver', 'Diamond', 'Aqua', 'Sapphire', 'Pearl', 'Opal', 'Lightning', 'Venom', 'Grey', 'Magic', 'Burning', 'Rainbow', 'Wind', 'Purple', 'Ebon', 'Rust', 'Zombie'],
    highlight: ['Wing', 'Claw', 'Eyes', 'Fangs', 'Tail', 'Scale', 'Horn', 'Scar', 'Flame', 'Heart', 'Wyrm', 'Blade'],
    fame: ['Fierce', 'Eternal', 'Swift', 'Hungry', 'Rapacious', 'Vengeful', 'Hunted', 'Voracious', 'Enlightened', 'Magnificent', 'Hunter', 'Proud', 'Elder', 'Benevolent', 'Restless', 'Rampart', 'Gallant', 'Cruel', 'Regal', 'Radiant', 'Malicious', 'Pompous', 'Deceitful', 'Dire', 'Hateful', 'Warrior']
};
let userDragon = [];
const assemble = (arr) => {
    arr.push(dragonName.name[generateRamdonNumber(dragonName.name.length)]);
    arr.push(dragonName.highlight[generateRamdonNumber(dragonName.highlight.length)]);
    arr.push('The');
    arr.push(dragonName.fame[generateRamdonNumber(dragonName.fame.length)]);
    return arr
};
assemble(userDragon);
console.log(userDragon.join(' '));
//console.log(generateRamdonNumber(5));
