const fs = require(`fs`)

fs.copyFileSync(`file1.txt`,`file3.txt`)

const superheroes = require('superheroes');

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

let superheroName = superheroes.random();
console.log(superheroName);
//=> 'Spider-Ham'

const supervillains = require('supervillains');

let superVillainName = supervillains.random();
console.log(superVillainName);