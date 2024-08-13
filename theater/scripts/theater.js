// JSON data containing name, rarity, element, weapon type, and region of all current playable characters in Genshin Impact
const genshinData = '{"character": [{"characterName": "Albedo", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Alhaitham", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Sword", "characterRegion": "Sumeru"}, {"characterName": "Aloy", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Bow", "characterRegion": "None"}, {"characterName": "Amber", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Arataki Itto", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Claymore", "characterRegion": "Inazuma"}, {"characterName": "Arlecchino", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Snezhnaya"}, {"characterName": "Baizhu", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Barbara", "characterRarity": "4", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Beidou", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Bennett", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Candace", "characterRarity": "4", "characterElement": "Hydro", "characterWeaponType": "Polearm", "characterRegion": "Sumeru"}, {"characterName": "Charlotte", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Catalyst", "characterRegion": "Fontaine"}, {"characterName": "Chevreuse", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Fontaine"}, {"characterName": "Chiori", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Chongyun", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Clorinde", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Sword", "characterRegion": "Fontaine"}, {"characterName": "Collei", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Cyno", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Polearm", "characterRegion": "Sumeru"}, {"characterName": "Dehya", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Sumeru"}, {"characterName": "Diluc", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Diona", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Dori", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Claymore", "characterRegion": "Sumeru"}, {"characterName": "Emilie", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Polearm", "characterRegion": "Fontaine"}, {"characterName": "Eula", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Faruzan", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Fischl", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Freminet", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Claymore", "characterRegion": "Fontaine"}, {"characterName": "Furina", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Fontaine"}, {"characterName": "Gaming", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Ganyu", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Bow", "characterRegion": "Liyue"}, {"characterName": "Gorou", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Bow", "characterRegion": "Inazuma"}, {"characterName": "Hu Tao", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Jean", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Kaedehara Kazuha", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Kaeya", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Kamisato Ayaka", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Kamisato Ayato", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Kaveh", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Claymore", "characterRegion": "Sumeru"}, {"characterName": "Keqing", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Sword", "characterRegion": "Liyue"}, {"characterName": "Kirara", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Klee", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Kujou Sara", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Bow", "characterRegion": "Inazuma"}, {"characterName": "Kuki Shinobu", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Layla", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Sumeru"}, {"characterName": "Lisa", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Lynette", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Sword", "characterRegion": "Fontaine"}, {"characterName": "Lyney", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Bow", "characterRegion": "Fontaine"}, {"characterName": "Mika", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Polearm", "characterRegion": "Mondstadt"}, {"characterName": "Mona", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Nahida", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Catalyst", "characterRegion": "Sumeru"}, {"characterName": "Navia", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Claymore", "characterRegion": "Fontaine"}, {"characterName": "Neuvillette", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Fontaine"}, {"characterName": "Nilou", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Sumeru"}, {"characterName": "Ningguang", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Noelle", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Qiqi", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Liyue"}, {"characterName": "Raiden Shogun", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Polearm", "characterRegion": "Inazuma"}, {"characterName": "Razor", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Rosaria", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Polearm", "characterRegion": "Mondstadt"}, {"characterName": "Sangonomiya Kokomi", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Inazuma"}, {"characterName": "Sayu", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Claymore", "characterRegion": "Inazuma"}, {"characterName": "Sethos", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Shenhe", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Shikanoin Heizou", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Inazuma"}, {"characterName": "Sigewinne", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Bow", "characterRegion": "Fontaine"}, {"characterName": "Sucrose", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Tartaglia", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Bow", "characterRegion": "Snezhnaya"}, {"characterName": "Thoma", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Inazuma"}, {"characterName": "Tighnari", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Traveler", "characterRarity": "5", "characterElement": "None", "characterWeaponType": "Sword", "characterRegion": "None"}, {"characterName": "Venti", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Wanderer", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Sumeru"}, {"characterName": "Wriothesley", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Catalyst", "characterRegion": "Fontaine"}, {"characterName": "Xiangling", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Xianyun", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Xiao", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Xingqiu", "characterRarity": "4", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Liyue"}, {"characterName": "Xinyan", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Yae Miko", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Catalyst", "characterRegion": "Inazuma"}, {"characterName": "Yanfei", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Yaoyao", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Yelan", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Bow", "characterRegion": "Liyue"}, {"characterName": "Yoimiya", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Bow", "characterRegion": "Inazuma"}, {"characterName": "Yun Jin", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Zhongli", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}]}';

// Dictionary: key -> characterName, value -> GenshinCharacter
let characters = {};

let genshinJsonData = JSON.parse(genshinData);

// Retrieves the array within the JSON object
let data = genshinJsonData.character;

// List of all characters (string of names)
let characterList = [];

// set of all selectable characters
let allCharacters = new Set();

// set of available characters to user
let characterRoster = new Set();

// list of available elements
let elementList = ["pyro, hydro, anemo, electro, dendro, cryo, geo"]

// Colors used in site
const fiveStarBackgroundColor = "#AB6E28";
const fourStarBackgroundColor = "#7465A3";

/**
 * @Class
 * Represents a character in Genshin Impact
 */

class GenshinCharacter {
    /**
     * 
     * @param {string} characterName The name of character
     * @param {number} rarity The in-game rarity of character
     * @param {string} element The in-game element of character
     * @param {string} weaponType The type of weapon character uses
     * @param {string} region The region in-game character is from
     */
    constructor(characterName, rarity, element, weaponType, region) {
        
        if (typeof characterName !== 'string') {
            throw new Error("Character Name should be a string!");
        }

        if (typeof rarity !== 'string') {
            throw new Error("Rarity should be a string!");
        }

        if (typeof element !== 'string') {
            throw new Error("Element should be a string!");
        }

        if (typeof weaponType !== 'string') {
            throw new Error("Weapon Type should be a string!");
        }

        if (typeof region !== 'string') {
            throw new Error("Region should be a string!");
        }

        this.characterName = characterName;
        this.rarity = rarity;
        this.element = element;
        this.weaponType = weaponType;
        this.region = region;
    }
}

/**
 * @param {string} characterName The character name
 * @returns Character name in lower case with spaces replaced with hyphens  
 */
function toLowerAndHyphenate(characterName) {
    if (typeof characterName !== "string")
        return "";

    return characterName.toLowerCase()
            .split(" ")
            .join("-");
}

/**
 * Reverts the changes that the function 'toLowerAndHyphenate' made:
 *      1. Uses space as delimiter instead of hyphen
 *      2. Capitalizes first letter in each word
 * @param {string} characterName The character name
 * @returns Space delimited string with first character in word capitalized
 */
function revertToLowerAndHyphenate(characterName) {
    if (typeof characterName !== "string")
        return "";

    let characterNameArray = characterName.split("-");

    for (const index in characterNameArray) {
        let name = characterNameArray[index];
        characterNameArray[index] = name.charAt(0).toUpperCase() + name.slice(1);
    }
    
    return characterNameArray.join(" ");
}

/**
 * Changes the character's image background based on its rarity.
 * 
 * @param {string} rarity The rarity of the character 
 * @param {Object} image HTML img element representing an image
 */
function changeCharBackground(rarity, image) {
    if (rarity == "5") {
        image.style.background = fiveStarBackgroundColor;
    } else {
        image.style.background = fourStarBackgroundColor;
    }
}


function createCharacterGrid() {
    
    let mainElement = document.getElementsByTagName("main");

    let characterGridSection = document.createElement("section");
    let charactersContainer = document.createElement("div");
    let charactersGrid = document.createElement("div");

    mainElement[0].appendChild(characterGridSection);
    characterGridSection.appendChild(charactersContainer);
    charactersContainer.appendChild(charactersGrid);

    charactersContainer.classList.add("character-container");
    charactersGrid.classList.add("characters-grid");

    // TODO: add character cards and event listener for each character card
    for (let characterIndex = 0; characterIndex < characterList.length; characterIndex++) {

        let currentCharacter = characterList[characterIndex];
        let characterCard = createCharacterCard(currentCharacter);
        charactersGrid.appendChild(characterCard)

        characterCard.addEventListener("click", function() {
            
            this.classList.toggle("character-button-unselected");
            let name = this.getElementsByClassName("character-name-holder")[0].innerHTML;

            if (characterRoster.has(name)) {
                characterRoster.delete(name);
            } else {
                characterRoster.add(name);
            }
        })
    }
}

/**
 * Creates the Button to display the character.
 * @param {string} character Character name
 * @returns Button representing the given character
 */
function createCharacterCard(character) {
    let characterButton = document.createElement("button");
    let characterImageHolder = document.createElement("div"); 
    let characterImage = document.createElement("img");  
    let characterNameHolder = document.createElement("div"); 
    let characterName = document.createTextNode(character);

    characterButton.classList.add("character-card-button");
    characterImageHolder.classList.add("character-image-holder");
    characterNameHolder.classList.add("character-name-holder");

    let currentCharacter = character;
    console.log(currentCharacter);
    console.log(characters);
    let currentCharRarity = characters[currentCharacter]["rarity"];
    changeCharBackground(currentCharRarity, characterImageHolder);

    characterImage.src = "../../icons/" + toLowerAndHyphenate(character) + ".png";
    characterImage.setAttribute('draggable', false);
    
    characterImageHolder.appendChild(characterImage);

    characterButton.appendChild(characterImageHolder);
    characterButton.appendChild(characterNameHolder);

    characterNameHolder.appendChild(characterName);

    return characterButton;
}

let index = 0;
// add characters from json data to dictionary
while(index < data.length) {
    let characterName = data[index].characterName;
    let characterRarity = data[index].characterRarity;
    let characterElement = data[index].characterElement;
    let characterWeaponType = data[index].characterWeaponType;
    let characterRegion = data[index].characterRegion;
    let genshinCharacter = new GenshinCharacter(characterName, characterRarity, characterElement, characterWeaponType, characterRegion);

    characterList.push(characterName);
    characterRoster.add(characterName);
    allCharacters.add(characterName);

    characters[characterName] = genshinCharacter;
    index++;
}


createCharacterGrid();