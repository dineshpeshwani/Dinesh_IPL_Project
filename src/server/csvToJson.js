const csvtojson = require('csvtojson')
const fs = require('fs');

const csvfilepath = '../data/output.json';

csvtojson()
.fromFile(csvfilepath)
.then((json) =>
  fs.writeFileSync("output.json", JSON.stringify(json), "utf-8", (err) => {
    if (err) console.log(err);
  }));

const csvfilepath2 = "../data/deliveries.csv";

const data2 = csvtojson().fromFile(csvfilepath2).then((json) => 
fs.writeFileSync("deliveriesOutput.json", JSON.stringify(json), "utf-8" , (err) => {
  if(err) console.log(err);
})); 

console.log(data);