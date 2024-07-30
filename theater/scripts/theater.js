function createCharacterGrid(characters) {
    
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


createCharacterGrid("");