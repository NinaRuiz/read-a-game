const $ = require('jquery');

import {FUE, DES, INT, CON, APA, POD, TAM, COR, EDU} from "./create-character-page-two/create-character-page-two";
import {player_name, birth_place, mental_health, character_name, gender} from "./create-character-page-one/create-character-page-one";
import {createCharacterObject, createCharacter} from "../../services/characters-manager.js";

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
