const $ = require('jquery');

import {createCharacterObject, createCharacter} from "../../services/characters-manager.js";

// *************************************************************************** Page one functions
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

// *************************************************************************** Page two functions
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
const saveButtonPageTwo = $('#save-info-button-two');
const continueButtonPageTwo = $('#continue-page-two-button');
const saveAlertPageTwo = $('#save-alert-two');

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

// Save button function
saveButtonPageTwo.click(function () {
    saveAlertPageTwo.removeAttr('hidden');
    continueButtonPageTwo.removeAttr('hidden');
});

// *************************************************************************** Page three functions
// DOM Elements
const saveInfoButtonThree = $('#save-info-button-three');
const continueButtonPageThree = $('#continue-page-three-button');
const saveAlertThree = $('#save-alert-three');
const outputAge = $('#age');
const outputSanity = $('#sanity');
const outputIdeas = $('#ideas');
const outputLuck = $('#luck');
const outputDamageBonus = $('#damage_bonus');
const outputMiths = $('#cthulhu_miths');

// Variables
let age;
let sanity;
let ideas;
let luck;
let damage_bonus;
let cthulhu_miths;

// Calculate age = EDU + 6
function calculateAge(){
    age = EDU + 6;
    outputAge.text(age);
}

// Calculate sanity (CON + TAM)/2
function calculateSanity(){
    sanity = Math.round((CON + TAM) / 2);
    outputSanity.text(sanity);
}

// Calculate Idea = Int*5
function calculateIdea(){
    ideas = INT * 5;
    outputIdeas.text(ideas);
}

// Calculate Luck = POD*5
function calculateLuck(){
    luck = POD * 5;
    outputLuck.text(luck);
}

// Calculate Damage Bonus =
/* if FUE + TAM -- Damage Bonus
    2 a 12 -- -1d6
    13 a 16 -- -1d4
    17 a 24 -- none
    25 a 32 -- +1d4
    33 a 40 -- +1d6
    41 a 56 -- +2d6
    57 a 72 -- +3d6
    73 a 88 -- +4d6
    89 a 104 -- +5d6
    105 a 120 -- +6d6
    121 a 136 -- +7d6
    137 a 152 -- +8d6
    153 a 168 -- +9d6
    169 a 184 -- +10d6
    cada 16 más -- +1d6 más
 */

function calculateDamageBonus(){
    let sum = TAM + FUE;

    // 2 a 12 -- -1d6
    if(sum > 2 && sum < 12){
        damage_bonus = '-1d6';
    }else
        //13 a 16 -- -1d4
        if(sum> 13 && sum < 16){
            damage_bonus = '-1d4';
        }else
            // 17 a 24 -- none
            if(sum> 17 && sum < 24){
                damage_bonus = 'none';
            }else
                // 25 a 32 -- +1d4
                if(sum> 25 && sum < 32){
                    damage_bonus = '+1d4';
                }else
                    // 33 a 40 -- +1d6
                    if(sum> 33 && sum < 40){
                        damage_bonus = '+1d6';
                    }else
                        // 41 a 56 -- +2d6
                        if(sum> 41 && sum < 56){
                            damage_bonus = '+2d6';
                        }else
                            // 57 a 72 -- +3d6
                            if(sum> 57 && sum < 72){
                                damage_bonus = '+3d6';
                            }else
                                // 73 a 88 -- +4d6
                                if(sum> 73 && sum < 88){
                                    damage_bonus = '+4d6';
                                }else
                                    // 89 a 104 -- +5d6
                                    if(sum> 89 && sum < 104){
                                        damage_bonus = '+5d6';
                                    }else
                                        // 105 a 120 -- +6d6
                                        if(sum> 105 && sum < 120){
                                            damage_bonus = '+6d6';
                                        }else
                                            // 121 a 136 -- +7d6
                                            if(sum> 121 && sum < 136){
                                                damage_bonus = '+7d6';
                                            }else
                                                // 137 a 152 -- +8d6
                                                if(sum> 137 && sum < 152){
                                                    damage_bonus = '+8d6';
                                                }else
                                                    // 153 a 168 -- +9d6
                                                    if(sum> 153 && sum < 168){
                                                        damage_bonus = '+9d6';
                                                    }else
                                                        // 169 a 184 -- +10d6
                                                        if(sum> 169 && sum < 184){
                                                            damage_bonus = '+10d6';
                                                        }else{
                                                            let x = (sum-184)/16;
                                                            let y = x + 10;
                                                            damage_bonus = `+${y}d6`;
                                                        }

                                                        outputDamageBonus.text(damage_bonus);
}

// Calculate Miths
function calculateMiths(){
    cthulhu_miths = 99;
    outputMiths.text(cthulhu_miths);
}

function calculateCaracteristicsTwo(){
    calculateAge();
    calculateSanity();
    calculateIdea();
    calculateLuck();
    calculateDamageBonus();
    calculateMiths();
}

$(document).ready(function () {
    calculateCaracteristicsTwo();
});

// Save Button function
saveInfoButtonThree.click(function () {
    saveAlertThree.removeAttr('hidden');
    continueButtonPageThree.removeAttr('hidden');
});

// *************************************************************************** Page four functions
