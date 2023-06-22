const qrcode = require('qrcode');

const url="https://www.youtube.com/channel/UCo9OnQHZ9UCb6EjGhqgPxCA"

qrcode.toString(url,{type :"terminal"},(err,qrCode) => {
    if (err)
    {
        console.error(err)
        return;
    }
    console.log(qrCode);

});