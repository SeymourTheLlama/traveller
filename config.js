var biomes = [
  {
    type: "desert",
    possible_names: ["the Sahara", "the Hot Place"]
  },
  {
    type: "plains",
    possible_names: ["faction_name Fields", "Fields of Thunder"]
  },
  {
    type: "hilly",
    possible_names: ["the Red Hills", "The Far-Off Hilly Place"]
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
    biome_location: 1
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
    biome_location: 1
  }
];

var location_events = [
  {
    name: "save_cat",
    type: "location",
    intro: "A friendly looking farmer walks up to you as you are passing along. 'Excuse me, good sir!' he cries. 'My cat cat_name got scared into the tree by the neighbors' llama. Do you think you could get cat_gender_direct_object down for me?",
    intro_choice: ["Absolutely!", "No way!"],
    compatible_biomes: ["farmland", "rural"]
  },
  {
    name: "have_dinner_nice",
    type: "location",
    prereq_attributes: ["hunger" > 2, "food" < 0]
    compatible_biomes: ["urban", "rural", "farmland"]
    intro: "Running out of food. Looks like a nearby house might be able to feed you. Should you check?"
  }
  
];
