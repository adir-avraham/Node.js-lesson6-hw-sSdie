const fs = require('fs');

function writeToJson (file, data) {
    const dataToString = JSON.stringify(data, null, 2);
    fs.writeFileSync(file, dataToString, (err)=>{
        if (err) return console.log(err.message);
    }); 
}


module.exports = writeToJson;


