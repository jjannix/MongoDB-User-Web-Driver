const readline = require('readline');
const generateRandomId = require('./idGenerator');
const { readDatabase, writeDatabase, checkIdInDB } = require('./fileOperations');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter a username: ', (username) => {

    readDatabase('mockDB.json', (err, jsonData) => {
        if (err) {
            console.error('Error reading file:', err);
            rl.close();
            return;
        }

        let randomId;
        let idExists;
        let attempts = 0;
        const maxAttempts = 10000;
        const idLenght = 4;

        do {

            randomId = generateRandomId(idLenght);


            idExists = checkIdInDB(randomId, jsonData);
            attempts++;

            if (attempts >= maxAttempts) {
                console.error('Exceeded maximum attempts. Unable to generate a unique ID.');
                rl.close();
                return;
            }
        } while (idExists);

        console.log(`Generated unique ID: ${randomId}`);


        const newData = [...jsonData, { name: username, id: randomId }];

        writeDatabase('mockDB.json', newData, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                rl.close();
                return;
            }
            console.log(`ID ${randomId} has been added to the database with username ${username}.`);
            rl.close();
        });
    });
});
