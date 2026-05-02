// data.js
const taxonomy = {
  name: "Vertebrates",
  children: [
//=====================================
    {
      name: "Amphibians",
      id_a: "1",
      children: [
        {
          name: "Frogs and Toads",
          id_a: "1",
          id_b: "1",
          children: [
            { name: "Hylid Tree Frogs", id_a: "1", id_b: "1", id_c: "1" }, 
            { name: "North American Spadefoots", id_a: "1", id_b: "1", id_c: "2" }, 
            { name: "True Toads", id_a: "1", id_b: "1", id_c: "3" }, 
            { name: "Typical Frogs", id_a: "1", id_b: "1", id_c: "4" } 
          ]
        },
        {
          name: "Salamanders",
          id_a: "1",
          id_b: "2",
          children: [
            { name: "Lungless Salamanders", id_a: "1", id_b: "2", id_c: "5" }, 
            { name: "Mole Salamanders", id_a: "1", id_b: "2", id_c: "6" }, 
            { name: "True Salamanders and Newts", id_a: "1", id_b: "2", id_c: "7" } 
          ]
        }
      ]
    },
//=====================================
    {
      name: "Birds",
      id_a: "2",
      children: [
        {
          name: "Cranes, Rails, and Allies",
          children: [
            { name: "Cranes" },
            { name: "Rails, Gallinules, and Coots" }
          ]
        },
        {
          name: "Cuckoos",
          children: [
            { name: "Cuckoos" }
          ]
        },
        {
          name: "Falcons and Caracaras",
          children: [
            { name: "Falcons and Caracaras" }
          ]
        },
        {
          name: "Flamingos",
          children: [
            { name: "Flamingos" }
          ]
        },
        {
          name: "Gannets, Cormorants, and Allies",
          children: [
            { name: "Boobies and Gannets" },
            { name: "Cormorants and Shags" },
            { name: "Frigatebirds" }
          ]
        },
        {
          name: "Grebes",
          children: [
            { name: "Grebes" }
          ]
        },
        {
          name: "Hawks, Eagles, Kites, and Allies",
          children: [
            { name: "Hawks, Eagles, and Kites" },
            { name: "Ospreys" }
          ]
        },
        {
          name: "Landfowl",
          children: [
            { name: "New World Quails" },
            { name: "Pheasants, Grouse, and Allies" }
          ]
        },
        {
          name: "Loons",
          children: [
            { name: "Loons" }
          ]
        },
        {
          name: "New World Vultures",
          children: [
            { name: "New World Vultures" }
          ]
        },
        {
          name: "Nightjars and Allies",
          children: [
            { name: "Nightjars and Allies" }
          ]
        },
        {
          name: "Owls",
          children: [
            { name: "Typical Owls" }
          ]
        },
        {
          name: "Parrots",
          children: [
            { name: "Old World Parrots" }
          ]
        },
        {
          name: "Pelicans, Herons, and Allies",
          children: [
            { name: "Herons, Egrets, and Bitterns" },
            { name: "Ibises and Spoonbills" },
            { name: "Pelicans" }
          ]
        },
        {
          name: "Perching Birds",
          children: [
            { name: "Cardinals and Allies" },
            { name: "Crows, Jays, and Magpies" },
            { name: "Dippers" },
            { name: "Finches, Euphonias, and Allies" },
            { name: "Gnatcatchers and Gnatwrens" },
            { name: "Larks" },
            { name: "Long-tailed Tits and Bushtits" },
            { name: "Mockingbirds and Thrashers" },
            { name: "New World Blackbirds and Orioles" },
            { name: "New World Sparrows" },
            { name: "New World Warblers" },
            { name: "Nuthatches" },
            { name: "Old World Flycatchers, Robins, and Chats" },
            { name: "Old World Sparrows" },
            { name: "Ovenbirds and Woodcreepers" },
            { name: "Starlings" },
            { name: "Swallows and Martins" },
            { name: "Tanagers and Allies" },
            { name: "Thrushes" },
            { name: "Tits, Chickadees, and Titmice" },
            { name: "Treecreepers" },
            { name: "Tyrant Flycatchers" },
            { name: "Wagtails and Pipits" },
            { name: "Wrens" }
          ]
        },
        {
          name: "Pigeons and Doves",
          children: [
            { name: "Pigeons and Doves" }
          ]
        },
        {
          name: "Rollers, Kingfishers, and Allies",
          children: [
            { name: "Kingfishers" }
          ]
        },
        {
          name: "Shorebirds and Allies",
          children: [
            { name: "Gulls, Terns, and Skimmers" },
            { name: "Plovers and Lapwings" },
            { name: "Sandpipers and Allies" },
            { name: "Stilts and Avocets" }
          ]
        },
        {
          name: "Swifts and Hummingbirds",
          children: [
            { name: "Hummingbirds" }
          ]
        },
        {
          name: "Waterfowl",
          children: [
            { name: "Ducks, Geese, and Swans" }
          ]
        },
        {
          name: "Woodpeckers and Allies",
          children: [
            { name: "Woodpeckers" }
          ]
        }
      ]
    },
//=====================================
    {
      name: "Mammals",
      id_a: "3",
      children: [
        {
          name: "Bats",
          children: [
            { name: "Evening Bats" }
          ]
        },
        {
          name: "Carnivorans",
          children: [
            { name: "Bears" },
            { name: "Canids" },
            { name: "Earless Seals" },
            { name: "Eared Seals" },
            { name: "Felids" },
            { name: "Mustelids" },
            { name: "Raccoons, Coatis, and Allies" }
          ]
        },
        {
          name: "Even-toed Ungulates and Cetaceans",
          children: [
            { name: "Bovids" },
            { name: "Deer" },
            { name: "Pronghorns" }
          ]
        },
        {
          name: "Lagomorphs",
          children: [
            { name: "Hares and Rabbits" },
            { name: "Pikas" }
          ]
        },
        {
          name: "Odd-toed Ungulates",
          children: [
            { name: "Equines" }
          ]
        },
        {
          name: "Opossums",
          children: [
            { name: "Opossums" }
          ]
        },
        {
          name: "Rodents",
          children: [
            { name: "Beavers" },
            { name: "Hamsters, Voles, Lemmings and Allies" },
            { name: "Kangaroo Rats and Pocket Mice" },
            { name: "Old World Mice and Rats" },
            { name: "Squirrels" }
          ]
        }
      ]
    },
//=====================================
    {
      name: "Reptiles",
      id_a: "4",
      children: [
        {
          name: "Crocodilians",
          children: [
            { name: "Alligators and Caimans" }
          ]
        },
        {
          name: "Lizards",
          children: [
            { name: "Anoles" },
            { name: "Collared Lizards" },
            { name: "Iguanas and Chuckwallas" },
            { name: "Neotropical Ground Lizards" },
            { name: "Phrynosomatid Lizards" },
            { name: "Typical Geckos" },
            { name: "Wall Lizards" },
            { name: "Whiptails and Tegus" }
          ]
        },
        {
          name: "Snakes",
          children: [
            { name: "Colubrid Snakes" },
            { name: "Vipers" }
          ]
        },
        {
          name: "Turtles",
          children: [
            { name: "American Mud and Musk Turtles" },
            { name: "Pond and Box Turtles" },
            { name: "Snapping Turtles" },
            { name: "Tortoises" },
            { name: "Typical Sea Turtles" }
          ]
        }
      ]
    }
//=====================================
  ]
};