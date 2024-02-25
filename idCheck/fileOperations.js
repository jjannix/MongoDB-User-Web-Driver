const fs = require('fs');

function checkIdInDB(id, jsonData) {
    return jsonData.some(item => item.id === id);
}

function readDatabase(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            callback(null, jsonData);
        } catch (error) {
            callback(error);
        }
    });
}

function writeDatabase(filename, data, callback) {
    fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8', (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}

module.exports = {
    checkIdInDB,
    readDatabase,
    writeDatabase
};
