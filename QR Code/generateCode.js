const QRCode = require('qrcode');

QRCode.toFile('./qrcode.png', '192.168.2.45/user/.168.2.45.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000192.168.2.45/user/453fum42000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', {
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