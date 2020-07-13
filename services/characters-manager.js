const fs = require('fs');
const path = './data/characters/';
const typeJson = '.json';

// Create Character Object Function
function createCharacterObject(
    player_name, character_name, profession, degrees, birth_place,
    mental_health, gender, age, FUE, DES, INT, CON, APA, POD,
    TAM, COR, EDU, ideas, luck, knowledge, sanity, magic, health,
    ) {
    // Set the data as an object
    let createdObject = {
        player_name: player_name,
        character_name: character_name,
        profession: profession,
        degrees: degrees,
        birth_place: birth_place,
        mental_health: mental_health,
        gender: gender,
        age: age,
        characteristics: {
            FUE: FUE,
            DES: DES,
            INT: INT,
            CON: CON,
            APA: APA,
            POD: POD,
            TAM: TAM,
            COR: COR,
            EDU: EDU,
            ideas: ideas,
            luck: luck,
            knowledge: knowledge,
            },
        sanity: sanity,
        magic: magic,
        health: health,
        abilities: {},
        fire_guns: {},
        attacks: {},
        personal_stuff: {
            home: {},
            description: "null",
            family_friends: {},
            crazy_episodes: {},
            injuries: {},
            scars: {},
        },
        history: "null",
        savings_incomes: {
            yearly: 0,
            money: 0,
            savings: 0,
            properties: {},
            houses: {}
        },
        studied_miths: {},
        magic_objects: {},
        magic_spells: {},
        equipment: {},
        found_beings: {}
    };

    // Return the object
    return createdObject;
}

// Create Character json file
function createCharacter(data, name){

    let json;

    // Try to convert the data object to json
    try {
        json = JSON.stringify(data);
    }catch (e) {
        console.log(e);
    }

    // Create the file and save it to the default path
    fs.writeFile(path + name + typeJson, json, function (err) {
        if (err) {
            return console.error(err);
        }
    });
}

// Read a json file with the Character information
function loadCharacter(name){
    fs.readFile(path + name + typeJson, function (err, data) {
        if (err) {
            return console.error(err);
        }
        let json = JSON.parse(data.toString());

        console.log(json);
    });
}

function saveCharacter(){

}

function deleteCharacter(){

}

export {saveCharacter, createCharacter, createCharacterObject, deleteCharacter, loadCharacter};
