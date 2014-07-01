var biomes = [
  {
    type: "desert",
    possible_names: ["the Sahara", "the Hot Place"]
  },
  {
    type: "plains"
  },
  {
    type: "hilly"
  }
];

var locations = [
  {
    type: "lake",
    possible_names: ["Lake Trasimere", "Mirror Lake", "Lake 'o Bacon"],
    incompatible_biomes: ["desert", "fungal"]
  },
  {
    type: "city",
    possible_names: ["Boston", "Taris", "Aes Sedai", "Elvisville"],
    incompatible_biomes: ["glacier"]
  },
  {
    type: "river",
    possible_names: ["Anduin", "Swiggle River"],
    incompatible_biomes: ["glacier", "desert"]
  },
  {
    type: "capital_city",
    possible_names: ["name_of_nation City", "Bacon City", "Smile City"],
    compatible_biomes: ["hilly", "plains", "grasslands"]
  }
];
