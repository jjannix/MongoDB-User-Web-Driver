function generateRandomId(idLength) {
    const letterCharacters = 'ABC';
    const numberCharacters = '0123456789';
    let id = '';

    id += letterCharacters.charAt(Math.floor(Math.random() * letterCharacters.length));

    id += numberCharacters.charAt(Math.floor(Math.random() * numberCharacters.length));

    for (let i = 2; i < idLength; i++) {
        const characters = Math.random() < 0.5 ? letterCharacters : numberCharacters;
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    id = id.split('').sort(() => Math.random() - 0.5).join('');
    
    return id;
}

module.exports = generateRandomId;
