const $ = require('jquery');

import {createCharacterObject, createCharacter} from "../../services/characters-manager.js";

// Page one functions
// DOM elements
const player_nameInput = $('#player_name');
const character_nameInput = $('#character_name');
const birth_placeInput = $('#birth_place');
const mental_healthInput = $('#mental_health');
const genderInput = $('#gender');
const saveInfoButton = $('#save-info-button');

// Variables
let player_name;
let character_name;
let birth_place;
let mental_health;
let gender;

function savePlayer() {
    player_name = player_nameInput.val();
    character_name = character_nameInput.val();
    birth_place = birth_placeInput.val();
    mental_health = mental_healthInput.val();
    gender = genderInput.val();

    $('#save-alert-one').removeAttr('hidden');
}

saveInfoButton.click(function () {
    savePlayer();
});

// Page two functions
// DOM elements
const outputFUE = $('#FUE');
const outputDES = $('#DES');
const outputINT = $('#INT');
const outputCON = $('#CON');
const outputAPA = $('#APA');
const outputPOD = $('#POD');
const outputTAM = $('#TAM');
const outputCOR = $('#COR');
const outputEDU = $('#EDU');
const againButton = $('#again-button');

//Variables
let FUE;
let DES;
let INT;
let CON;
let APA;
let POD;
let TAM;
let COR;
let EDU;

// Calculating the característics
function d6() {
    let num = Math.floor(Math.random()*6)+1;
    return num;
}

// FUE = 3d6
function calculateFUE() {
    let calcul = d6() + d6() + d6();
    outputFUE.text(calcul);
    return calcul;
}

// DES = 3d6
function calculateDES() {
    let calcul = d6() + d6() + d6();
    outputDES.text(calcul);
    return calcul;
}

// INT = 2d6 + 6
function calculateINT() {
    let calcul = d6() + d6() + 6;
    outputINT.text(calcul);
    return calcul;
}

// CON = 3d6
function calculateCON() {
    let calcul = d6() + d6() + d6();
    outputCON.text(calcul);
    return calcul;
}

// APA = 3d6
function calculateAPA() {
    let calcul = d6() + d6() + d6();
    outputAPA.text(calcul);
    return calcul;
}

// POD = 3d6
function calculatePOD() {
    let calcul = d6() + d6() + d6();
    outputPOD.text(calcul);
    POD = calcul;
    return calcul;
}

// TAM = 2d6 + 6
function calculateTAM() {
    let calcul = d6() + d6() + 6;
    outputTAM.text(calcul);
    return calcul;
}

// COR = PODx5
function calculateCOR() {
    let calcul = POD * 5;
    outputCOR.text(calcul);
    return calcul;
}

// EDU = 3d6 + 3
function calculateEDU() {
    let calcul = d6() + d6() + d6() + 3;
    outputEDU.text(calcul);
    return calcul;
}

// Calculate all the característics
function calculateCaracteristics() {
    FUE = calculateFUE();
    DES = calculateDES();
    INT = calculateINT();
    CON = calculateCON();
    APA = calculateAPA();
    POD = calculatePOD();
    TAM = calculateTAM();
    COR = calculateCOR();
    EDU = calculateEDU();
}

$(document).ready(function () {
    calculateCaracteristics()
});

// Reload the caracteristics
againButton.click(function () {
    calculateCaracteristics();
});

