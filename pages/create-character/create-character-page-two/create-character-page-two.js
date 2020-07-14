const $ = require('jquery');

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

export {FUE, DES, INT, CON, APA, POD, TAM, COR, EDU};
