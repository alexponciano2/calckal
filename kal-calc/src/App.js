import Apps from "./App.css"
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import Container from "./components/Container"

const monsters = [
  {name:"Devil Shadow of Devah",level:1},
{name:"Dawn Shadow of Devah",level:1},
{name:"Demon Vulgar",level:1},
{name:"Hell Shadow of Devah",level:1},
{name:"Nightmare shadow of D'evah",level:1},
{name:"Necro Dragon",level:90},
{name:"Demon Scout",level:2},
{name:"Demon Spearhead",level:3},
{name:"Demon Plunderer",level:4},
{name:"Wild Small Demon",level:5},
{name:"Wild Demon Scout",level:6},
{name:"Wild Demon Spearhead",level:7},
{name:"Demon Escort Archer",level:8},
{name:"Demon Escort Soldier",level:8},
{name:"Demon Scout Commander",level:9},
{name:"Odd Demon Scout",level:10},
{name:"Mad Demon Infantry",level:10},
{name:"Suicide Bomber",level:10},
{name:"Demon Carcass Scavenger",level:11},
{name:"Wild Demon Plunderer",level:12},
{name:"Wild Suicide Bomber",level:13},
{name:"Wild Demon Carcass Scavenger",level:14},
{name:"Wild Demon Escort Archer",level:15},
{name:"Wild Demon Escort Soldier",level:15},
{name:"Naughty Doggebi",level:15},
{name:"Big Handed Slave",level:16},
{name:"Big Handed Inhabitant",level:16},
{name:"Big Handed Blue Warrior",level:17},
{name:"Big Handed Red Warrior",level:17},
{name:"Demon Soldier",level:18},
{name:"Demon Throwing Soldier",level:19},
{name:"Demon Infantry",level:19},
{name:"Demon Flag Bearer",level:20},
{name:"Wild Demon Soldier",level:20},
{name:"Demon Shock Trooper",level:20},
{name:"Ferocious Demon Shock Trooper",level:21},
{name:"Ferocious Demon Flag Bearer",level:21},
{name:"Demon Band",level:22},
{name:"Demon Armored Knight",level:22},
{name:"Demon Mad Knight",level:23},
{name:"Demon Commander",level:23},
{name:"Elite Demon Commander",level:24},
{name:"Elite Demon Mad Knight",level:24},
{name:"Big Handed Slave",level:25},
{name:"Big Handed Inhabitant",level:25},
{name:"Frenzy Demon Flag Bearer",level:25},
{name:"Despair Big Handed Blue Warrior",level:26},
{name:"Despair Big Handed Red Warrior",level:26},
{name:"Demon Water Dragon",level:27},
{name:"Hungry Demon Water Dragon",level:27},
{name:"Demon Water Dragon Commander",level:28},
{name:"Demon Water Dragon Predator",level:28},
{name:"Hungry Demon Water Dragon the Chained",level:29},
{name:"Demon Water Dragon the Chained",level:29},
{name:"Demon Water Dragon Commander the Chained",level:30},
{name:"Demon Water Dragon Predator the Chained",level:30},
{name:"Goofy Demon Band",level:30},
{name:"Assault Demon Throwing Soldier",level:31},
{name:"Assault Demon Infantry",level:31},
{name:"Assault Demon Band",level:32},
{name:"Assault Demon Armored Knight",level:32},
{name:"Ghost of Young Man",level:33},
{name:"Odd Demon Mad Knight",level:33},
{name:"Castoff Baby Ghost",level:33},
{name:"Ghost of Blacksmith",level:34},
{name:"Ghost of Young Woman",level:34},
{name:"Ghost of Guard",level:34},
{name:"Fellow Traveler to the Other World",level:35},
{name:"Sealed Ghost Troop",level:35},
{name:"Seaside Hungry Demon Water Dragon",level:36},
{name:"Seaside Demon Water Dragon Commander",level:36},
{name:"Seaside Demon Water Dragon Predator",level:36},
{name:"Regrettable Ghost of Young Woman",level:36},
{name:"Ghost of Guard the Chained",level:37},
{name:"Fellow Traveler to the Other World the Chained",level:37},
{name:"Sealed Ghost Troop the Chained",level:37},
{name:"Devil Soldier with Twin Blades",level:38},
{name:"Devil Soldier",level:38},
{name:"Cruel Ghost of Guard",level:39},
{name:"Devil Soldier with Bow",level:39},
{name:"Devil Soldier with Sword",level:39},
{name:"1st Devil Monster",level:40},
{name:"Devil Soldier with Spear",level:40},
{name:"2nd Devil Monster",level:40},
{name:"Devil Troop of Absorbing Green",level:41},
{name:"Guardian of Doggebi",level:41},
{name:"Devil Troop of Desire",level:42},
{name:"Obsessed Devil Soldier",level:42},
{name:"Doggebi of Monster Face",level:43},
{name:"Devil Troop of Pain",level:44},
{name:"Doggebi with a Gong",level:44},
{name:"Devil Troop of Greed",level:45},
{name:"Hell Gate Keeper",level:45},
{name:"Crazed Demon Water Dragon Commander",level:45},
{name:"Summoned Doggebi of Monster Face",level:45},
{name:"Summoned Trained Traitor Archer",level:46},
{name:"Devil Troop of Desire",level:46},
{name:"Doggebi of Monster Face",level:46},
{name:"Summoned Trained Traitor Warrior",level:46},
{name:"Doggebi with a Gong",level:46},
{name:"Drunken Doggebi",level:46},
{name:"Devil Troop of Pain",level:47},
{name:"Drunken Doggebi",level:47},
{name:"Devil Troop of Jealousy",level:47},
{name:"Devil Troop of Greed",level:47},
{name:"Summoned Drunken Doggebi",level:48},
{name:"Devil Troop of Hatred",level:48},
{name:"Doggebi with a Mask of Black Panther",level:48},
{name:"Doggebi with a Mask of Black Crow",level:48},
{name:"Devil Troop of Jealousy",level:48},
{name:"Mutated Warrior of Shadow Troop",level:48},
{name:"Giant Doggebi",level:49},
{name:"Summoned Doggebi with a Mask of Black Crow",level:49},
{name:"Doggebi with a Mask of Black Panther",level:49},
{name:"Devil Troop of Madness",level:49},
{name:"Hell Gate Keeper",level:50},
{name:"Summoned Doggebi with a Mask of Black Panther",level:50},
{name:"Demon Worker",level:50},
{name:"Giant Doggebi",level:50},
{name:"Guardian of Doggebi",level:50},
{name:"Evil Spirit",level:50},
{name:"Devil Troop of Anger",level:50},
{name:"Assassin who killed Yong-Chun",level:50},
{name:"Dae-Il",level:50},
{name:"Ma-Gwang",level:50},
{name:"Chief of Angry Doggebi Troop",level:50},
{name:"Yoo",level:50},
{name:"Goon-Sang-Ji",level:50},
{name:"Enemy of Hyun-Woong",level:50},
{name:"Heuk-Yong",level:50},
{name:"High Class Drunken Doggebi",level:51},
{name:"Summoned Giant Doggebi",level:51},
{name:"High Class Doggebi with a Gong",level:51},
{name:"Angry Doggebi of Monster Face",level:51},
{name:"High Class Doggebi of Monster Face",level:51},
{name:"High Class Doggebi with a Mask of Black Crow",level:51},
{name:"Dismal Skeleton Warrior (Sword)",level:51},
{name:"Rotten Skeleton Warrior of the Royal Tomb (Sword)",level:51},
{name:"High Class Drunken Doggebi",level:52},
{name:"Summoned Knight of the Traitor's Hangout",level:52},
{name:"High Class Doggebi of Monster Face",level:52},
{name:"High Class Doggebi with a Mask of Black Crow",level:52},
{name:"Rotten Skeleton Warrior of the Royal Tomb (Lance)",level:52},
{name:"Runabout Skeleton Warrior (Sword)",level:52},
{name:"High Class Doggebi with a Gong",level:52},
{name:"Summoned Guardian of Doggebi",level:52},
{name:"High Class Doggebi of Monster Face",level:53},
{name:"High Class Doggebi with a Gong",level:53},
{name:"High Class Drunken Doggebi",level:53},
{name:"Runabout Skeleton Warrior (Lance)",level:53},
{name:"Demon Worker",level:53},
{name:"High Class Doggebi with a Mask of Black Crow",level:53},
{name:"Dismal Skeleton Warrior (Lance)",level:53},
{name:"Chill Minister of the Royal Tomb",level:54},
{name:"Minister of the Royal Tomb",level:54},
{name:"Chief of Demon Crack Troop",level:54},
{name:"Demon Crack Soldier",level:54},
{name:"Corrupt Guardian of Doggebi",level:54},
{name:"Summoned Chief of Angry Doggebi Troop",level:54},
{name:"Monster of Demon Crack Troop",level:54},
{name:"Death Thorn",level:55},
{name:"Chief of Demon Crack Troop",level:55},
{name:"Frost Fountain",level:55},
{name:"Maid of Honor of the Royal Tomb",level:55},
{name:"Hell Gate Keeper",level:55},
{name:"The Royal Tomb Keeper (Sword)",level:55},
{name:"Chill Maid of Honor of the Royal Tomb",level:55},
{name:"Demon Crack Soldier",level:55},
{name:"Monster of Demon Crack Troop",level:55},
{name:"Ugly Soul",level:55},
{name:"Frame Statue",level:55},
{name:"Flame Fountain",level:55},
{name:"The Royal Tomb Keeper (Sword)",level:56},
{name:"Demon Crack Soldier",level:56},
{name:"Manager of Demon Worker",level:56},
{name:"Summoned Chief of the Traitor's Hangout, Yoong-Gi",level:56},
{name:"Sensitive The Royal Tomb Keeper (Sword)",level:56},
{name:"Monster of Demon Crack Troop",level:56},
{name:"Chief of Demon Crack Troop",level:56},
{name:"Sharp The Royal Tomb Keeper (Sword)",level:56},
{name:"Chill The Royal Tomb Keeper (Shield)",level:57},
{name:"The Royal Tomb Keeper (Shield)",level:57},
{name:"Minister of the Royal Tomb from Hell",level:57},
{name:"Blue Beast of Demon Crack Troop",level:57},
{name:"Ruled by a Rotten Skeleton Warrior of theRoyal Tomb",level:57},
{name:"White Beast of Demon Crack Troop",level:57},
{name:"Manager of Demon Worker",level:57},
{name:"Sensitive The Royal Tomb Keeper (Shield)",level:57},
{name:"Doggebi of Time",level:58},
{name:"SensitiveThe Royal Tomb Keeper (Spear)",level:58},
{name:"Blue Beast of Demon Crack Troop",level:58},
{name:"White Beast of Demon Crack Troop",level:58},
{name:"Summoned The Royal Tomb Keeper",level:58},
{name:"Punitive Force of Demon Crack Troop",level:58},
{name:"The Royal Tomb Keeper (Spear)",level:58},
{name:"The Royal Tomb Keeper (Iron Hammer)",level:59},
{name:"White Beast of Demon Crack Troop",level:59},
{name:"Sharp The Royal Tomb Keeper (Spear)",level:59},
{name:"Punitive Force of Demon Crack Troop",level:59},
{name:"Noktoo Soldier",level:60},
{name:"Boss of Demon Worker",level:60},
{name:"Punitive Force of Demon Crack Troop",level:60},
{name:"Blue Beast of Demon Crack Troop",level:60},
{name:"betrayal Minister of the Royal Tomb",level:60},
{name:"Summoned Noktoo Soldier",level:60},
{name:"Boss of Demon Worker from Hell",level:60},
{name:"Sharp The Royal Tomb Keeper (Iron Hammer)",level:60},
{name:"Chill The Royal Tomb Keeper (Iron Hammer)",level:60},
{name:"Traitor Trainee Warrior",level:61},
{name:"Summoned Traitor Warrior",level:61},
{name:"Maid of Honor of the Royal Tomb",level:61},
{name:"Minister of the Royal Tomb",level:61},
{name:"Traitor Common Warrior",level:62},
{name:"Traitor Apprentice Warrior",level:62},
{name:"The Royal Tomb Keeper",level:62},
{name:"Summoned Twisted Demon Warrior",level:63},
{name:"Trained Traitor Warrior",level:63},
{name:"The Royal Tomb Keeper",level:63},
{name:"Tobyong",level:63},
{name:"Skilled Traitor Warrior",level:63},
{name:"Summoned Trained Traitor Warrior",level:64},
{name:"Summoned Archer of the Traitor's Hangout",level:64},
{name:"The Royal Tomb Keeper",level:64},
{name:"Experienced Traitor Warrior",level:64},
{name:"Trained Traitor Archer",level:64},
{name:"Demon Guard",level:65},
{name:"Ghost of Guard in E-Mok Island from Hell",level:65},
{name:"The Royal Tomb Keeper",level:65},
{name:"Summoned Twisted Demon Soldier",level:65},
{name:"Experienced Traitor Archer",level:65},
{name:"Skilled Traitor Archer",level:65},
{name:"Traitor's Nest Scout",level:66},
{name:"Traitor's Nest Keeper",level:66},
{name:"Warrior of Shadow Troop",level:66},
{name:"Summoned Trained Traitor Archer",level:67},
{name:"Demon Guard",level:67},
{name:"Traitor's Nest Guard",level:67},
{name:"Hook of Shadow Troop",level:67},
{name:"Traitor's Nest Hunter",level:67},
{name:"Summoned Guard of the Traitors Hangout",level:67},
{name:"Small Green E-Moogi from Hell",level:67},
{name:"Gigantic Species Ignoramus from Hell",level:67},
{name:"Summoned Chief of Demon Crack Troop",level:67},
{name:"Goshi Warrior",level:68},
{name:"Tobyong Magician",level:68},
{name:"Mutant Demon",level:68},
{name:"Bronze Man",level:68},
{name:"Sealed Ghost in E-Mok Island from Hell",level:68},
{name:"Traitor's Nest Sniper",level:68},
{name:"Traitor's Nest Archer",level:68},
{name:"Watcher of Shadow Troop",level:68},
{name:"Traitor's Nest Regular Warrior",level:69},
{name:"Traitor's Nest Elite Warrior",level:69},
{name:"Chief Warrior of Shadow Troop",level:69},
{name:"Summoned Monster of Demon Crack Troop",level:69},
{name:"2nd Commander of The Royal Tomb",level:70},
{name:"Summoned Gigantic Species Murderer",level:70},
{name:"1st Commander of The Royal Tomb",level:70},
{name:"Lord of Shadow Troop",level:70},
{name:"Spear Hand of Shadow Troop",level:70},
{name:"Knight of the Traitor's Hangout",level:70},
{name:"3rd Commander of The Royal Tomb",level:70},
{name:"Traitor's Nest Honorary Warrior",level:70},
{name:"Chief Escort of The Royal Tomb",level:70},
{name:"Imperial Commander of The Royal Tomb",level:70},
{name:"Black Armored Insect from Hell",level:70},
{name:"Summoned Monster of Demon Crack Troop",level:70},
{name:"Larva",level:70},
{name:"Chief Guard of The Royal Tomb",level:70},
{name:"Demon Patrol",level:70},
{name:"Summoned White Beast of Demon Crack Troop",level:70},
{name:"Flame Plants",level:70},
{name:"Black Armored Insect",level:70},
{name:"Minor earth element",level:71},
{name:"Decrepit Minor earth element",level:71},
{name:"Tainted Minor earth element",level:71},
{name:"Hermit of Long Beard",level:71},
{name:"Knight of the Traitor's Hangout",level:71},
{name:"Hermit of White Beard",level:71},
{name:"Hermit of White Beard",level:72},
{name:"Hermit of Long Beard",level:72},
{name:"Tainted Minor fire element",level:72},
{name:"Decrepit Minor fire element",level:72},
{name:"Minor fire element",level:72},
{name:"Knight of the Traitor's Hangout",level:72},
{name:"Summoned Blue Beast of Demon Crack Troop",level:73},
{name:"Hermit of Red Face from Hell",level:73},
{name:"Minor water element",level:73},
{name:"Decrepit Minor water element",level:73},
{name:"Tainted Minor water element",level:73},
{name:"Hermit of Red Face",level:73},
{name:"Hermit of Mask",level:73},
{name:"Demon Warrior",level:73},
{name:"Bogy Rider",level:73},
{name:"Decrepit Minor iron element",level:74},
{name:"Minor iron element",level:74},
{name:"Hermit of Long Beard",level:74},
{name:"Tainted Minor iron element",level:74},
{name:"Hermit of Long Beard from Hell",level:74},
{name:"Hermit of White Beard",level:74},
{name:"Hermit of Red Face",level:75},
{name:"Bogy Archer",level:75},
{name:"Minor wood element",level:75},
{name:"Hermit of Mask",level:75},
{name:"Decrepit Minor wood element",level:75},
{name:"Demon Infantry from Hell",level:75},
{name:"Summoned Bogy Archer",level:75},
{name:"Summoned Skeleton 81",level:75},
{name:"Tainted Minor wood element",level:75},
{name:"Demon Infantry",level:75},
{name:"Corrupted earth element",level:76},
{name:"Tough Hermit",level:76},
{name:"Bounded earth element",level:76},
{name:"Earth element",level:76},
{name:"Hermit of Anger",level:76},
{name:"Hermit of Mask",level:77},
{name:"Hermit of Red Face",level:77},
{name:"Bounded fire element",level:77},
{name:"Corrupted fire element",level:77},
{name:"Fire element",level:77},
{name:"Goblin Warrior",level:74},
{name:"Hermit of Anger",level:78},
{name:"Tough Hermit",level:78},
{name:"Summoned Skeleton 82",level:78},
{name:"Noktoo Magician",level:78},
{name:"Crazy Demon Warrior",level:78},
{name:"Bounded water element",level:78},
{name:"Corrupted water element",level:78},
{name:"Summoned Crazy Demon Warrior",level:78},
{name:"Water element",level:78},
{name:"Chief of the Traitor's Hangout, Yoong-Gi",level:79},
{name:"Bounded iron element",level:79},
{name:"Twisted Demon Soldier from Hell",level:79},
{name:"Iron element",level:79},
{name:"Corrupted iron element",level:79},
{name:"Summoned Twisted Demon Soldier",level:79},
{name:"Hermit of Anger",level:79},
{name:"High Class Giant Doggebi",level:79},
{name:"High Class Doggebi with a Mask of Black Panther",level:79},
{name:"Tough Hermit",level:79},
{name:"Goblin Hunter",level:76},
{name:"High Class Guardian of Doggebi",level:80},
{name:"Personal Guard of Doggebi Lord",level:80},
{name:"Summoned Minor earth element",level:80},
{name:"Bogy Captain",level:80},
{name:"Corrupted wood element",level:80},
{name:"Bounded wood element",level:80},
{name:"Wood element",level:80},
{name:"Summoned Hermit of Red Face",level:80},
{name:"Minor earth element",level:80},
{name:"Minor iron element",level:80},
{name:"Minor water element",level:80},
{name:"Minor fire element",level:80},
{name:"Summoned Minor wood element",level:80},
{name:"Summoned Minor iron element",level:80},
{name:"Demon Defender",level:80},
{name:"Flame Plants",level:80},
{name:"Hermit of Anger from Hell",level:80},
{name:"Summoned Minor fire element",level:80},
{name:"Summoned Minor water element",level:80},
{name:"Minor wood element",level:80},
{name:"Gigantic Species Warrior",level:81},
{name:"Gigantic Species trainee Warrior",level:81},
{name:"Gigantic Species Archer",level:81},
{name:"Ghost of Smith in E-Mok Island",level:81},
{name:"Banshee",level:81},
{name:"Skeleton",level:81},
{name:"Ghost of Guard in E-Mok Island",level:81},
{name:"Skeleton Archer",level:81},
{name:"Gigantic Species common Warrior",level:82},
{name:"Banshee",level:82},
{name:"Sealed Ghost in E-Mok Island",level:82},
{name:"Skeleton",level:82},
{name:"Elite Skeleton",level:82},
{name:"Skeleton Archer",level:82},
{name:"Gigantic Species Archer",level:82},
{name:"Sealed Ghost in E-Mok Island",level:83},
{name:"Gigantic Species Ignoramus",level:83},
{name:"Gigantic Species Shock Trooper",level:83},
{name:"Banshee",level:83},
{name:"Elite Skeleton",level:83},
{name:"Skeleton",level:83},
{name:"Skeleton Archer",level:83},
{name:"Gigantic Species Master from Hell",level:84},
{name:"Elite Skeleton",level:84},
{name:"Small Brown E-Moogi",level:84},
{name:"Skeleton Warrior",level:84},
{name:"Skeleton Archer",level:84},
{name:"Banshee",level:84},
{name:"Gigantic Species Ignoramus",level:84},
{name:"Small Green E-Moogi",level:84},
{name:"Gigantic Species Shock Trooper",level:84},
{name:"Wraith",level:85},
{name:"Small Brown E-Moogi",level:85},
{name:"Noktoo Assassin",level:85},
{name:"Twisted Demon Defender from Hell",level:85},
{name:"Skeleton Archer",level:85},
{name:"Elite Skeleton",level:85},
{name:"Goshi Leader",level:85},
{name:"Summoned Hermit of Mask",level:85},
{name:"Summoned Twisted Demon Defender",level:85},
{name:"Doggebi Lord of Training Field",level:85},
{name:"Bronze Giant",level:85},
{name:"Skeleton Warrior",level:85},
{name:"Banshee",level:85},
{name:"Gigantic Species Killer",level:85},
{name:"Mutant Demon Leader",level:85},
{name:"Gigantic Species Murderer",level:85},
{name:"Gigantic Species Berserk",level:85},
{name:"Small Green E-Moogi",level:85},
{name:"Demon Monster",level:85},
{name:"Gigantic Species Killer",level:86},
{name:"Twisted Green E-Moogi",level:86},
{name:"Wraith",level:86},
{name:"Skeleton Warrior",level:86},
{name:"Twisted Brown E-Moogi",level:86},
{name:"Elite Skeleton",level:86},
{name:"Gigantic Species Berserk",level:86},
{name:"Twisted Brown E-Moogi",level:87},
{name:"Wraith",level:87},
{name:"Twisted Green E-Moogi",level:87},
{name:"Skeleton Warrior",level:87},
{name:"Gigantic Species Warrior",level:87},
{name:"Wandering Gigantic Species Archer",level:87},
{name:"Wandering Gigantic Species Warrior",level:87},
{name:"Summoned Fire element",level:88},
{name:"Summoned Earth element",level:88},
{name:"Skeleton Warrior",level:88},
{name:"Savage Gigantic Species Warrior",level:88},
{name:"Savage Gigantic Species Archer",level:88},
{name:"Twisted Brown E-Moogi",level:88},
{name:"Twisted Green E-Moogi",level:88},
{name:"Summoned Iron element",level:88},
{name:"Summoned Wood element",level:88},
{name:"Summoned Water element",level:88},
{name:"Ferocious Gigantic Species Archer",level:89},
{name:"Ferocious Gigantic Species Shock Trooper",level:89},
{name:"Twisted Demon Guard",level:89},
{name:"Bestial Demon",level:84},
{name:"Fire element",level:90},
{name:"Earth element",level:90},
{name:"Wood element",level:90},
{name:"Summoned Crazy Demon Worker's Leader",level:90},
{name:"Summoned 2nd Commander of The Royal Tomb",level:90},
{name:"Demon Queen of Training Field",level:90},
{name:"Iron element",level:90},
{name:"Water element",level:90},
{name:"Noktoo General",level:90},
{name:"Twisted Demon Patrol",level:90},
{name:"Furious Gigantic Species Shock Trooper",level:90},
{name:"Demon Troop's Catapult",level:90},
{name:"Savage Gigantic Species Shock Trooper",level:90},
{name:"Tobyong Giant",level:90},
{name:"Twisted Demon Guard",level:90},
{name:"Lord of Shadow Troop from Hell",level:90},
{name:"Hell's Virago",level:90},
{name:"Bogy General",level:90},
{name:"Summoned 3rd Commander of The Royal Tomb",level:90},
{name:"Bestial Demon Soldier",level:85},
{name:"Bestial Demon Warrior",level:85},
{name:"Sharp Gigantic Species Ignoramus",level:91},
{name:"Summoned Knoll",level:91},
{name:"Furious Gigantic Species Ignoramus",level:91},
{name:"Twisted Demon Warrior",level:91},
{name:"Twisted Demon Guard",level:91},
{name:"Twisted Demon Patrol",level:91},
{name:"Bestial Demon Captain",level:86},
{name:"Twisted Demon Warrior",level:92},
{name:"High Class Earth element",level:92},
{name:"Twisted Demon Patrol",level:92},
{name:"High Class Fire element",level:92},
{name:"High Class Wood element",level:92},
{name:"Corrupted Gigantic Species Berserk",level:92},
{name:"Corrupted Gigantic Species Ignoramus",level:92},
{name:"Twisted Demon Soldier",level:92},
{name:"High Class Iron element",level:92},
{name:"Summoned Goblin",level:92},
{name:"High Class Water element",level:92},
{name:"Vicious Wild Boar",level:93},
{name:"Bounded Gigantic Species Berserk",level:93},
{name:"Elite Gigantic Species Berserk",level:93},
{name:"High Class Wood element",level:93},
{name:"High Class Iron element",level:93},
{name:"Twisted Demon Defender",level:93},
{name:"Security guard of the priest",level:93},
{name:"High Class Fire element",level:93},
{name:"High Class Earth element",level:93},
{name:"Twisted Demon Soldier",level:93},
{name:"High Class Water element",level:93},
{name:"High Class Iron element",level:94},
{name:"High Class Wood element",level:94},
{name:"Twisted Demon Defender",level:94},
{name:"Twisted Demon Soldier",level:94},
{name:"High Class Security guard of the priest",level:94},
{name:"High Class Water element",level:94},
{name:"Summoned Knoll soldier",level:94},
{name:"High Class Earth element",level:94},
{name:"Summoned Knoll Archer",level:94},
{name:"Summoned Goblin soldier",level:94},
{name:"Elite Gigantic Species Murderer",level:94},
{name:"High Class Fire element",level:94},
{name:"Bounded Gigantic Species Murderer",level:94},
{name:"Ghost of Dragon of Training Field",level:95},
{name:"Demon Nest",level:95},
{name:"Gigantic Species Master",level:95},
{name:"Illusion of Cheios",level:95},
{name:"Illusion of Dunamic",level:95},
{name:"Big Green E-Moogi",level:95},
{name:"Big Brown E-Moogi",level:95},
{name:"Dark Gigantic Species Murderer",level:95},
{name:"Dark Gigantic Species Master",level:95},
{name:"Fire element master",level:95},
{name:"Earth element master",level:95},
{name:"Summoned Goblin Scout Soldier",level:95},
{name:"Hell's Virago",level:95},
{name:"Water element master",level:95},
{name:"High Class Security guard of the priest",level:95},
{name:"Iron element master",level:95},
{name:"Wood element master",level:95},
{name:"Guardian of I'Lyer",level:95},
{name:"Red Demon Soldier",level:94},
{name:"Red Demon Warrior",level:95},
{name:"Gale Zombie (Wind)",level:96},
{name:"Vicious Wolf",level:96},
{name:"Crazy Demon Worker",level:96},
{name:"Summoned Twisted Green E-Moogi",level:96},
{name:"Summoned Twisted Brown E-Moogi",level:96},
{name:"Guardian of I'Lyer",level:96},
{name:"Summoned Scorpion",level:97},
{name:"Summoned Wolf",level:97},
{name:"Demon Queen",level:97},
{name:"Vicious Bear",level:97},
{name:"Crazy Demon soldier",level:97},
{name:"Summoned Wild Boar",level:98},
{name:"Vicious Master Scorpion",level:98},
{name:"Twisted Demon Officer of Attack",level:98},
{name:"Summoned Skeleton Soldier",level:98},
{name:"Crazy Demon Conjurator",level:98},
{name:"Land Bison (Earth)",level:98},
{name:"Vicious Knoll",level:99},
{name:"Wanderer of sand",level:99},
{name:"A Thousand year old E-Moogi",level:99},
{name:"Ghost of Dragon",level:99},
{name:"I'Lyer",level:99},
{name:"Summoned Knoll Mad Warrior",level:99},
{name:"Summoned Skeleton Archer",level:99},
{name:"Degenarated Twisted Demon",level:99},
{name:"Dunamic of Training Field",level:100},
{name:"Summoned Xill",level:100},
{name:"Mutant Demon Leader",level:100},
{name:"Dunamic",level:100},
{name:"Knoll's hideaway 4",level:100},
{name:"Mutant Demon",level:100},
{name:"Twisted Imperial Demon Commander",level:100},
{name:"Twisted Demon soldier",level:100},
{name:"Knoll's hideaway 2",level:100},
{name:"Knoll's hideaway 3",level:100},
{name:"Bronze Man",level:100},
{name:"Goshi Warrior",level:100},
{name:"Knoll's hideaway 1",level:100},
{name:"Doggebi Lord",level:100},
{name:"Goshi Leader",level:100},
{name:"Swamp Zombie (Water)",level:100},
{name:"Ifrit",level:100},
{name:"Bronze Giant",level:100},
{name:"Hell's Virago",level:100},
{name:"Cheios",level:100},
{name:"Sealed Commanders",level:100},
{name:"Summoned Xill Archer",level:100},
{name:"Sealed Hermit",level:100},
{name:"Ifrit",level:101},
{name:"Wolf",level:101},
{name:"Wild Boar",level:101},
{name:"Summoned Master Skeleton Warrior",level:101},
{name:"Summoned Master Wraith",level:101},
{name:"Red Demon Captain",level:96},
{name:"Elite Skeleton Archer",level:102},
{name:"Summoned Master Skeleton Archer",level:102},
{name:"Ifrit",level:102},
{name:"Brown Bear",level:102},
{name:"Summoned Gigantic Species Warrior",level:102},
{name:"Elite Skeleton",level:102},
{name:"Crazy Demon Worker's Leader",level:102},
{name:"Summoned Gigantic Species Archer",level:103},
{name:"Summoned Gigantic Species Shock Trooper",level:103},
{name:"Gale Skeleton Warrior (Wind)",level:103},
{name:"Gale Skeleton Wizard (Wind)",level:103},
{name:"Giant",level:103},
{name:"Knoll",level:103},
{name:"Scorpion",level:104},
{name:"Giant",level:104},
{name:"Summoned Gigantic Species Ignoramus",level:104},
{name:"Summoned Gigantic Species Berserk",level:104},
{name:"Summoned Gigantic Species Master",level:105},
{name:"Giant",level:105},
{name:"Summoned Giant",level:105},
{name:"Wolf Commander",level:105},
{name:"Guard of D'evah's Commander",level:105},
{name:"Goblin",level:105},
{name:"Land Brown Bear (Earth)",level:106},
{name:"Soldier with High Warlord's Banner",level:106},
{name:"Fanatic warrior of Land God (Earth)",level:106},
{name:"Goblin Conjurator",level:106},
{name:"Fanatic Magician of Land God (Earth)",level:106},
{name:"Guard of D'evah",level:107},
{name:"Goblin Scout Soldier",level:108},
{name:"Goblin soldier",level:108},
{name:"Frozen Skeleton Warrior (Water)",level:109},
{name:"Swamp Naga tribe Warrior (Water)",level:109},
{name:"Swamp Naga tribe Archer (Water)",level:109},
{name:"Knoll Archer",level:109},
{name:"Knoll soldier",level:109},
{name:"Wolf Demon",level:104},
{name:"Wild boar Demon",level:105},
{name:"Dark Wolf Demon",level:105},
{name:"[Elite] Golem",level:105},
{name:"Lawless zone Gale Zombie (Wind)",level:110},
{name:"Deadly sand [Mautareta] of Training Field",level:110},
{name:"Skeleton Archer",level:110},
{name:"Skeleton Soldier",level:110},
{name:"Desert Scorpion",level:110},
{name:"Deadly sand[Mautareta]",level:110},
{name:"Dark Wild boar Demon",level:106},
{name:"Xill",level:111},
{name:"Twisted Demon Warrior",level:111},
{name:"Xill Archer",level:111},
{name:"Lawless zone Land Bison (Earth)",level:112},
{name:"Starved Xill soldier",level:112},
{name:"Xill Conjurator",level:112},
{name:"Goblin Warrior",level:113},
{name:"Goblin Conjurator",level:113},
{name:"Knoll Mad Warrior",level:114},
{name:"Lawless zone Swamp Zombie (Water)",level:114},
{name:"Knoll soldier",level:114},
{name:"Knoll Archer",level:114},
{name:"Wounded Evolve Zombie",level:115},
{name:"Wounded Conjurator Zombie",level:115},
{name:"Master Skeleton Warrior",level:116},
{name:"Destructive sand[Mautareta]",level:116},
{name:"Master Skeleton Archer",level:116},
{name:"Master Wraith",level:116},
{name:"Lawless zone Gale Skeleton Wizard (Wind)",level:117},
{name:"Dungeon Warrior",level:117},
{name:"Lawless zone Gale Skeleton Warrior (Wind)",level:117},
{name:"Dungeon Shield Soldier",level:118},
{name:"Dungeon Scout Soldier",level:119},
{name:"Tower Demon Hunter",level:114},
{name:"Master of Dead person",level:120},
{name:"Master of Dead person of Training Field",level:120},
{name:"Dungeon Shield Soldier",level:120},
{name:"Dungeon combat trooper",level:120},
{name:"Lawless zone Fanatic warrior of Land God (Earth)",level:120},
{name:"Lawless zone Land Brown Bear (Earth)",level:120},
{name:"Dungeon Warrior",level:120},
{name:"Lawless zone Fanatic Magician of Land God (Earth)",level:120},
{name:"Dungeon Scout Soldier",level:120},
{name:"Tower Demon Guardian",level:115},
{name:"Tower Demon Warrior",level:115},
{name:"Dungeon Ax Soldier",level:121},
{name:"Dungeon Guard",level:121},
{name:"Dungeon Shock Trooper",level:121},
{name:"Tower Demon Chief",level:116},
{name:"Elite Dungeon combat trooper",level:122},
{name:"Elite Dungeon Warrior",level:122},
{name:"Elite Dungeon Shock Trooper",level:122},
{name:"Elite Dungeon Ax Soldier",level:122},
{name:"Elite Dungeon Shield Soldier",level:122},
{name:"Elite Dungeon Scout Soldier",level:122},
{name:"Elite Dungeon Guard",level:122},
{name:"Death Harvester (Earth)",level:123},
{name:"Ruins Destroyer (Water)",level:123},
{name:"Lawless zone Frozen Skeleton Warrior (Water)",level:123},
{name:"Shadow Murder (Wind)",level:123},
{name:"Lawless zone Swamp Naga tribe Warrior (Water)",level:123},
{name:"Lawless zone Swamp Naga tribe Archer (Water)",level:123},
{name:"Death Lich (Earth)",level:124},
{name:"Lord Bisaim (Water)",level:124},
{name:"Dungeon Magician",level:124},
{name:"Ohgeuma (Wind)",level:124},
{name:"Death Knight (Earth)",level:125},
{name:"Master of Water(Water)",level:125},
{name:"Master of Land(Earth)",level:125},
{name:"Master of Wind(Wind)",level:125},
{name:"Lawless zone Master of Dead person",level:125},
{name:"[Elite] Dungeon Knight",level:126},
{name:"Dungeon Knight",level:126},
{name:"Elite Ruins Destroyer (Water)",level:127},
{name:"Elite Shadow Murder (Wind)",level:127},
{name:"Elite Death Harvester (Earth)",level:127},
{name:"Elite Lord Bisaim (Water)",level:128},
{name:"Elite Death Lich (Earth)",level:128},
{name:"Elite Ohgeuma (Wind)",level:128},
{name:"Elite Death Knight (Earth)",level:129},
{name:"[Elite] Dungeon Knight",level:130},
{name:"Dungeon Knight",level:130},
{name:"Infinite Doggebi",level:130},
{name:"Fierce Wolf Doggebi (Earth)",level:124},
{name:"Fierce Skeleton Soldier (Wind)",level:124},
{name:"Fierce Doggebi Soldier (Water)",level:124},
{name:"Fierce Giant Doggebi Soldier (Earth)",level:125},
{name:"Fierce Skeleton Warrior (Wind)",level:125},
{name:"Fierce Doggebi Warrior (Water)",level:125},
{name:"[Elite] Golem",level:125},
{name:"Fierce Doggebi Shaman (Water)",level:126},
{name:"Fierce Skeleton Dragon (Wind)",level:126},
{name:"Fierce Giant Doggebi Warrior (Earth)",level:126},
{name:"Ghost Troop",level:150},
{name:"Elder Doggebi",level:150}
];


function App() {
  const [noobLevel, setNoobLevel] = useState(0);
  const [strongLevel, setStrongLevel] = useState(0);
  const [monstersInRange, setMonstersInRange] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (parseInt(noobLevel) > parseInt(strongLevel)) {
      alert('O level do mais noob não pode ser maior que o do mais forte.');
      return;
    }

    let noobLevelWithBonus = parseInt(noobLevel) + 9;
    let strongLevelWithPenalty = parseInt(strongLevel) - 9;

    if (noobLevelWithBonus > strongLevelWithPenalty) {
      const temp = noobLevelWithBonus;
      noobLevelWithBonus = strongLevelWithPenalty;
      strongLevelWithPenalty = temp;

      alert(
        `Você pode matar monstros de level ${noobLevelWithBonus} a ${strongLevelWithPenalty}.`
      );
    }

    if (Math.abs(strongLevel - noobLevel) > 18) {
      alert('A diferença entre os níveis não pode ser maior que 19.');
      return;
    }

    const monstersInRange = monsters.filter((monster) => {
      return (
        monster.level >= noobLevelWithBonus &&
        monster.level <= strongLevelWithPenalty
      );
    });

    setMonstersInRange(monstersInRange);
  };

  return (
    <>
    <Header/>
    <Container>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Level do mais noob:
          <input
            maxLength={3}
            className='levelnoob'
            type="text"
            value={noobLevel}
            onChange={(event) => setNoobLevel(event.target.value)}
          />
        </label>
        <br />
        <label>
          Level do mais forte:
          <input
            maxLength={3}
            className='levelforte'
            type="text"
            value={strongLevel}
            onChange={(event) => setStrongLevel(event.target.value)}
          />
        </label>
        <br />
        <button className="buscarMonstros" type="submit">Buscar monstros</button>
      </form>

      {monstersInRange.length > 0 && (
        <div className="fontRes">
          <h2 className="monstroNaRange">Monstros na range:</h2>
          <ul>
            {monstersInRange.map((monster) => (
              <li key={monster.name}>
                {monster.name} - Level {monster.level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </Container>
    <Footer/>
    </>
  );
}

export default App;