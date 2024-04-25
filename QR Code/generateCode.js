const QRCode = require('qrcode');

QRCode.toFile('./qrcode.png', 'Hello World!', {
    color: {
        dark: '#0C0D39',
        light: '#E4E5FF'
    },
    margin: 1,
    width: 500,
    height: 500,
    errorCorrectionLevel: 'H',
    type: 'image/png',
}, function (err) {
    if (err) throw err
    console.log('done')
});