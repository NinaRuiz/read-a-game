const $ = require('jquery');

import {createCharacterObject, createCharacter} from "../../services/characters-manager.js";
const template = require('../../html-templates/toolbar-template');

// Document elements
const nameInput = $('#name-input');
const ageInput = $('#age-input');
const professionInput = $('#profession-input');
const submitButton = $('#create-button');

// Button function
submitButton.click(function (e) {
    // Prevent the default submit function
    e.preventDefault();

    // Save data
    let name = nameInput.val();
    let age = ageInput.val();
    let profession = professionInput.val();

    // Create Object with the saved data
    let character = createCharacterObject(name, age, profession);

    // Create character.json
    createCharacter(character, name);
});


