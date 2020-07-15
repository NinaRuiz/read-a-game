const fs = require('fs');
const databasePath = './data/';
const typeJson = '.json';

class dbManager {
    // Read database files
    // path = characters | call-of-cthulhu
    // id =
    get(path, id){
        fs.readdir(databasePath + path + id, (err, data) =>{
            if(err){
                throw err;
            }else if(data != null){
                return data;
            }else{
                console.log("Data is null");
            }
        } )
    }

    push(path, id, newData) {
        fs.writeFile(databasePath + path + id + typeJson, newData, function (err) {
            if (err) {
                throw err;
            }
            console.log("saved")
        })
    }

    delete(path, id){
        fs.unlink(databasePath + path + id, function (err) {
            if(err){
                throw err;
            }
            console.log("deleted")
        })
    }
}

export {dbManager};
