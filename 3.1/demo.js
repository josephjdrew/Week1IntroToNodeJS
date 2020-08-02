var fs = require('fs');
var data = require('./data.json');
console.log(data.name); //we can access the property and hence it is an object


fs.readFile('./data.json', 'utf-8',(err,data) => { //but here is just a string, so we have to set json.parse
    var data = JSON.parse(data);
    console.log(data.name);
})