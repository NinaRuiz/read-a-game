const fs = require('fs');
const path = './data/characters/';
const typeJson = '.json';

// Create Character Object Function
function createCharacterObject(name, age, profession) {
    // Set the data as an object
    let createdObject = {
        name: name,
        age: age,
        profession: profession
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
