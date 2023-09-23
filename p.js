const { readFile } = require('fs');
const { resolve } = require('path');

readFile('./music/起风了-买辣椒也用券.lrc', (err, data) => {
    console.log(data.toString());

})