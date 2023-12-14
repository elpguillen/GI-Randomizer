
// Colors used in site
const fiveStarBackgroundColor = "#AB6E28";
const fourStarBackgroundColor = "#7465A3";
const emptyBackgroundColor = "#86898D";
const lightGrayColor = "#E9E5DC";
const darkGrayColor = "7C7E83";

// Array holding characters in each team with corresponding size
let firstTeamMaxSize = 4;
let secondTeamMaxSize = 4;
let firstTeam = [];
let secondTeam = [];

// JSON data containing name, rarity, element, weapon type, and region of all current playable characters in Genshin Impact
const genshinData = '{"character": [{"characterName": "Albedo", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Alhaitham", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Sword", "characterRegion": "Sumeru"}, {"characterName": "Aloy", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Bow", "characterRegion": "None"}, {"characterName": "Amber", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Arataki Itto", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Claymore", "characterRegion": "Inazuma"}, {"characterName": "Baizhu", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Barbara", "characterRarity": "4", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Beidou", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Bennett", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Candace", "characterRarity": "4", "characterElement": "Hydro", "characterWeaponType": "Polearm", "characterRegion": "Sumeru"}, {"characterName": "Charlotte", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Catalyst", "characterRegion": "Fontaine"}, {"characterName": "Chongyun", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Collei", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Cyno", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Polearm", "characterRegion": "Sumeru"}, {"characterName": "Dehya", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Sumeru"}, {"characterName": "Diluc", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Diona", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Dori", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Claymore", "characterRegion": "Sumeru"}, {"characterName": "Eula", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Faruzan", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Fischl", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Freminet", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Claymore", "characterRegion": "Fontaine"}, {"characterName": "Furina", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Fontaine"}, {"characterName": "Ganyu", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Bow", "characterRegion": "Liyue"}, {"characterName": "Gorou", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Bow", "characterRegion": "Inazuma"}, {"characterName": "Hu Tao", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Jean", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Kaedehara Kazuha", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Kaeya", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Kamisato Ayaka", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Kamisato Ayato", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Kaveh", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Claymore", "characterRegion": "Sumeru"}, {"characterName": "Keqing", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Sword", "characterRegion": "Liyue"}, {"characterName": "Kirara", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Klee", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Kujou Sara", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Bow", "characterRegion": "Inazuma"}, {"characterName": "Kuki Shinobu", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Layla", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Sumeru"}, {"characterName": "Lisa", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Lynette", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Sword", "characterRegion": "Fontaine"}, {"characterName": "Lyney", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Bow", "characterRegion": "Fontaine"}, {"characterName": "Mika", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Polearm", "characterRegion": "Mondstadt"}, {"characterName": "Mona", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Nahida", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Catalyst", "characterRegion": "Sumeru"}, {"characterName": "Neuvillette", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Fontaine"}, {"characterName": "Nilou", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Sumeru"}, {"characterName": "Ningguang", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Noelle", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Qiqi", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Liyue"}, {"characterName": "Raiden Shogun", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Polearm", "characterRegion": "Inazuma"}, {"characterName": "Razor", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Rosaria", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Polearm", "characterRegion": "Mondstadt"}, {"characterName": "Sangonomiya Kokomi", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Inazuma"}, {"characterName": "Sayu", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Claymore", "characterRegion": "Inazuma"}, {"characterName": "Shenhe", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Shikanoin Heizou", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Inazuma"}, {"characterName": "Sucrose", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Tartaglia", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Bow", "characterRegion": "Snezhnaya"}, {"characterName": "Thoma", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Inazuma"}, {"characterName": "Tighnari", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Traveler", "characterRarity": "5", "characterElement": "None", "characterWeaponType": "Sword", "characterRegion": "None"}, {"characterName": "Venti", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Wanderer", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Sumeru"}, {"characterName": "Wriothesley", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Catalyst", "characterRegion": "Fontaine"}, {"characterName": "Xiangling", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Xiao", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Xingqiu", "characterRarity": "4", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Liyue"}, {"characterName": "Xinyan", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Yae Miko", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Catalyst", "characterRegion": "Inazuma"}, {"characterName": "Yanfei", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Yaoyao", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Yelan", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Bow", "characterRegion": "Liyue"}, {"characterName": "Yoimiya", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Bow", "characterRegion": "Inazuma"}, {"characterName": "Yun Jin", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Zhongli", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}]}';
let genshinJsonData = JSON.parse(genshinData);

// Retrieves the array within the JSON object
let data = genshinJsonData.character;

// Dictionary: key -> characterName, value -> GenshinCharacter
let characters = {};

// List of all characters (string of names)
let characterList = [];

// set of all selectable characters
let allCharacters = new Set();

// set of available characters to user
let characterRoster = new Set();

// determines whether or not Select All button is active
let isUnSelectedAll = true;


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
 * 
 * @param {number} min Start of range (inclusive)
 * @param {number} max End of range (exclusive)
 * @returns Gets a random integer between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min) + min));
}

/**
 * Selects characters to be used for the teams.
 * @param {number} teamSize size of each team
 * @param {number} numOfTeams number of teams
 * @param {string[]} characterList array of character names
 * @returns array of characters selected for the teams
 */
function selectCharacters(teamSize, numOfTeams, characterList) {

    if (typeof teamSize !== "number" || typeof numOfTeams !== "number" ||
            !(Array.isArray(characterList)))
        return [];

    if (teamSize < 1 || numOfTeams < 1 || characterList.length < 1)
        return [];

    let characterSelect = knuthShuffle(characterList);
    let numCharacters = Math.min(teamSize * numOfTeams, characterList.length);
    let charactersSelected = Array(numCharacters).fill("");

    for (let index = 0; index < numCharacters; index++) {
        charactersSelected[index] = characterSelect[index];
    }

    return charactersSelected;
}

/**
 * Adds teams to corresponding team container.
 * @param {number} teamSize The size of each team
 * @param {string[]} teamOne Array containing character names of the first team
 * @param {string[]} teamTwo Array containing character names of the second team
 * @param {object.<string, GenshinCharacter>} characters Dictionary of: key -> character name, value -> GenshinCharacter
 */
function addTeams(teamSize, teamOne, teamTwo, characters) {

    if (teamSize < 1 || teamSize > 4) {
        throw new Error("Size of team should be between 1 and 4 inclusive.");
    }

    if ( !(Array.isArray(teamOne)) || !(Array.isArray(teamTwo)) ) {
        throw new Error("Team One and Two should be arrays.");
    }

    // Get the containers that hold the teams in the html
    let teamGrids = document.getElementsByClassName("team-grid");
    let teamOneContainer = teamGrids[0];
    let teamTwoContainer = teamGrids[1];

    // Get the character cards/slots for each team
    let charactersTeamOne = teamOneContainer.getElementsByClassName("character-card");
    let charactersTeamTwo = teamTwoContainer.getElementsByClassName("character-card");

    for (let index = 0; index < teamSize; index++) {

        // Get Image elem and character name elem for current index and team
        let teamOneImage = charactersTeamOne[index].querySelector('img');
        let teamTwoImage = charactersTeamTwo[index].querySelector('img');
        let teamOneNameHolder = charactersTeamOne[index].querySelector('.character-name-holder');
        let teamTwoNameHolder = charactersTeamTwo[index].querySelector('.character-name-holder');

        if (index >= teamOne.length) {
            // no more characters to add so display default image and text for character
            teamOneImage.classList.add("default-image");
            teamOneNameHolder.textContent = "-----";
            teamOneImage.src = "images/add.png";
            teamOneImage.style.background = emptyBackgroundColor;

        } else {
            // update image and text that corresponds to the character at 'index' from 'teamOne'
            let teamOneChar = teamOne[index];
            let teamOneCharRarity = characters[teamOneChar]["rarity"];

            teamOneImage.classList.remove("default-image");
            teamOneNameHolder.textContent = revertToLowerAndHyphenate(teamOneChar);
            teamOneImage.src = `icons/${toLowerAndHyphenate(teamOne[index])}.png`;

            changeCharBackground(teamOneCharRarity, teamOneImage);
        }

        if (index >= teamTwo.length) {
            // no more characters to add so display default image and text for character
            teamTwoImage.classList.add("default-image");
            teamTwoNameHolder.textContent = "-----";
            teamTwoImage.src = "images/add.png";
            teamTwoImage.style.background = emptyBackgroundColor;
        } else {
            // update image and text that corresponds to the character at 'index' from 'teamOne'
            let teamTwoChar = teamTwo[index];
            let teamTwoCharRarity = characters[teamTwoChar]["rarity"];

            teamTwoImage.classList.remove("default-image");
            teamTwoNameHolder.textContent = revertToLowerAndHyphenate(teamTwoChar);
            teamTwoImage.src = `icons/${toLowerAndHyphenate(teamTwo[index])}.png`;
            
            changeCharBackground(teamTwoCharRarity, teamTwoImage);
        }
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
 * Event Listener for 'clicks' on the Randomize Button
 */
function addRandomizeButtonEventListener() {
    const randomizeButton = document.querySelector("#randomize-button");

    randomizeButton.addEventListener("click", function () {
        // Gets the 4 characters for each team
        let charactersSelected = selectCharacters(4, 2, Array.from(characterRoster));

        let numCharacters = charactersSelected.length;
        let splitIndex = Math.min(4, numCharacters);

        // Add the characters selected for each team
        firstTeam = charactersSelected.slice(0, splitIndex);
        secondTeam = charactersSelected.slice(splitIndex, numCharacters);

        addTeams(4, firstTeam, secondTeam, characters);
    });
}

/**
 * Event Listener for 'clicks' on the Select/Unselect All Button.
 * Switches between Select All and Unselect All
 */
function addSelectButtonEventListener() {
    const selectButton = document.querySelector(".characters-toggle-select-button");

    selectButton.addEventListener("click", function() {
        let characterButtons = document.querySelectorAll(".character-card-button");
        let buttonText = "Unselect All";

        for (let index = 0; index < characterButtons.length; index++) {
            let characterButton = characterButtons[index];
            
            if (isUnSelectedAll) {
                characterRoster.clear();
                characterButton.classList.add("character-button-unselected");
                buttonText = "Select All";
            } else {
                characterRoster = new Set(allCharacters);
                characterButton.classList.remove("character-button-unselected");
                buttonText = "Unselect All";
            }
        }
        isUnSelectedAll = !isUnSelectedAll;
        selectButton.innerHTML = buttonText;
    });
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

/**
 * Creates the grid to display each character in Genshin Impact.
 */
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
    let currentCharRarity = characters[currentCharacter]["rarity"];
    changeCharBackground(currentCharRarity, characterImageHolder);

    characterImage.src = "/icons/" + toLowerAndHyphenate(character) + ".png";
    characterImage.setAttribute('draggable', false);
    
    characterImageHolder.appendChild(characterImage);

    characterButton.appendChild(characterImageHolder);
    characterButton.appendChild(characterNameHolder);

    characterNameHolder.appendChild(characterName);

    return characterButton;
}

/**
 * Randomly shuffles element in array
 * @param {string[]} array  array with items to shuffle
 * @returns the given array with elements shuffled
 */
function knuthShuffle(array) {
    let currentIndex = array.length;
    let randomIndex, tempValue;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
  
    return array;
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
addSelectButtonEventListener();
addRandomizeButtonEventListener();