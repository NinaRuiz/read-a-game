const $ = require('jquery');

// DOM elements
const player_nameInput = $('#player_name');
const character_nameInput = $('#character_name');
const birth_placeInput = $('#birth_place');
const mental_healthInput = $('#mental_health');
const genderInput = $('#gender');
const saveInfoButton = $('#save-info-button');
const continuePageOneButton = $('#continue-page-one-button');

// Variables
let player_name;
let character_name;
let birth_place;
let mental_health;
let gender;

// Save Player on the variables
function savePlayer() {
    player_name = player_nameInput.val();
    character_name = character_nameInput.val();
    birth_place = birth_placeInput.val();
    mental_health = mental_healthInput.val();
    gender = genderInput.val();

    $('#save-alert-one').removeAttr('hidden');
}

// Save button function
saveInfoButton.click(function () {
    savePlayer();
    continuePageOneButton.removeAttr('hidden');
});

export {player_name, character_name, birth_place, mental_health, gender};
