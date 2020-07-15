const $ = require('jquery');

//DOM Elements
const infoButton = $('#info-button');
const characterButton = $('#character-button');
const newGameButton = $('#new-game-button');
const loadGameButton = $('#load-game-button');
const backButton = $('#back-button');

infoButton.click(function () {
    document.location.href = "#"
});

characterButton.click(function () {
    document.location.href = "../create-character/create-character.html"
});

newGameButton.click(function () {
    document.location.href = "#"
});

loadGameButton.click(function () {
    document.location.href = "#"
});

backButton.click(function () {
    document.location.href = "#"
});
