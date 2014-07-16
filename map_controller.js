var biomes = ["Mountains", "Forest", "Plains", "Hilly Regions", "Ocean", "Desert", "Miasmic Foregrounds", "City", "Urban", "Rural", "Farmland", "Goblin Fortress"];
var num_rows = 10;
var num_columns = 10;
var map = [];

for (i = 0; i < num_rows; i++) {
 for (j = 0; j < num_columns; j++) {
    if (typeof map[i] != 'object')
        map[i] = []
   map[i][j] = biomes[Math.floor(Math.random() * biomes.length)] + " ";
 }
}
console.dir(map);

for i in biomes while i <= biomes.length {
  map(i) = biomes(random);
  i += 1
