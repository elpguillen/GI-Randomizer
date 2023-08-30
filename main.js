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
 * Randomizes two teams of characters
 */
function randomizeTeams() {
    let charactersAvailable = characterList.slice();

    firstTeam = createTeam(4, charactersAvailable);
    secondTeam = createTeam(4, charactersAvailable);
}

/**
 * 
 * @param {number} teamSize the number of characters in the team
 * @param {string[]} characters an array of character names
 * @returns A team of characters (array of names), empty if invalid paramaters
 */
function createTeam(teamSize, characters) {
    let team = ["", "", "", ""];

    if (!(characters instanceof Array) || teamSize < 1)
        return team;

    let startingIndex = 0;
    let endingIndex = characters.length;
    let randomIndex = 0;

    if (endingIndex < 1)
        return team;

    for (let index = 0; index < teamSize; index++) {
        randomIndex = getRandomInt(startingIndex, endingIndex);
        team[index] = characters[randomIndex];
        characters.splice(randomIndex, 1);
        endingIndex--;
    }

    return team;
}

/**
 * Adds teams to corresponding team container.
 * @param {number} teamSize The size of each team
 * @param {string[]} teamOne An array containing character names of the first team
 * @param {string[]} teamTwo An array containing character names of the second team
 */
function addTeams(teamSize, teamOne, teamTwo) {
    let teamGrids = document.getElementsByClassName("team-grid");
    let teamOneContainer = teamGrids[0];
    let teamTwoContainer = teamGrids[1];

    let charactersTeamOne = teamOneContainer.getElementsByClassName("character-card");
    let charactersTeamTwo = teamTwoContainer.getElementsByClassName("character-card");

    for (let index = 0; index < teamSize; index++) {
        let teamOneImage = charactersTeamOne[index].querySelector('img');
        let teamTwoImage = charactersTeamTwo[index].querySelector('img');

        let teamOneNameHolder = charactersTeamOne[index].querySelector('.character-name-holder');
        let teamTwoNameHolder = charactersTeamTwo[index].querySelector('.character-name-holder');

        let teamOneChar = teamOne[index];
        let teamTwoChar = teamTwo[index];

        let teamOneCharRarity = characters[teamOneChar]["rarity"];
        let teamTwoCharRarity = characters[teamTwoChar]["rarity"];

        teamOneImage.classList.remove("default-image");
        teamTwoImage.classList.remove("default-image");

        teamOneNameHolder.textContent = revertToLowerAndHyphenate(teamOneChar);
        teamTwoNameHolder.textContent = revertToLowerAndHyphenate(teamTwoChar);

        teamOneImage.src = `icons/${toLowerAndHyphenate(teamOne[index])}.png`;
        teamTwoImage.src = `icons/${toLowerAndHyphenate(teamTwo[index])}.png`;

        changeCharBackground(teamOneCharRarity, teamOneImage);
        changeCharBackground(teamTwoCharRarity, teamTwoImage);
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
        randomizeTeams();
        addTeams(4, firstTeam, secondTeam);
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

// Colors used in site
const fiveStarBackgroundColor = "#AB6E28";
const fourStarBackgroundColor = "#7465A3";
const emptyBackgroundColor = "#86898D";
const grayColor = "#E9E5DC";

let firstTeamMaxSize = 4;
let secondTeamMaxSize = 4;
let firstTeam = [];
let secondTeam = [];

// JSON data containing name, rarity, element, weapon type, and region of all current playable characters in Genshin Impact
const genshinData = '{"character": [{"characterName": "Albedo", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Alhaitham", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Sword", "characterRegion": "Sumeru"}, {"characterName": "Aloy", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Bow", "characterRegion": "None"}, {"characterName": "Amber", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Arataki Itto", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Claymore", "characterRegion": "Inazuma"}, {"characterName": "Baizhu", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Barbara", "characterRarity": "4", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Beidou", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Bennett", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Candace", "characterRarity": "4", "characterElement": "Hydro", "characterWeaponType": "Polearm", "characterRegion": "Sumeru"}, {"characterName": "Chongyun", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Collei", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Cyno", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Polearm", "characterRegion": "Sumeru"}, {"characterName": "Dehya", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Sumeru"}, {"characterName": "Diluc", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Diona", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Dori", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Claymore", "characterRegion": "Sumeru"}, {"characterName": "Eula", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Faruzan", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Fischl", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Ganyu", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Bow", "characterRegion": "Liyue"}, {"characterName": "Gorou", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Bow", "characterRegion": "Inazuma"}, {"characterName": "Hu Tao", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Jean", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Kaedehara Kazuha", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Kaeya", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Mondstadt"}, {"characterName": "Kamisato Ayaka", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Kamisato Ayato", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Kaveh", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Claymore", "characterRegion": "Sumeru"}, {"characterName": "Keqing", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Sword", "characterRegion": "Liyue"}, {"characterName": "Kirara", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Klee", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Kujou Sara", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Bow", "characterRegion": "Inazuma"}, {"characterName": "Kuki Shinobu", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Sword", "characterRegion": "Inazuma"}, {"characterName": "Layla", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Sumeru"}, {"characterName": "Lisa", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Mika", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Polearm", "characterRegion": "Mondstadt"}, {"characterName": "Mona", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Nahida", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Catalyst", "characterRegion": "Sumeru"}, {"characterName": "Nilou", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Sumeru"}, {"characterName": "Ningguang", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Noelle", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Qiqi", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Sword", "characterRegion": "Liyue"}, {"characterName": "Raiden Shogun", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Polearm", "characterRegion": "Inazuma"}, {"characterName": "Razor", "characterRarity": "4", "characterElement": "Electro", "characterWeaponType": "Claymore", "characterRegion": "Mondstadt"}, {"characterName": "Rosaria", "characterRarity": "4", "characterElement": "Cryo", "characterWeaponType": "Polearm", "characterRegion": "Mondstadt"}, {"characterName": "Sangonomiya Kokomi", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Catalyst", "characterRegion": "Inazuma"}, {"characterName": "Sayu", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Claymore", "characterRegion": "Inazuma"}, {"characterName": "Shenhe", "characterRarity": "5", "characterElement": "Cryo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Shikanoin Heizou", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Inazuma"}, {"characterName": "Sucrose", "characterRarity": "4", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Mondstadt"}, {"characterName": "Tartaglia", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Bow", "characterRegion": "Snezhnaya"}, {"characterName": "Thoma", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Inazuma"}, {"characterName": "Tighnari", "characterRarity": "5", "characterElement": "Dendro", "characterWeaponType": "Bow", "characterRegion": "Sumeru"}, {"characterName": "Traveler", "characterRarity": "5", "characterElement": "None", "characterWeaponType": "Sword", "characterRegion": "None"}, {"characterName": "Venti", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Bow", "characterRegion": "Mondstadt"}, {"characterName": "Wanderer", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Catalyst", "characterRegion": "Sumeru"}, {"characterName": "Xiangling", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Xiao", "characterRarity": "5", "characterElement": "Anemo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Xingqiu", "characterRarity": "4", "characterElement": "Hydro", "characterWeaponType": "Sword", "characterRegion": "Liyue"}, {"characterName": "Xinyan", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Claymore", "characterRegion": "Liyue"}, {"characterName": "Yae Miko", "characterRarity": "5", "characterElement": "Electro", "characterWeaponType": "Catalyst", "characterRegion": "Inazuma"}, {"characterName": "Yanfei", "characterRarity": "4", "characterElement": "Pyro", "characterWeaponType": "Catalyst", "characterRegion": "Liyue"}, {"characterName": "Yaoyao", "characterRarity": "4", "characterElement": "Dendro", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Yelan", "characterRarity": "5", "characterElement": "Hydro", "characterWeaponType": "Bow", "characterRegion": "Liyue"}, {"characterName": "Yoimiya", "characterRarity": "5", "characterElement": "Pyro", "characterWeaponType": "Bow", "characterRegion": "Inazuma"}, {"characterName": "Yun Jin", "characterRarity": "4", "characterElement": "Geo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}, {"characterName": "Zhongli", "characterRarity": "5", "characterElement": "Geo", "characterWeaponType": "Polearm", "characterRegion": "Liyue"}]}';
let genshinJsonData = JSON.parse(genshinData);

// Retrieves the array within the JSON object
let data = genshinJsonData.character;
// Dictionary: key -> characterName, value -> GenshinCharacter
let characters = {};

// List of characters (string of names)
let characterList = []

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

    characters[characterName] = genshinCharacter;
    index++;
}

let characterGrid = document.querySelector('.characters-grid');
let characterCards = characterGrid.getElementsByClassName("character-card");

// for each character card element in html:
//      1. Get the ImageHolder and NameHolder elements
/**
 * for each character card element in html:
 *      1. Get the ImageHolder and NameHolder elements
 *      2. Get the name present in the NameHolder
 *      3. Find the name in the character dictionary to find its rarity
 *      4. Change the color in the ImageHolder based on the character's rarity
 */
for (let characterIndex = 0; characterIndex < characterCards.length; characterIndex++) {
    let characterImageHolder = characterCards[characterIndex].getElementsByClassName("character-image-holder")[0];
    let characterNameHolder = characterCards[characterIndex].getElementsByClassName("character-name-holder")[0];

    let currentCharacter = characterNameHolder.textContent;
    let currentCharRarity = characters[currentCharacter]["rarity"];

    changeCharBackground(currentCharRarity, characterImageHolder);
}

addRandomizeButtonEventListener();