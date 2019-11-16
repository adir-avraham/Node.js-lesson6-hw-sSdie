const fs = require('fs');
const data = fs.readFileSync('users.json')
const users = JSON.parse(data);



module.exports = users;