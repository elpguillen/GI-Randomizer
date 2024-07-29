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


createCharacterGrid("");