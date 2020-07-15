const $ = require('jquery');

import {EDU, DES, CON, FUE, APA} from "../create-character-page-two/create-character-page-two.js";

// DOM Elements
const outputAge = $('#age');
const inputAddAge = $('#add-age');
const addAgeButton = $('#button-add-age');
const outputFinalAge = $('#final-age');
const saveButton = $('#save-age-button');
const saveAlert = $('#save-alert-four');
const continueButton = $('#continue-page-four-button');

// Variables
let outputCalculAge;
let finalAge;
let age;

function calculateAge() {
    outputCalculAge = EDU + 6;
    outputAge.text(outputCalculAge);
}

function addAge() {
    let add = inputAddAge.val();
    let dif = Math.round(parseInt(add)/10);
    if(dif => 1){
        console.log(`quitar ${dif} punto a DES, CON, FUE o APA`);
    }
    finalAge = parseInt(outputCalculAge) + parseInt(add);
    outputFinalAge.text(finalAge)
}

function saveAge() {
    age = finalAge;
    saveAlert.removeAttr('hidden');
    continueButton.removeAttr('hidden');
}

$(document).ready(function () {
    calculateAge();
});

addAgeButton.click(function () {
    addAge();
});

saveButton.click(function () {
    saveAge();
});

export {age};
