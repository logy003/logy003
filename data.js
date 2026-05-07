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
          id_a: "2",
          id_b: "3",
          children: [
            { name: "Cranes", id_a: "2", id_b: "3", id_c: "8" },
            { name: "Rails, Gallinules, and Coots", id_a: "2", id_b: "3", id_c: "9" }
          ]
        },
        {
          name: "Cuckoos",
          id_a: "2",
          id_b: "4",
          children: [
            { name: "Cuckoos", id_a: "2", id_b: "4", id_c: "10" }
          ]
        },
        {
          name: "Falcons and Caracaras",
          id_a: "2",
          id_b: "5",
          children: [
            { name: "Falcons and Caracaras", id_a: "2", id_b: "5", id_c: "11" }
          ]
        },
        {
          name: "Flamingos",
            id_a: "2",
            id_b: "6",
          children: [
            { name: "Flamingos", id_a: "2", id_b: "6", id_c: "12" }
          ]
        },
        {
          name: "Gannets, Cormorants, and Allies",
            id_a: "2",
            id_b: "7",
          children: [
            { name: "Boobies and Gannets", id_a: "2", id_b: "7", id_c: "13" },
            { name: "Cormorants and Shags", id_a: "2", id_b: "7", id_c: "14" },
            { name: "Frigatebirds", id_a: "2", id_b: "7", id_c: "15" }
          ]
        },
        {
          name: "Grebes",
            id_a: "2",
            id_b: "8",
          children: [
            { name: "Grebes", id_a: "2", id_b: "8", id_c: "16" }
          ]
        },
        {
          name: "Hawks, Eagles, Kites, and Allies",
            id_a: "2",
            id_b: "9",
          children: [
            { name: "Hawks, Eagles, and Kites", id_a: "2", id_b: "9", id_c: "17" },
            { name: "Ospreys", id_a: "2", id_b: "9", id_c: "18" }
          ]
        },
        {
          name: "Landfowl",
            id_a: "2",
            id_b: "10",
          children: [
            { name: "New World Quails", id_a: "2", id_b: "10", id_c: "19" },
            { name: "Pheasants, Grouse, and Allies", id_a: "2", id_b: "10", id_c: "20" }
          ]
        },
        {
          name: "Loons",
          id_a: "2",
          id_b: "11",
          children: [
            { name: "Loons", id_a: "2", id_b: "11", id_c: "21" }
          ]
        },
        {
          name: "New World Vultures",
              id_a: "2",
              id_b: "12",
          children: [
            { name: "New World Vultures", id_a: "2", id_b: "12", id_c: "22" }
          ]
        },
        {
          name: "Nightjars and Allies",
            id_a: "2",
            id_b: "13",
          children: [
            { name: "Nightjars and Allies", id_a: "2", id_b: "13", id_c: "23" }
          ]
        },
        {
          name: "Owls",
            id_a: "2",
            id_b: "14",
          children: [
            { name: "Typical Owls", id_a: "2", id_b: "14", id_c: "24" }
          ]
        },
        {
          name: "Parrots",
            id_a: "2",
            id_b: "15",
          children: [
            { name: "Old World Parrots", id_a: "2", id_b: "15", id_c: "25" }
          ]
        },
        {
          name: "Pelicans, Herons, and Allies",
            id_a: "2",
            id_b: "16",
          children: [
            { name: "Herons, Egrets, and Bitterns", id_a: "2", id_b: "16", id_c: "26" },
            { name: "Ibises and Spoonbills", id_a: "2", id_b: "16", id_c: "27" },
            { name: "Pelicans", id_a: "2", id_b: "16", id_c: "28" }
          ]
        },
        {
          name: "Perching Birds",
            id_a: "2",
            id_b: "17",
          children: [
            { name: "Cardinals and Allies", id_a: "2", id_b: "17", id_c: "29" },
            { name: "Crows, Jays, and Magpies", id_a: "2", id_b: "17", id_c: "30" },
            { name: "Dippers", id_a: "2", id_b: "17", id_c: "31" },
            { name: "Finches, Euphonias, and Allies", id_a: "2", id_b: "17", id_c: "32" },
            { name: "Gnatcatchers and Gnatwrens", id_a: "2", id_b: "17", id_c: "33" },
            { name: "Larks", id_a: "2", id_b: "17", id_c: "34" },
            { name: "Long-tailed Tits and Bushtits", id_a: "2", id_b: "17", id_c: "35" },
            { name: "Mockingbirds and Thrashers", id_a: "2", id_b: "17", id_c: "36" },
            { name: "New World Blackbirds and Orioles", id_a: "2", id_b: "17", id_c: "37" },
            { name: "New World Sparrows", id_a: "2", id_b: "17", id_c: "38" },
            { name: "New World Warblers", id_a: "2", id_b: "17", id_c: "39" },
            { name: "Nuthatches", id_a: "2", id_b: "17", id_c: "40" },
            { name: "Old World Flycatchers, Robins, and Chats", id_a: "2", id_b: "17", id_c: "41" },
            { name: "Old World Sparrows", id_a: "2", id_b: "17", id_c: "42" },
            { name: "Ovenbirds and Woodcreepers", id_a: "2", id_b: "17", id_c: "43" },
            { name: "Starlings", id_a: "2", id_b: "17", id_c: "44" },
            { name: "Swallows and Martins", id_a: "2", id_b: "17", id_c: "45" },
            { name: "Tanagers and Allies", id_a: "2", id_b: "17", id_c: "46" },
            { name: "Thrushes", id_a: "2", id_b: "17", id_c: "47" },
            { name: "Tits, Chickadees, and Titmice", id_a: "2", id_b: "17", id_c: "48" },
            { name: "Treecreepers", id_a: "2", id_b: "17", id_c: "49" },
            { name: "Tyrant Flycatchers", id_a: "2", id_b: "17", id_c: "50" },
            { name: "Wagtails and Pipits", id_a: "2", id_b: "17", id_c: "51" },
            { name: "Wrens", id_a: "2", id_b: "17", id_c: "52" }

          ]
        },
        {
          name: "Pigeons and Doves",
            id_a: "2",
            id_b: "18",
          children: [
            { name: "Pigeons and Doves", id_a: "2", id_b: "18", id_c: "53" }
          ]
        },
        {
          name: "Rollers, Kingfishers, and Allies",
            id_a: "2",
            id_b: "19",
          children: [
            { name: "Kingfishers", id_a: "2", id_b: "19", id_c: "54" }
          ]
        },
        {
          name: "Shorebirds and Allies",
            id_a: "2",
            id_b: "20",
          children: [
            { name: "Gulls, Terns, and Skimmers", id_a: "2", id_b: "20", id_c: "55" },
            { name: "Plovers and Lapwings", id_a: "2", id_b: "20", id_c: "56" },
            { name: "Sandpipers and Allies", id_a: "2", id_b: "20", id_c: "57" },
            { name: "Stilts and Avocets", id_a: "2", id_b: "20", id_c: "58" }
          ]
        },
        {
          name: "Swifts and Hummingbirds",
          id_a: "2",
          id_b: "21",
          children: [
            { name: "Hummingbirds", id_a: "2", id_b: "21", id_c: "59" }
          ]
        },
        {
          name: "Waterfowl",
          id_a: "2",
          id_b: "22",
          children: [
            { name: "Ducks, Geese, and Swans", id_a: "2", id_b: "22", id_c: "60" }
          ]
        },
        {
          name: "Woodpeckers and Allies",
          id_a: "2",
          id_b: "23",
          children: [
            { name: "Woodpeckers", id_a: "2", id_b: "23", id_c: "61" }
          ]
        }
      ]
    },
//=====================================
{
  name: "Fish",
  id_a: "a",
  children: [
    {
      name: "Cartilaginous Fishes",
      id_a: "a",
      id_b: "a",
      children: [
        {
          name: "Sharks",
          id_a: "a",
          id_b: "a",
          id_c: "a",
          children: [
            {
              name: "Ground Sharks",
              id_a: "a",
              id_b: "a",
              id_c: "a",
              id_d: "a",
              children: [
                { name: "Requiem Sharks", id_a: "a", id_b: "a", id_c: "a", id_d: "a", id_e: "a" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Ray-finned Fishes",
      id_a: "a",
      id_b: "b",
      children: [
        {
          name: "Blennies, Damselfishes, and Allies",
          id_a: "a",
          id_b: "b",
          id_c: "b",
          children: [
            { name: "Damselfishes", id_a: "a",id_b: "b", id_c: "b", id_d: "b"},
              ]
        },
        {
          name: "Freshwater Sunfishes, Grunters, and Allies",
          id_a: "a",
          id_b: "b",
          id_c: "c",
          children: [
            { name: "Freshwater Sunfishes", id_a: "a",id_b: "b", id_c: "c", id_d: "c"},
              ]
        },
        {
          name: "Minnows, Suckers, Carps, and Loaches",
          id_a: "a",
          id_b: "b",
          id_c: "d",
          children: [
            { name: "Cyprinids", id_a: "a",id_b: "b", id_c: "d", id_d: "d"},
            { name: "True Minnows", id_a: "a",id_b: "b", id_c: "d", id_d: "e"},
              ]
        },
        {
          name: "Perches, Scorpionfishes, Sticklebacks, and Allies",
          id_a: "a",
          id_b: "b",
          id_c: "e",
          children: [
            { name: "Perches, Darters, and Allies", id_a: "a",id_b: "b", id_c: "e", id_d: "f"},
              ]
        },
        {
          name: "Puffers and Filefishes",
          id_a: "a",
          id_b: "b",
          id_c: "f",
          children: [
            { name: "Pufferfishes", id_a: "a",id_b: "b", id_c: "f", id_d: "g"},
              ]
        },
        {
          name: "Rivulines, Killifishes, and Livebearers",
          id_a: "a",
          id_b: "b",
          id_c: "g",
          children: [
            { name: "Guppies, Mollies, Platys, and Swordtails", id_a: "a",id_b: "b", id_c: "g", id_d: "h"},
            { name: "Topminnows", id_a: "a",id_b: "b", id_c: "g", id_d: "j"},
              ]
        },
        {
          name: "Salmons, Pikes, and Mudminnows",
          id_a: "a",
          id_b: "b",
          id_c: "h",
          children: [
            { name: "Salmons, Trouts, and Whitefishes", id_a: "a",id_b: "b", id_c: "h", id_d: "g"},
              ]
        },
        {
          name: "Wrasses and Allies",
          id_a: "a",
          id_b: "b",
          id_c: "i",
          children: [
            { name: "Wrasses and Parrotfishes", id_a: "a",id_b: "b", id_c: "i", id_d: "i"},
              ]
        },
          ]
        }
      ]
},
//====================================
    {
      name: "Mammals",
      id_a: "3",
      children: [
        {
          name: "Bats",
          id_a: "3",
          id_b: "24",
          children: [
            { name: "Evening Bats", id_a: "3", id_b: "24", id_c: "62" }
          ]
        },
        {
          name: "Carnivorans",
          id_a: "3",
          id_b: "25",
          children: [
            { name: "Bears", id_a: "3", id_b: "25", id_c: "63" },
            { name: "Canids", id_a: "3", id_b: "25", id_c: "64" },
            { name: "Earless Seals", id_a: "3", id_b: "25", id_c: "65" },
            { name: "Eared Seals", id_a: "3", id_b: "25", id_c: "66" },
            { name: "Felids", id_a: "3", id_b: "25", id_c: "67" },
            { name: "Mustelids", id_a: "3", id_b: "25", id_c: "68" },
            { name: "Raccoons, Coatis, and Allies", id_a: "3", id_b: "25", id_c: "69" }
          ]
        },
        {
          name: "Even-toed Ungulates and Cetaceans",
          id_a: "3",
          id_b: "26",
          children: [
            { name: "Bovids", id_a: "3", id_b: "26", id_c: "70" },
            { name: "Deer", id_a: "3", id_b: "26", id_c: "71" },
            { name: "Pronghorns", id_a: "3", id_b: "26", id_c: "72" }
          ]
        },
        {
          name: "Lagomorphs",
          id_a: "3",
          id_b: "27",
          children: [
            { name: "Hares and Rabbits", id_a: "3", id_b: "27", id_c: "73"  },
            { name: "Pikas", id_a: "3", id_b: "27", id_c: "74"  }
          ]
        },
        {
          name: "Odd-toed Ungulates",
          id_a: "3",
          id_b: "28",
          children: [
            { name: "Equines", id_a: "3", id_b: "28", id_c: "75" }
          ]
        },
        {
          name: "Opossums",
          id_a: "3",
          id_b: "29",
          children: [
            { name: "Opossums", id_a: "3", id_b: "29", id_c: "76"  }
          ]
        },
        {
          name: "Rodents",
          id_a: "3",
          id_b: "30",
          children: [
            { name: "Beavers", id_a: "3", id_b: "30", id_c: "77"  },
            { name: "Hamsters, Voles, Lemmings and Allies", id_a: "3", id_b: "30", id_c: "78"  },
            { name: "Kangaroo Rats and Pocket Mice", id_a: "3", id_b: "30", id_c: "79"  },
            { name: "Old World Mice and Rats", id_a: "3", id_b: "30", id_c: "80"  },
            { name: "Squirrels", id_a: "3", id_b: "30", id_c: "81"  }
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
          id_a: "4",
          id_b: "31",
          children: [
            { name: "Alligators and Caimans", id_a: "4", id_b: "31", id_c: "82" }
          ]
        },
        {
          name: "Lizards",
          id_a: "4",
          id_b: "32",
          children: [
            { name: "Anoles", id_a: "4", id_b: "32", id_c: "83" },
            { name: "Collared Lizards", id_a: "4", id_b: "32", id_c: "84" },
            { name: "Iguanas and Chuckwallas", id_a: "4", id_b: "32", id_c: "85" },
            { name: "Neotropical Ground Lizards", id_a: "4", id_b: "32", id_c: "86" },
            { name: "Phrynosomatid Lizards", id_a: "4", id_b: "32", id_c: "87" },
            { name: "Typical Geckos", id_a: "4", id_b: "32", id_c: "88" },
            { name: "Wall Lizards", id_a: "4", id_b: "32", id_c: "89" },
            { name: "Whiptails and Tegus", id_a: "4", id_b: "32", id_c: "90" }
          ]
        },
        {
          name: "Snakes",
          id_a: "4",
          id_b: "33",
          children: [
            { name: "Colubrid Snakes", id_a: "4", id_b: "33", id_c: "91" },
            { name: "Vipers", id_a: "4", id_b: "33", id_c: "92" }
          ]
        },
        {
          name: "Turtles and Tortoises",
           id_a: "4",
          id_b: "34",
          children: [
            { name: "American Mud and Musk Turtles", id_a: "4", id_b: "34", id_c: "93" },
            { name: "Pond and Box Turtles", id_a: "4", id_b: "34", id_c: "94" },
            { name: "Snapping Turtles", id_a: "4", id_b: "34", id_c: "95" },
            { name: "Tortoises", id_a: "4", id_b: "34", id_c: "96" },
            { name: "Typical Sea Turtles", id_a: "4", id_b: "34", id_c: "97" }
          ]
        }
      ]
    },
//=====================================

  ]
};
