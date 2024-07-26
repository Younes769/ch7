let randomizer = Math.floor(Math.random() * 4);

if (randomizer === 0) {
    console.log("Your fate is: A certain victory");
} else if (randomizer === 1) {
    console.log("Your fate is: Not so certain victory");
} else if (randomizer === 2) {
    console.log("Your fate is: An uneasy victory");
} else {
    console.log("Your fate is unclear, ô chosen undead");
}